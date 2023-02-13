import { CLASS_NAMES } from "./ActionTypes";

export const classFree = () => {
    return {
      type: CLASS_NAMES.FREE,
      payload: "disableOverlay",
    };
}
export const classEnable = (className) => {
    return {
        type: CLASS_NAMES.ENABLE,
        payload:className
    }
}
export const classDisableOverlay = (className) => {
  return {
    type: CLASS_NAMES.DISPLAY_OVERLAY,
    payload: className,
  };
};