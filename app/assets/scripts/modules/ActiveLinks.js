import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
class ActiveLinks {
    constructor() {
        this.pageSections = $(".section");
        this.headerLinks = $(".menu-list a");
        this.createWaypoints();
    }
    createWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var linkElement = currentPageSection.getAttribute('data-active-link');
                        that.headerLinks.removeClass('active');
                        $(linkElement).addClass("active");
                    }
                },
                offset: "20%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var linkElement = currentPageSection.getAttribute('data-active-link');
                        that.headerLinks.removeClass('active');
                        $(linkElement).addClass("active");
                    }
                },
                offset: "-60%" // we cant set a variable for that and set it according to direction, coz yeh code sequentially nai chalega yeh offset pehle hi set ho jayega. 
            });

        });
    }
}
export default ActiveLinks;
