#pragma once

#include <memory>
#include <utility>
#include <vector>

#include "RNSkBaseInterpolator.h"
#include "RNSkPointConverter.h"

namespace RNSkia {

/**
 Implements a base clock value class
 */
class RNSkPointInterpolator : public RNSkBaseInterpolator {
public:
  /**
   Constructor
   */
  RNSkPointInterpolator(std::shared_ptr<RNSkPlatformContext> platformContext,
                        RNSkInterpolatorConfig config)
      : RNSkBaseInterpolator(platformContext, config) {}

  /**
   Constructor from jsi values
   */
  RNSkPointInterpolator(std::shared_ptr<RNSkPlatformContext> platformContext,
                        jsi::Runtime &runtime, const jsi::Value &maybeConfig)
      : RNSkBaseInterpolator(platformContext, runtime, maybeConfig) {}

protected:
  /**
   Interpolator function
   */
  void interpolateRange(double current, size_t index, double inputMin,
                        double inputMax, JsiValue &output) override {
    auto x = interpolate(current, inputMin, inputMax, _outputs[index]->x(),
                         _outputs[index + 1]->x());
    auto y = interpolate(current, inputMin, inputMax, _outputs[index]->y(),
                         _outputs[index + 1]->y());

    if (_jsiPoint == nullptr) {
      SkPoint result = SkPoint::Make(x, y);
      _jsiPoint =
          std::make_shared<JsiSkPoint>(getPlatformContext(), std::move(result));
    } else {
      _jsiPoint->getObject()->set(x, y);
    }

    output.setHostObject(_jsiPoint);
  };

  void readFromConfig(const RNSkInterpolatorConfig &config) override {
    _outputs.resize(config.outputs.size());
    for (size_t i = 0; i < config.outputs.size(); ++i) {
      _outputs[i] = RNSkPointConverter::convert(config.outputs[i]);
    }
  }

private:
  std::vector<std::shared_ptr<SkPoint>> _outputs;
  std::shared_ptr<JsiSkPoint> _jsiPoint;
};
} // namespace RNSkia