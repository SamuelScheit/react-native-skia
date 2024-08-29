/*global NodeJS*/
import type { HostConfig } from "react-reconciler";
import { DefaultEventPriority } from "react-reconciler/constants";

import type { NodeType, Node } from "../dom/types";
import {
  bindReanimatedProps,
  extractReanimatedProps,
  unbindReanimatedNode,
} from "../external/reanimated/renderHelpers";

import type { Container } from "./Container";
import { createNode } from "./HostComponents";
import { shallowEq } from "./typeddash";

const DEBUG = false;
export const debug = (...args: Parameters<typeof console.log>) => {
  if (DEBUG) {
    console.log(...args);
  }
};

type Instance = Node<unknown>;

type Props = object;
type TextInstance = Node<unknown>;
type SuspenseInstance = Instance;
type HydratableInstance = Instance;
type PublicInstance = Instance;
type HostContext = null;
type UpdatePayload = Container;
type ChildSet = unknown;
type TimeoutHandle = NodeJS.Timeout;
type NoTimeout = -1;

type SkiaHostConfig = HostConfig<
  NodeType,
  Props,
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  ChildSet,
  TimeoutHandle,
  NoTimeout
>;

const appendNode = (parent: Node<unknown>, child: Node<unknown>) => {
  parent.addChild(child);
};

const removeNode = (parent: Node<unknown>, child: Node<unknown>) => {
  unbindReanimatedNode(child);
  return parent.removeChild(child);
};

const insertBefore = (
  parent: Node<unknown>,
  child: Node<unknown>,
  before: Node<unknown>
) => {
  parent.insertChildBefore(child, before);
};

export const skHostConfig: SkiaHostConfig = {
  /**
   * This function is used by the reconciler in order to calculate current time for prioritising work.
   */
  now: Date.now,
  supportsMutation: true,
  isPrimaryRenderer: false,
  supportsPersistence: false,
  supportsHydration: false,
  //supportsMicrotask: true,

  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,

  appendChildToContainer(container, child) {
    debug("appendChildToContainer");
    appendNode(container.root, child);
  },

  appendChild(parent, child) {
    debug("appendChild", parent, child);
    appendNode(parent, child);
  },

  getRootHostContext: (_rootContainerInstance: Container) => {
    debug("getRootHostContext");
    return null;
  },

  getChildHostContext(_parentHostContext, _type, _rootContainerInstance) {
    debug("getChildHostContext");
    return null;
  },

  shouldSetTextContent(_type, _props) {
    return false;
  },

  createTextInstance(
    _text,
    _rootContainerInstance,
    _hostContext,
    _internalInstanceHandle
  ) {
    debug("createTextInstance");
    // return SpanNode({}, text) as SkNode;
    throw new Error("Text nodes are not supported yet");
  },

  createInstance(
    type,
    pristineProps,
    container,
    _hostContext,
    _internalInstanceHandle
  ) {
    debug("createInstance", type);
    const [props, reanimatedProps] = extractReanimatedProps(pristineProps);
    const node = createNode(container, type, props);
    bindReanimatedProps(container, node, reanimatedProps);
    return node;
  },

  appendInitialChild(parentInstance, child) {
    debug("appendInitialChild");
    appendNode(parentInstance, child);
  },

  finalizeInitialChildren(
    parentInstance,
    _type,
    _props,
    _rootContainerInstance,
    _hostContext
  ) {
    debug("finalizeInitialChildren", parentInstance);
    return false;
  },

  commitMount() {
    // if finalizeInitialChildren = true
    debug("commitMount");
  },

  prepareForCommit(_containerInfo) {
    debug("prepareForCommit");
    return null;
  },

  resetAfterCommit(container) {
    debug("resetAfterCommit");
    container.redraw();
  },

  getPublicInstance(node: Instance) {
    debug("getPublicInstance");
    return node;
  },

  prepareUpdate: (
    _instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    _hostContext
  ) => {
    debug("prepareUpdate");
    const propsAreEqual = shallowEq(oldProps, newProps);
    if (propsAreEqual) {
      return null;
    }
    debug("update ", type);
    return rootContainerInstance;
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    prevProps,
    nextProps,
    _internalHandle
  ) {
    debug("commitUpdate: ", type);
    if (shallowEq(prevProps, nextProps)) {
      return;
    }
    const [props, reanimatedProps] = extractReanimatedProps(nextProps);
    instance.setProps(props);
    bindReanimatedProps(updatePayload, instance, reanimatedProps);
  },

  commitTextUpdate: (
    _textInstance: TextInstance,
    _oldText: string,
    _newText: string
  ) => {
    //  textInstance.instance = newText;
  },

  clearContainer: (container) => {
    debug("clearContainer");
    container.root.children().forEach((child) => {
      container.root.removeChild(child);
    });
  },

  preparePortalMount: () => {
    debug("preparePortalMount");
  },

  removeChild: (parent, child) => {
    removeNode(parent, child);
  },

  removeChildFromContainer: (container, child) => {
    removeNode(container.root, child);
  },

  insertInContainerBefore: (container, child, before) => {
    insertBefore(container.root, child, before);
  },

  insertBefore: (parent, child, before) => {
    insertBefore(parent, child, before);
  },
  // see https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  getCurrentEventPriority: () => DefaultEventPriority,
  beforeActiveInstanceBlur: () => {},
  afterActiveInstanceBlur: () => {},
  detachDeletedInstance: () => {},
};