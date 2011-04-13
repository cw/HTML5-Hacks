/* Author: 
Christian Wilcox 2010
*/

jQuery(document).ready(function () {

    jQuery(".programmable").css("color", "red");
    jQuery(".graphical").css("color", "green");
    jQuery(".doc_structure").css("color", "blue");
    /*
    var width = jQuery("#container").width(),
        page = {width: width, height: 1000},
        r = new Raphael("holder", page.width, page.height),
        elems = [
            {
                title: "SVG",
                href: "/svg",
                set: r.set(),
                elems: [
                    {title: "a"},
                    {title: "animate"},
                    {title: "circle"},
                    {title: "defs"},
                    {title: "ellipse"},
                    {title: "g"},
                    {title: "path"},
                    {title: "rect"},
                ]
            },
            {
                title: "Canvas",
                href: "/canvas",
                set: r.set()
            }
        ],
        rect = {width: page.width-2, height: page.height/2-4, stroke: "black", "stroke-width": "1px"},
        btn_txt = {"font-size": "75px", "stroke": "black", "stroke-width": "2px", "fill": "white", "text-anchor": "middle"},
        link_attr,
        offsets = {x: 0, y: 5},
        i,
        j,
        color,
        overScope,
        outScope;

    for (i = 0; i < elems.length; i += 1) {
        link_attr = {title: elems[i].title, href:elems[i].href};
        color = Raphael.getColor(); 
        console.log(color);
        r_elem = r.rect(
            1, // x
            i * (rect.height + offsets.y) + 1, // y
            rect.width, // width
            100, // height
            50) // corner radius
            .attr(rect)
            .attr(link_attr)
            .attr({"fill": "270-" + color + "-" + color + ":15-#000:25-#000"});
        elems[i].set.push(r_elem);
        elems[i].set.push(r.text(
            (rect.width/2),  // x
            (i * rect.height + 1) + (rect.height / 2) - 200, // y
            elems[i].title)
            .attr(btn_txt)
            .attr(link_attr)
        );
        if (elems[i].elems) {
            for (j = 0; j < elems[i].elems.length; j += 1) {
                title_str = "<" + elems[i].elems[j].title + "/>";
                console.log(title_str);
            }
        }
        */

/*
        r_elem.hover(function (event) {
            this.attr({"fill": "270-" + color + "-" + color + ":15-#000:25-#000"});
            this.animate({height: rect.height}, 100);
        }, function (event) {
            this.attr({"fill": color});
            this.animate({height: 100}, 400);
        }, overScope, outScope);
*/
        /*
        jQuery(r_elem).hover(
            function () {console.log("in")},
            function () {console.log("out")}
        );
        */

/*
    }

    elems[0].set.push(r.path("M 193.625 15.5 C 182.3725 15.4775 171.23125 19.57875 163.15625 27.84375 L 28.8125 165.3125 C -16.5775 221.5225 59.70625 214.96625 92.40625 231.15625 C 104.13625 243.14625 47.42625 252 59.15625 264 C 70.88625 275.99 130.09375 287.10375 141.84375 299.09375 C 153.57375 311.08375 117.8325 323.79125 129.5625 335.78125 C 141.2925 347.77125 168.42 336.41375 173.5 364.09375 C 177.12 383.87375 222.39125 372.60625 244.53125 356.40625 C 256.26125 344.40625 222.11375 345.52125 233.84375 333.53125 C 263.01375 303.70125 290.145 322.7025 300.125 292.8125 C 305.055 278.0425 257.1875 270.0525 268.9375 258.0625 C 302.6875 238.3525 419.35 225.50625 364 170.15625 L 224.75 27.84375 C 216.235 19.66875 204.8775 15.5225 193.625 15.5 z M 194.90625 28.5625 C 202.90865 28.629455 210.88252 31.651563 216.625 37.46875 L 269.78125 91.4375 C 274.82125 96.5875 274.7575 106.5675 271.9375 109.4375 L 245.53125 88.34375 L 240.34375 119.59375 L 218.3125 107.96875 L 183 130.28125 L 171.3125 83.25 L 152.34375 116.0625 L 123.34375 116.0625 C 111.52375 116.0625 110.135 101.0525 120.875 90.3125 C 139.635 70.0625 161.14375 49.42875 172.84375 37.46875 C 178.35625 31.834375 185.78559 28.901541 193.3125 28.59375 C 193.84566 28.571948 194.37276 28.558036 194.90625 28.5625 z M 131 238.59375 C 134.59 240.82375 188.88625 251.8625 202.15625 254.0625 C 206.75625 255.0325 203.49625 259.76875 197.15625 262.96875 C 182.85625 266.76875 113.5 238.59375 131 238.59375 z M 342.125 276.375 C 331.2 276.75125 320.43875 282.3475 317.46875 292.8125 C 317.46875 299.6325 367.71875 304.0875 367.71875 291.1875 C 364.13875 280.8275 353.05 275.99875 342.125 276.375 z M 111.75 305.9375 C 96.001577 305.79141 77.509375 317.29656 91.09375 329.0625 C 102.99375 339.3525 121.365 326.485 126.875 312.125 C 123.63219 307.81625 117.91243 305.99466 111.75 305.9375 z M 311.15625 306.8125 C 295.81625 320.5725 312.88 334.54625 328 325.65625 C 331.37 322.23625 327.90625 310.2325 311.15625 306.8125 z")).attr({stroke:"black", fill:"white"});
*/

});
