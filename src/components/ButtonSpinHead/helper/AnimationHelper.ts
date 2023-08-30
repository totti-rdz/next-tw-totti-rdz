export class AnimationHelper {
  private static browserPrefixes = ["", "-ms-", "-webkit-", "-o-", "-moz-"];
  private static cursorStyles = [
    "n-resize",
    "nw-resize",
    "w-resize",
    "sw-resize",
    "s-resize",
    "se-resize",
    "e-resize",
    "ne-resize",
  ];

  public static rotatePage() {
    this.browserPrefixes.forEach((prefix) => {
      (document.body as { [key: string]: any }).style[prefix + "transition"] =
        prefix + "transform 3s";
      (document.body as { [key: string]: any }).style[prefix + "transform"] =
        "rotate(360deg)";
    });
  }

  public static rotateImages() {
    this.browserPrefixes.forEach((prefix) => {
      Array.from(document.querySelectorAll("img")).forEach(
        (el: { [key: string]: any }) => {
          el.style[prefix + "transform"] = "rotate(180deg)";
        }
      );
    });
  }

  public static startCursorAnimation(interval: number) {
    let cursorIndex = 0;

    const intervalId = setInterval(() => {
      cursorIndex = (cursorIndex + 1) % this.cursorStyles.length;
      document.body.style.cursor = this.cursorStyles[cursorIndex];
    }, interval);

    return intervalId;
  }
}
