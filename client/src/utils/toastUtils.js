export const showToast = (message, type, duration) => {
  if (window.showAppToast) {
    window.showAppToast(message, type, duration);
  } else {
    console.warn("showAppToast is not defined. Toast might not be displayed.");
  }
};