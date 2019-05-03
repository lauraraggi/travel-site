import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(els, offset) {
    this.offsetPercentage = offset;
    this.itemsToReveal = els;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially = () => {
    this.itemsToReveal.addClass("reveal-item");
  };

  createWaypoints = () => {
    this.itemsToReveal.each(() => {
      new Waypoint({
        element: this,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: this.offsetPercentage
      });
    });
  };
}

export default RevealOnScroll;
