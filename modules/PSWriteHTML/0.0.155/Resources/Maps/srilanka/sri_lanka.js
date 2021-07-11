/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of Sri Lanka
 * 
 * @author Jackson Hardaker
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";

    $.extend(true, Mapael,
        {
            maps: {
                sri_lanka: {
                    width: 441,
                    height: 779,
                    getCoords: function (lat, lng) {

                        var minLat = 5.919298,
                        maxLat = 9.835597,
                        minY = 0.266,
                        maxY = 778.740,
                        minLng = 79.650373,
                        maxLng =  81.878378,
                        minX = 0.256,
                        maxX = 440.744;

                        var x = ((lng - minLng) / (maxLng - minLng)) * (maxX - minX);
                        var y = maxY - (((lat - minLat) / (maxLat - minLat)) * (maxY - minY));

                        return { x: x, y: y };
                    },
                    'elems': {
                        "Central-Province": "m 238.99,525.6 8.45,-1.27 8.2,1.68 -0.2,3.62 1.53,4.94 -0.46,1.84 0.41,1.68 0.92,1.07 0.71,1.02 -1.37,1.63 -0.92,1.89 1.07,3.52 0.31,1.38 -0.66,1.48 -1.32,1.63 -1.58,1.48 -1.78,3.52 -0.92,3.87 -4.38,6.58 -7.43,1.63 -3.56,1.68 -3.16,2.85 -0.92,3.98 -2.65,3.06 -3.72,-0.2 -3.56,0.15 0.25,3.21 6.26,3.16 1.32,2.8 1.12,3.06 0.97,1.22 0.81,1.33 -2.9,4.74 1.78,1.17 1.83,0.92 -2.04,2.85 -3.72,0.92 -11.15,5.91 -6.16,0.82 -6.52,-0.2 -4.89,0.36 -4.18,0.71 -10.8,-1.48 -10.24,-2.29 -4.84,-0.41 -4.02,-3.11 0.71,-2.04 1.48,-1.43 -1.32,-1.48 0.15,-3.26 2.24,-1.99 -0.31,-2.65 -1.53,-5.25 -4.53,-3.42 -5.75,-1.89 -1.68,-5.76 1.37,-7.39 -1.27,-1.27 -1.12,-1.53 1.12,-1.48 1.48,-0.51 2.75,-2.45 1.73,-2.8 -0.66,-0.15 -0.25,-0.66 5.65,0.51 8.81,13.2 5.75,3.42 4.28,-4.54 2.34,-6.63 -2.34,-3.21 -2.95,-2.8 -3.46,-6.42 -1.53,-0.71 -1.63,0.51 4.48,-3.57 7.13,0.87 3.97,-0.87 5.75,-4.03 3.82,-0.05 3.41,0.87 12.68,-15.09 4.02,-6.78 -1.83,-7.44 -0.61,-5.81 3.41,3.11 2.8,3.82 2.09,0.71 1.68,0.2 4.53,7.19 z m 3.31,-103.88 10.59,0.76 10.18,-1.89 -0.15,3.31 1.43,4.54 0.46,3.82 -1.88,9.43 -1.94,9.38 0.97,16.26 -6.26,-0.66 -3.97,0.61 -2.19,3.67 -1.27,1.07 -1.43,0.82 -2.39,-2.96 -3.26,1.58 -8.1,-0.05 -6.26,5.15 -5.65,0.87 -7.33,-6.07 -2.9,-1.17 -2.75,1.68 -1.17,3.11 0.66,7.34 -4.23,4.64 -7.23,-0.41 -12.53,-7.9 -4.07,-5.61 0.1,-2.04 1.12,-1.53 0.41,-2.4 -0.56,-2.5 -1.02,-2.09 -1.17,-1.99 -1.99,-4.03 0.46,-4.18 2.8,-2.55 0.71,-1.73 -0.05,-1.84 0.61,-2.34 0.05,-2.29 -3.62,-3.57 -1.07,-6.17 -0.56,-6.68 -1.02,-1.43 -0.71,-0.51 -0.05,-3.42 -1.37,-3.42 -1.94,-3.31 -1.43,-3.11 -1.48,-0.41 -1.73,-0.97 -0.51,-3.52 0.92,-3.26 4.18,-3.11 6.62,-2.45 3.51,-4.23 3.16,0.15 2.34,1.53 2.95,-2.04 1.48,-2.4 1.37,-0.97 1.27,-0.76 -0.15,-1.38 -0.41,-0.92 2.5,-2.65 1.88,-2.85 v -3.72 l 1.07,-3.16 h 1.99 l 1.48,0.36 1.17,-0.82 3.82,-4.03 2.55,-2.29 3.77,-1.89 4.12,-1.68 1.73,1.68 2.7,3.11 -0.05,3.52 1.07,1.17 1.68,0.61 1.27,-0.82 0.05,-1.27 2.39,-1.12 2.29,0.66 3.11,0.61 2.9,1.73 -5.91,6.22 -1.94,9.43 -0.56,4.59 -1.88,8.05 -0.66,1.43 -0.41,1.43 -5.7,1.27 -1.32,5.51 2.65,12.08 -0.36,3.87 1.99,2.8 5.19,1.12 4.94,-2.04 3.92,-3.62 1.68,2.4 3,1.89 0.87,-3.52 z m -67.37,53.01 2.34,-0.56 2.34,-1.12 4.07,5.61 12.53,7.9 7.23,0.41 4.23,-4.64 -0.66,-7.34 1.17,-3.11 2.75,-1.68 2.9,1.17 7.33,6.07 5.65,-0.87 6.26,-5.15 8.1,0.05 3.26,-1.58 2.39,2.96 1.43,-0.82 1.27,-1.07 2.19,-3.67 3.97,-0.61 6.26,0.66 1.73,30.13 4.33,14.37 -0.36,6.47 -5.3,5 -4.23,1.17 -2.5,1.53 -8.2,-1.68 -8.45,1.27 -7.23,-0.56 -4.53,-7.19 -1.68,-0.2 -2.09,-0.71 -2.8,-3.82 -3.41,-3.11 0.61,5.81 1.83,7.44 -4.02,6.78 -12.68,15.09 -3.41,-0.87 -3.82,0.05 -5.75,4.03 -3.97,0.87 -7.13,-0.87 -4.48,3.57 1.63,-0.51 1.53,0.71 3.46,6.42 2.95,2.8 2.34,3.21 -2.34,6.63 -4.28,4.54 -5.75,-3.42 -8.81,-13.2 -5.65,-0.51 0.1,-3.92 1.43,-3.06 -1.43,-2.5 -3,-7.19 2.24,-2.09 6.82,-1.12 3.11,-3.36 2.19,-0.15 2.14,-0.51 1.53,-2.45 1.12,-2.6 -2.29,-2.91 -2.85,-2.85 -0.05,-2.91 0.46,-3.57 -2.39,-2.91 -4.99,-2.8 -1.68,-1.17 0.36,-3.87 -8.56,-7.49 -2.39,-6.12 4.07,0.46 3.51,-1.02 -0.31,-0.97 -0.15,-1.27 0.66,-1.17 0.81,-1.07 0.66,-4.03 h 2.8 l 3.06,2.19 3.41,0.25 0.25,-2.04 -0.31,-2.24 2.9,-1.63 2.85,0.51 2.09,-1.02 -1.17,-2.7 z",
                        "Eastern-Province": "m 243.11,170.31 3.82,-1.07 3.11,-1.38 0.1,3.11 2.29,1.68 -2.09,1.99 -1.88,2.19 3.11,2.45 3.36,-0.25 2.7,-2.55 2.04,-3.57 1.32,-3.26 7.13,8.61 6.37,10.91 2.55,2.65 3.62,1.07 2.9,2.34 4.23,10.3 2.24,2.34 4.84,2.19 2.44,5.2 2.75,10.4 0.51,-1.89 0.61,-0.76 1.07,0.25 1.94,1.07 -0.56,1.89 5.45,6.01 1.83,2.96 v 3.62 l -1.43,1.43 -2.04,0.92 -1.88,2.19 2.9,-0.76 1.12,-0.61 4.33,9.33 0.61,4.89 -4.94,0.76 1.02,-3.21 -1.32,-2.6 -2.14,-0.31 -1.58,3.42 0.51,2.65 1.43,1.89 0.76,2.04 -1.48,3.06 -3.31,-2.55 -3.41,-2.14 -3.41,-0.82 -3.31,1.43 -2.55,3.42 0.87,1.84 3.06,-0.51 4.12,-3.36 2.8,3.01 2.55,3.62 3.11,3.01 4.33,1.22 9.06,-0.15 3.06,-1.99 -2.04,-4.64 5.19,-2.4 2.09,-0.61 2.14,0.15 2.39,1.38 2.19,2.34 1.63,2.7 1.43,8 3.06,10.25 0.2,5.4 -2.5,-1.78 -2.6,-5.3 -2.34,-1.12 -0.05,1.48 1.02,6.93 1.07,2.5 2.55,1.17 h 2.7 l 2.09,0.97 1.27,7.65 1.73,6.17 0.46,3.21 -17.72,-1.89 -3.26,1.17 h -3.06 -2.44 l -1.83,1.94 -1.27,2.4 -1.48,1.12 -1.37,1.17 -1.27,5.2 -0.97,1.94 -2.8,6.52 -4.94,1.12 -0.97,-0.31 -0.76,-0.56 2.24,-1.43 1.07,-2.5 -0.66,-3.77 0.05,-2.6 -0.31,-2.5 -1.37,-2.04 -2.5,0.2 -3.51,-1.78 -3.16,-2.45 -3.26,-1.89 h -3.56 l -14.92,-3.67 -8.3,0.82 -2.44,-2.45 -0.81,-4.18 -3.06,-2.34 -3.21,-1.27 -2.29,-3.42 -2.95,0.87 4.28,-15.29 0.46,-2.5 0.81,-2.45 2.44,-2.34 2.8,-1.84 1.63,-2.96 -1.32,-3.06 -2.29,-1.78 -1.78,-2.24 -2.75,-6.63 -5.25,-7.75 -0.81,-4.79 -2.09,-2.04 -1.68,-1.89 -0.15,-4.08 3.06,-7.14 -1.48,-4.18 -3.67,-8 -0.1,-8.56 3.31,-4.94 2.29,-5.15 -1.83,-1.43 -1.63,-2.14 -3,-3.36 -8.61,-6.01 -4.99,-2.85 -5.81,-0.1 -5.55,2.29 0.87,-3.52 1.63,-2.8 7.74,-3.62 9.12,-1.22 3.77,-1.07 z m 83.31,143.34 1.02,10.4 -1.58,31.4 1.48,7.34 3.26,7.19 1.63,7.44 -1.78,0.15 -7.18,-0.97 -5.6,0.82 -4.43,2.96 -1.48,5.81 -1.78,15.34 2.8,15.39 5.35,1.07 6.37,-0.31 5.25,1.73 6.72,9.79 4.38,4.18 6.01,1.68 6.26,1.22 -0.31,5.96 -1.94,5.81 0.41,3.31 1.78,2.96 6.21,3.77 3.36,3.26 12.93,2.24 13.14,-1.43 4.58,-2.6 0.1,5 1.53,4.89 0.61,11.27 1.43,3.21 6.93,-6.83 3.97,-3.26 5.4,-0.87 3.77,-0.61 -0.15,-0.71 2.09,-1.58 -1.43,-1.27 -0.56,-1.12 -0.41,-1.12 -0.97,-1.27 -1.02,-1.78 0.87,-1.22 1.43,-1.07 0.76,-1.38 -0.2,-0.82 -0.97,-1.89 -0.2,-0.66 1.17,-5.05 0.2,-0.36 -3.67,-9.33 -1.07,-1.58 -4.58,-3.36 -2.29,-0.87 0.71,2.75 -1.22,1.48 -0.92,-1.89 -0.36,-1.38 0.25,-1.12 1.02,-1.17 -2.14,-3.62 -2.04,-2.34 -5.25,-4.94 0.31,-2.14 -1.22,-1.48 -2.14,-1.07 -2.34,-0.87 -1.48,2.04 -1.94,0.71 -2.29,-0.31 -2.34,-1.07 1.37,-4.43 2.04,-2.14 2.7,-0.2 3.31,1.17 2.55,2.24 4.84,6.17 1.99,1.38 4.38,-1.33 -0.46,-3.82 -2.75,-4.38 -8.5,-8.92 -2.04,-3.36 -1.38,-4.13 h -1.32 l -4.23,0.71 -4.07,-4.69 -2.29,-6.78 1.17,-4.33 0.71,-0.51 1.07,-0.71 0.92,-0.05 -1.48,-2.4 -3.97,-3.06 -1.43,-2.7 -0.05,-2.45 0.66,-1.58 0.41,-1.63 -1.02,-2.5 -1.02,0.82 -1.99,0.97 -1.02,0.82 -0.15,-0.87 -0.25,-0.56 -0.41,-0.46 -0.41,-0.71 0.87,-0.97 -0.87,-1.89 -0.56,0.92 -1.32,0.97 -0.92,0.97 -2.44,-5.61 -1.43,-2.34 -2.19,-2.45 -1.68,-2.75 -1.63,-7.19 -1.58,-2.91 h -1.22 l -1.12,4.28 -3.31,0.25 -3.46,-2.55 -1.63,-4.18 -0.36,-0.61 -1.68,-0.51 -0.66,-0.76 -0.25,-1.22 v -0.97 l 0.15,-0.61 0.1,0.05 -0.2,-1.99 0.2,-6.27 h 1.48 l 3,8.31 2.24,9.38 3.62,-5 -1.58,-9.07 -4.68,-16.01 -17.72,-1.89 -2.12,0.91 m 80.64,103.38 2.5,2.5 2.44,5.76 1.78,2.65 2.29,6.12 6.98,11.16 3.36,17.38 -0.15,3.98 -2.9,2.45 -2.8,-2.24 -1.22,-1.27 -0.25,-1.99 0.81,-12.95 -0.56,-4.33 -2.19,-1.84 -0.81,-1.78 -6.57,-9.74 -0.41,-2.09 -1.63,-3.62 -0.66,-1.94 0.1,-2.09 0.61,-1.84 0.25,-1.94 -0.97,-2.34 m 32.23,139.36 0.31,4.13 -1.12,7.95 -9.06,31.6 -0.51,3.26 -0.2,4.33 -0.66,3.57 -2.85,5.61 -0.61,2.45 -1.12,3.42 -5.65,8.82 1.37,4.84 -2.19,5.76 -12.53,19.98 -1.73,-0.61 -4.79,-1.48 -3.31,-3.77 -2.5,-0.36 -2.29,-0.15 -5.86,-7.29 5.09,-73.15 -0.97,-3.92 -2.34,-3.42 -0.05,-3.82 -1.32,-3.87 0.92,-3.92 0.36,-3.72 -5.81,-3.52 -7.03,-1.84 -1.02,-0.92 -1.22,-0.71 h -1.48 l -1.58,-0.71 -1.53,-2.75 -0.81,-3.06 -2.55,-4.69 2.29,-6.17 4.12,-4.89 3.21,-2.55 -4.28,-5.91 -0.56,-4.28 -2.75,-4.84 -4.38,-3.82 -0.81,-3.82 0.31,-4.79 -2.34,-10.5 0.41,-2.65 -1.32,-0.25 -1.22,-0.71 2.9,-4.59 -3.87,-1.02 -4.94,2.65 -2.39,0.82 -2.19,0.97 -0.71,1.89 -1.32,2.14 -2.75,0.71 -2.04,0.15 0.05,2.6 1.07,2.34 0.25,2.34 -0.92,1.94 -1.37,1.68 -0.92,1.38 -3.97,2.24 -4.89,-0.2 v 7.65 l 1.07,7.39 -3.67,2.7 -4.02,1.43 -1.73,-3.26 -1.53,-3.82 -0.71,-3.57 -1.73,-3.62 -1.37,-2.29 -0.81,-1.78 -2.44,-0.46 -1.73,0.41 -2.95,-2.96 -2.14,-4.64 -1.32,-8.77 -0.76,-2.5 -0.61,-2.45 0.56,-1.78 1.12,-2.04 2.04,-9.68 -0.71,-9.99 -8.76,-1.89 -9.68,5.4 -4.23,3.92 -2.39,0.92 -1.94,0.46 -3.62,1.27 -4.84,-8.16 -1.58,-4.79 -0.25,-3.21 -1.27,-2.85 -3,-1.84 -0.51,-0.51 1.88,-9.43 -0.46,-3.82 -1.43,-4.54 0.15,-3.31 h 3.72 l 7.33,-0.71 3.62,-0.66 7.18,2.8 5.81,5.86 9.57,2.96 4.63,2.7 3.82,0.46 0.51,-2.09 0.92,-2.29 1.27,-1.33 1.07,-2.14 -0.61,-4.74 0.87,-4.49 5.35,1.07 6.37,-0.31 5.25,1.73 6.72,9.79 4.38,4.18 6.01,1.68 6.26,1.22 -0.31,5.96 -1.94,5.81 0.41,3.31 1.78,2.96 6.21,3.77 3.36,3.26 12.93,2.24 13.14,-1.43 4.58,-2.6 0.1,5 1.53,4.89 0.61,11.27 1.43,3.21 6.93,-6.83 3.97,-3.26 5.4,-0.87 3.77,-0.61 0.2,0.82 1.58,0.31 1.63,-2.04 h 1.22 l 1.53,8.05 -0.05,2.96 h 1.37 l 0.15,-2.85 0.46,-2.75 0.87,-2.4 1.17,-1.63 v -1.38 l -0.51,-1.58 0.36,-0.61 1.07,0.46 1.78,1.73 0.61,1.58 0.46,4.23 3,4.84 4.94,16.92 -0.92,46.9 0.46,3.16 z",
                        "North-Central-Province": "m 110.76,336.59 -18.18,-8.36 -4.23,-2.4 -2.24,-2.85 -2.9,-2.34 -3.97,0.15 -3.51,-2.65 -3.36,1.53 h -4.07 l -1.22,-3.52 -4.89,-20.08 -2.9,-5.61 2.14,-4.94 3.31,-1.53 0.92,-1.78 0.25,-1.38 6.16,-5.05 3.56,-7.65 -1.12,-8.21 1.63,0.82 1.94,0.2 0.41,-18.45 -1.58,-11.72 8.76,3.62 h 9.68 l 19.2,-5.05 0.05,6.47 2.04,5.61 3,1.07 2.9,1.33 1.27,2.45 0.71,2.7 2.09,4.23 4.18,2.24 2.04,0.56 1.94,0.1 3,-5.45 3.51,-1.53 3.67,-8.56 7.79,-10.14 6.01,-2.75 3.62,1.94 3.36,2.4 6.26,-0.05 5.25,-4.03 4.99,-4.49 4.33,-5.05 2.34,-3.67 2.8,-3.36 4.68,-3.72 -1.68,-5.2 -3.62,-4.69 -5.14,-1.78 -0.36,-4.38 14.67,-0.46 5.75,-4.03 5.14,-1.48 5.45,-1.02 5.55,-2.29 5.81,0.1 4.99,2.85 8.61,6.01 3,3.36 1.63,2.14 1.83,1.43 -2.29,5.15 -3.31,4.94 0.1,8.56 3.67,8 1.48,4.18 -3.06,7.14 0.15,4.08 1.68,1.89 2.09,2.04 0.81,4.79 5.25,7.75 2.75,6.63 1.78,2.24 2.29,1.78 1.32,3.06 -1.63,2.96 -2.8,1.84 -2.44,2.34 -0.81,2.45 -0.46,2.5 -4.28,15.29 -2.55,2.65 -1.48,3.57 -0.81,3.47 -2.55,1.48 h -8.71 l -7.79,1.48 -2.9,7.65 -1.63,8.36 -2.85,7.49 -1.32,7.8 -0.36,6.93 3.97,3.16 -3.87,5.4 -0.25,5.25 -4.12,1.68 -3.77,1.89 -2.55,2.29 -3.82,4.03 -1.17,0.82 -1.48,-0.36 h -1.99 l -1.07,3.16 v 3.72 l -1.88,2.85 -2.5,2.65 0.41,0.92 0.15,1.38 -1.27,0.76 -1.37,0.97 -1.48,2.4 -2.95,2.04 -2.34,-1.53 -3.16,-0.15 -3.51,4.23 -6.62,2.45 -4.18,3.11 -5.04,-4.79 0.76,-6.93 -0.97,-4.69 -1.83,-4.64 -0.51,-3.31 -1.63,-2.75 -3.21,-0.25 -2.75,-1.17 -0.36,-3.42 0.25,-3.67 -0.56,-4.23 0.36,-2.55 -0.05,-2.45 -3,-2.45 -3.72,0.1 -3.56,-2.19 -3.21,-3.26 -5.91,-4.84 -6.57,-2.55 -3.62,-0.51 -2.95,-2.14 -3.77,-1.53 z m 201,49.6 -1.78,15.34 2.8,15.39 -0.87,4.49 0.61,4.74 -1.07,2.14 -1.27,1.33 -0.92,2.29 -0.51,2.09 -3.82,-0.46 -4.63,-2.7 -9.57,-2.96 -5.81,-5.86 -7.18,-2.8 -3.62,0.66 -7.33,0.71 h -3.72 l -10.18,1.89 -10.59,-0.76 -0.46,3.57 -0.87,3.52 -3,-1.89 -1.68,-2.4 -3.92,3.62 -4.94,2.04 -5.19,-1.12 -1.99,-2.8 0.36,-3.87 -2.65,-12.08 1.32,-5.51 5.7,-1.27 0.41,-1.43 0.66,-1.43 1.88,-8.05 0.56,-4.59 1.94,-9.43 5.91,-6.22 -2.9,-1.73 -3.11,-0.61 -2.29,-0.66 -2.39,1.12 -0.05,1.27 -1.27,0.82 -1.68,-0.61 -1.07,-1.17 0.05,-3.52 -2.7,-3.11 -1.73,-1.68 0.25,-5.25 3.87,-5.4 -3.97,-3.16 0.36,-6.93 1.32,-7.8 2.85,-7.49 1.63,-8.36 2.9,-7.65 7.79,-1.48 h 8.71 l 2.55,-1.48 0.81,-3.47 1.48,-3.57 2.55,-2.65 2.95,-0.87 2.29,3.42 3.21,1.27 3.06,2.34 0.81,4.18 2.44,2.45 8.3,-0.82 14.92,3.67 h 3.56 l 3.26,1.89 3.16,2.45 3.51,1.78 2.5,-0.2 1.37,2.04 0.31,2.5 -0.05,2.6 0.66,3.77 -1.07,2.5 -2.24,1.43 0.76,0.56 0.97,0.31 4.94,-1.12 2.8,-6.52 0.97,-1.94 1.27,-5.2 1.37,-1.17 1.48,-1.12 1.27,-2.4 1.83,-1.94 h 2.44 3.06 l 1.02,10.4 -1.58,31.4 1.48,7.34 3.26,7.19 1.63,7.44 -1.78,0.15 -7.18,-0.97 -5.6,0.82 -4.43,2.96 z",
                        "Northern-Province": "m 110.61,113.48 0.51,5.56 -5.19,-0.66 -3.77,2.85 -4.18,2.09 -6.77,0.61 h -1.43 l 1.22,-4.84 v -11.62 l 0.41,-1.68 -0.36,-1.12 -2.34,-0.46 -5.45,-2.85 -2.09,-1.94 -1.58,-4.43 -0.92,-4.69 -0.1,-2.65 2.34,-2.5 4.38,-2.19 4.84,-1.53 3.97,-0.61 1.78,-0.87 4.33,-5.81 1.27,-0.92 1.43,-0.87 1.78,-0.66 2.24,-0.36 -1.83,-3.47 -2.29,-3.06 -2.9,-2.91 -3.82,-2.85 -14.62,-8.56 -2.9,-3.67 6.37,0.2 5.96,2.45 11.92,6.88 11.36,2.85 2.95,1.89 4.68,4.13 1.12,2.14 -2.39,1.22 0.51,1.38 0.71,1.38 -1.22,1.33 4.12,2.8 9.78,-2.4 17.77,-7.09 4.79,0.46 10.54,2.91 12.37,5.61 9.37,1.78 0.1,0.1 -1.02,0.87 -0.41,3.31 -4.23,3.31 -0.56,4.54 0.51,4.49 -4.48,-2.45 -3.87,-3.26 -1.53,-1.89 -0.92,0.31 -2.75,9.02 -3.31,1.78 -4.99,0.31 -9.01,-0.46 -2.65,0.1 -3.36,8.61 -5.25,0.51 -5.3,-0.97 -5.4,0.05 -15.12,1.78 z m 44.61,-62.8 2.5,7.6 0.41,2.04 -2.44,0.1 -1.58,0.61 -0.66,1.07 -0.71,0.36 -2.65,-1.89 -1.07,-0.2 -6.37,0.15 -1.83,-0.51 -14.05,-12.18 -6.01,-3.87 -2.14,-0.97 4.12,-7.29 2.7,-5.71 9.42,10.3 6.11,3.82 z m 35.09,25.38 -0.92,0.76 -0.1,-0.1 -13.39,-9.18 -4.63,-2.19 -4.07,-0.87 -1.22,-0.56 -3.56,-2.7 -1.32,-0.82 -1.37,-0.2 -1.58,0.1 -0.41,-2.04 -2.5,-7.6 0.46,0.2 v -1.48 l -7.18,-3.62 -17.31,-14.17 -14.21,-16.41 -7.18,-3.87 -11.36,-2.7 -2.95,-2.14 -0.41,-3.01 4.12,-1.84 5.5,-0.87 8.15,-0.46 3.92,0.76 2.75,1.94 1.78,6.47 1.83,2.75 25.77,30.38 3.82,2.8 7.74,4.38 31.06,25.23 z m -175.23,-10.09 -3.16,3.01 -4.99,0.31 -4.63,-1.53 -2.04,-2.5 -0,-8.21 0.56,-2.04 1.32,0.25 1.37,1.68 0.81,2.09 3.36,1.07 4.07,0.31 1.02,0.76 z m 32.34,-49.6 -0.71,2.34 -0.56,2.75 0.05,2.7 0.36,2.34 0.81,1.99 1.63,1.84 0.81,0.2 3.82,-0.2 0.66,0.61 0.25,3.01 0.51,1.22 2.24,1.43 3.06,1.27 2.55,1.48 0.87,1.89 -1.37,1.43 h -2.6 l -2.8,-0.87 -1.94,-1.22 -1.43,-0.36 -3.51,2.09 -2.5,0.31 -3.06,-2.24 -3.06,-4.54 -4.79,-9.58 2.19,-3.42 0.51,-4.33 1.22,-3.57 4.28,-0.92 2.34,0.71 z m 78.01,13.61 -2.7,5.71 -4.12,7.29 -10.13,-4.43 -3.67,-2.09 -2.44,-0.05 0.46,4.84 1.37,1.43 2.14,1.63 1.22,1.94 -1.27,2.55 -1.48,0.46 -1.43,-0.76 -1.32,-1.12 -3.77,-1.94 -7.38,-6.47 -4.28,-1.78 2.19,2.34 3.87,3.36 2.19,2.45 -4.79,-0.92 -4.74,-1.99 -9.47,-5.25 -7.59,-5.96 -4.48,-1.58 -2.14,-1.38 -1.58,-0.66 -0.25,1.43 -2.14,-1.48 -0.81,-1.94 -0.41,-2.29 -0.76,-2.6 -1.27,-2.19 -2.8,-3.67 -1.32,-2.29 4.28,-2.14 7.79,-7.19 3.46,-1.58 15.43,1.38 8.05,-0.92 2.9,0.36 1.17,2.65 -0.2,4.18 0.56,1.48 1.73,0.56 1.63,0.2 4.74,1.22 0.97,0.51 0.87,1.78 2.14,-0.05 2.29,-0.76 1.68,-0.2 2.14,1.27 z m 130.87,131.51 0.76,0.61 -0.05,1.38 -0.92,1.43 -1.83,0.66 -0.51,-0.61 -2.19,-3.47 -2.34,-1.27 -5.4,-1.38 -3.16,-1.43 2.24,3.11 7.13,6.68 v 0.66 l -3.11,1.38 -3.82,1.07 -3.41,2.04 -3.77,1.07 -9.12,1.22 -7.74,3.62 3.62,-13.51 -2.39,-3.21 -6.26,-3.82 -6.21,-0.97 -2.9,1.99 -3.06,0.71 0.31,-2.7 1.94,-2.8 -2.29,-4.03 -5.3,-0.56 -0.71,-6.42 -6.11,-2.34 -6.42,0.2 -0.46,0.97 -0.36,1.02 -1.88,1.07 -1.99,0.97 -3.36,3.01 -4.84,2.14 -3.06,-4.54 -4.94,-3.11 -6.77,0.2 -3.82,-0.25 -3.51,0.36 -0.51,2.91 1.53,2.09 2.9,0.46 0.2,1.63 -0.05,1.78 0.71,3.36 0.25,3.36 -3.51,5.35 -5.5,4.49 -9.17,5.76 -32.54,1.73 2.5,-7.14 -0.87,-1.38 -0.97,-1.78 0.71,-2.29 1.02,-2.29 0.66,-2.14 0.87,-1.99 4.33,-1.53 0.31,-4.08 -0.46,-4.64 0.71,-2.91 0.2,-3.06 -0.25,-1.48 -0.36,-1.38 -3.67,-5.81 -1.22,-6.52 -0.2,-6.78 5.19,0.66 -0.51,-5.56 5.14,-6.68 15.12,-1.78 5.4,-0.05 5.3,0.97 5.25,-0.51 3.36,-8.61 2.65,-0.1 9.01,0.46 4.99,-0.31 3.31,-1.78 2.75,-9.02 0.92,-0.31 1.53,1.89 3.87,3.26 4.48,2.45 -0.51,-4.49 0.56,-4.54 4.23,-3.31 0.41,-3.31 1.02,-0.87 0.92,-0.76 1.22,-1.02 23.32,18.96 1.63,2.65 2.19,2.75 4.23,4.03 2.7,3.47 -2.39,1.27 -1.53,-0.71 -2.09,-2.65 -1.17,-0.61 -3.56,-0.61 -1.53,0.51 1.02,2.09 10.24,9.53 4.02,2.19 -1.58,-2.45 -0.97,-2.24 0.46,-1.68 2.75,-0.66 1.27,0.87 2.09,6.17 9.42,18.81 -5.7,-2.09 -2.6,-0.05 -1.12,2.85 1.53,0.71 3.21,0.51 2.85,1.84 0.46,4.54 h 1.37 l 0.66,-1.17 0.56,-0.46 0.66,-0.36 0.92,-0.61 1.12,4.49 2.8,6.37 3.72,5.71 z m -197.89,92.77 -5.19,-1.99 -2.29,-1.33 0.76,-0.76 2.24,-7.09 0.41,-0.41 0.46,-1.78 1.83,-3.98 1.78,-19.42 -4.79,-12.39 0.41,-2.14 0.31,-14.32 -0.46,-4.69 -0.56,-2.29 -1.02,-1.78 -0.81,-1.99 1.83,-0.97 2.65,-0.51 1.73,-0.56 11.46,-10.3 5.96,-2.96 2.44,-2.19 1.32,-4.84 2.39,-5 1.32,-6.93 6.37,-16.41 0.81,-3.31 h 1.43 l 6.77,-0.61 4.18,-2.09 3.77,-2.85 0.2,6.78 1.22,6.52 3.67,5.81 0.36,1.38 0.25,1.48 -0.2,3.06 -0.71,2.91 0.46,4.64 -0.31,4.08 -4.33,1.53 -0.87,1.99 -0.66,2.14 -1.02,2.29 -0.71,2.29 0.97,1.78 0.87,1.38 -2.5,7.14 32.54,-1.73 5.35,2.5 3.06,4.89 3,7.65 -1.02,6.98 -10.59,3.87 -11.1,1.43 -7.13,-0.82 -5.5,3.06 -2.95,6.68 -5.09,0.51 -0.71,2.96 -0.05,2.6 4.63,3.57 7.49,9.63 -19.2,5.05 h -9.68 l -8.76,-3.62 1.58,11.72 -0.41,18.45 -1.94,-0.2 -1.63,-0.82 -5.25,-3.01 -5.04,-2.14 z m -37.84,-109.24 7.94,2.04 8.4,3.21 7.99,4.69 6.77,6.52 -3.26,-0.71 -5.7,-2.8 -3.31,-0.56 9.17,10.45 1.73,3.11 -4.68,-0.56 -3.11,-2.4 -2.09,-2.6 -1.63,-1.22 -2.04,-1.02 -8.1,-7.24 -8.1,-3.62 -4.48,-1.27 -4.33,-0.46 -2.19,-0.87 -0.97,-1.94 0.61,-1.89 2.55,-0.87 z m 96.04,96.39 -2.04,-5.61 -0.05,-6.47 -7.49,-9.63 -4.63,-3.57 0.05,-2.6 0.71,-2.96 5.09,-0.51 2.95,-6.68 5.5,-3.06 7.13,0.82 11.1,-1.43 10.59,-3.87 1.02,-6.98 -3,-7.65 -3.06,-4.89 -5.35,-2.5 9.17,-5.76 5.5,-4.49 3.51,-5.35 -0.25,-3.36 -0.71,-3.36 0.05,-1.78 -0.2,-1.63 -2.9,-0.46 -1.53,-2.09 0.51,-2.91 3.51,-0.36 3.82,0.25 6.77,-0.2 4.94,3.11 3.06,4.54 4.84,-2.14 3.36,-3.01 1.99,-0.97 1.88,-1.07 0.36,-1.02 0.46,-0.97 6.42,-0.2 6.11,2.34 0.71,6.42 5.3,0.56 2.29,4.03 -1.94,2.8 -0.31,2.7 3.06,-0.71 2.9,-1.99 6.21,0.97 6.26,3.82 2.39,3.21 -3.62,13.51 -1.63,2.8 -0.87,3.52 -5.45,1.02 -5.14,1.48 -5.75,4.03 -14.67,0.46 0.36,4.38 5.14,1.78 3.62,4.69 1.68,5.2 -4.68,3.72 -2.8,3.36 -2.34,3.67 -4.33,5.05 -4.99,4.49 -5.25,4.03 -6.26,0.05 -3.36,-2.4 -3.62,-1.94 -6.01,2.75 -7.79,10.14 -3.67,8.56 -3.51,1.53 -3,5.45 -1.94,-0.1 -2.04,-0.56 -4.18,-2.24 -2.09,-4.23 -0.71,-2.7 -1.27,-2.45 -2.9,-1.33 z",
                        "North-Western-Province": "m 42.57,508.52 -3.67,0.97 -4.68,-0.25 -8.56,-62.54 -1.17,-2.55 0.76,-0.92 0.61,-0.05 1.43,0.97 0.31,-3.47 1.02,-3.98 0.46,-3.87 -1.07,-3.01 -1.53,-2.7 -0.56,-3.67 0.05,-7.34 -5.09,-24.93 -2.34,-4.89 -1.99,-10.3 -3.26,-8.16 -4.94,-22.48 v -6.37 l 0.81,0.36 0.1,0.1 v 0.2 l 0.41,0.71 0.71,-3.72 -1.02,-11.78 -1.02,-3.57 3.26,-2.14 3.06,-3.98 2.24,-4.49 0.87,-3.82 0.87,-2.45 5.86,-9.23 -3,7.09 -3.72,6.63 1.02,2.04 1.43,1.43 1.94,0.76 h 2.34 l -1.94,5.4 -1.99,3.98 -0.87,0.71 -0.92,0.1 -0.71,0.56 -0.31,2.09 0.15,4.74 -0.15,1.43 -3.36,10.7 0.36,5.91 4.48,5.3 -3.97,8.26 6.31,4.59 9.12,0.71 4.68,-3.31 -0.92,-3.52 -2.09,-3.87 -2.44,-3.06 -1.94,-1.27 -0.61,-2.14 6.62,-12.69 -0.2,-2.29 -0.87,-1.73 -0.97,-1.43 -0.61,-1.48 -0.2,-2.4 0.25,-4.13 -0.05,-1.78 -0.66,-1.73 -0.71,-0.66 -0.36,-0.82 0.36,-2.19 0.97,-1.94 2.55,-3.36 0.51,-2.19 0.46,-4.18 1.83,-8.36 1.88,-19.47 1.22,-2.19 1.27,-1.12 0.97,-1.33 0.46,-2.91 v -8.26 l 1.12,-4.08 2.7,-2.6 3.16,-2.19 1.83,-1.99 2.29,1.33 5.19,1.99 5.81,0.51 5.04,2.14 5.25,3.01 1.12,8.21 -3.56,7.65 -6.16,5.05 -0.25,1.38 -0.92,1.78 -3.31,1.53 -2.14,4.94 2.9,5.61 4.89,20.08 1.22,3.52 h 4.07 l 3.36,-1.53 3.51,2.65 3.97,-0.15 2.9,2.34 2.24,2.85 0.36,3.82 -0.1,3.98 2.09,7.9 0.71,3.87 1.83,3.62 2.7,0.92 2.39,1.48 -0.51,2.4 -0.76,2.6 0.15,5.35 -0.2,4.54 -1.48,2.24 -1.17,2.34 2.39,4.43 -2.5,1.94 -4.07,-2.34 -1.17,1.94 -0.05,2.45 -1.48,1.58 -1.27,0.36 0.15,-0.36 0.25,-0.31 -2.95,1.33 -1.22,2.8 -0.25,1.99 -0.81,1.84 -4.18,2.14 -0.92,2.04 -0.56,2.19 -2.44,1.63 -2.55,1.33 -0.71,2.19 -0.36,2.34 -1.88,4.84 -0.61,5.25 1.07,2.24 0.76,2.09 -1.43,1.84 -2.14,0.87 -2.8,0.2 -2.55,0.82 -1.37,2.29 -0.97,2.65 2.39,0.56 1.12,1.84 -2.34,1.27 -2.85,0.76 -1.43,1.99 -0.71,2.24 -2.95,5.05 -2.14,5.51 -0.41,6.83 0.36,6.88 7.28,39.25 0.51,11.88 -3.46,-1.33 -2.9,1.78 -2.29,-0.25 -1.53,-1.73 z m 71.8,-1.53 -4.07,3.67 -4.02,2.29 -3.41,-2.5 -4.94,-5.61 -1.12,-1.68 -0.56,-1.68 -1.78,-1.99 -5.5,0.97 -4.84,3.47 -5.7,1.68 -5.45,-3.87 -4.68,0.2 -7.54,5.91 -4.18,1.68 -0.51,-11.88 -7.28,-39.25 -0.36,-6.88 0.41,-6.83 2.14,-5.51 2.95,-5.05 0.71,-2.24 1.43,-1.99 2.85,-0.76 2.34,-1.27 -1.12,-1.84 -2.39,-0.56 0.97,-2.65 1.37,-2.29 2.55,-0.82 2.8,-0.2 2.14,-0.87 1.43,-1.84 -0.76,-2.09 -1.07,-2.24 0.61,-5.25 1.88,-4.84 0.36,-2.34 0.71,-2.19 2.55,-1.33 2.44,-1.63 0.56,-2.19 0.92,-2.04 4.18,-2.14 0.81,-1.84 0.25,-1.99 1.22,-2.8 2.95,-1.33 -0.25,0.31 -0.15,0.36 1.27,-0.36 1.48,-1.58 0.05,-2.45 1.17,-1.94 4.07,2.34 2.5,-1.94 -2.39,-4.43 1.17,-2.34 1.48,-2.24 0.2,-4.54 -0.15,-5.35 0.76,-2.6 0.51,-2.4 -2.39,-1.48 -2.7,-0.92 -1.83,-3.62 -0.71,-3.87 -2.09,-7.9 0.1,-3.98 -0.36,-3.82 4.23,2.4 18.18,8.36 3.92,0.97 3.77,1.53 2.95,2.14 3.62,0.51 6.57,2.55 5.91,4.84 3.21,3.26 3.56,2.19 3.72,-0.1 3,2.45 0.05,2.45 -0.36,2.55 0.56,4.23 -0.25,3.67 0.36,3.42 2.75,1.17 3.21,0.25 1.63,2.75 0.51,3.31 1.83,4.64 0.97,4.69 -0.76,6.93 5.04,4.79 -0.92,3.26 0.51,3.52 1.73,0.97 1.48,0.41 1.43,3.11 1.94,3.31 1.37,3.42 0.05,3.42 0.71,0.51 1.02,1.43 0.56,6.68 1.07,6.17 3.62,3.57 -0.05,2.29 -0.61,2.34 0.05,1.84 -0.71,1.73 -2.8,2.55 -0.46,4.18 1.99,4.03 1.17,1.99 1.02,2.09 0.56,2.5 -0.41,2.4 -1.12,1.53 -0.1,2.04 -2.34,1.12 -2.34,0.56 1.58,2.55 1.17,2.7 -2.09,1.02 -2.85,-0.51 -2.9,1.63 0.31,2.24 -0.25,2.04 -3.41,-0.25 -3.06,-2.19 h -2.8 l -0.66,4.03 -0.81,1.07 -0.66,1.17 0.15,1.27 0.31,0.97 -3.51,1.02 -4.07,-0.46 -1.83,-3.82 -2.85,-3.01 -4.74,-0.61 -4.33,1.73 -0.71,3.77 0.25,4.08 -0.66,2.34 -1.43,1.94 -2.09,0.1 -9.62,2.14 -4.63,2.19 z",
                        "Southern-Province": "m 205.83,765.48 5.04,2.29 1.07,0.61 -3,3.52 -8.1,-0.46 -3.36,0.46 -2.6,1.02 -2.75,1.58 -4.79,3.62 -2.75,0.61 -3.26,-1.27 -3.46,-1.78 -3.36,-1.02 -11.46,1.38 -3.21,-0.66 -1.68,-1.68 -1.07,-2.14 -1.43,-2.24 -3.36,1.99 -3,0.2 -5.3,-0.76 v -0.2 l -0.36,-2.09 -0.05,-2.19 2.19,-3.87 3.56,-1.33 1.22,-2.4 -3.51,-1.48 -1.53,-0.82 -0.61,-2.09 1.17,-1.89 2.7,-1.07 3.16,-3.21 2.7,-3.21 -3.11,-2.85 -3.56,-2.4 -3,-2.91 -1.27,-3.87 1.78,-3.87 1.43,-4.13 -0.97,-3.21 -2.04,-2.5 6.93,1.22 3.46,-4.23 -1.48,-5.71 -4.18,-5.96 -3.92,-2.55 -1.94,-3.67 3.16,-0.87 3.26,0.97 4.18,3.16 3.77,3.57 6.06,1.43 1.17,-5.66 -3,-3.06 -2.34,-3.57 2.65,-2.7 4.07,-1.22 3.87,-0.56 3.87,-0.92 1.32,-3.21 3.36,-0.05 8.66,-1.12 2.85,5.25 -1.27,3.57 3.51,0.61 4.74,-0.76 2.19,2.7 -0.15,1.89 2.55,1.89 -1.07,1.07 v 1.89 l -1.83,0.76 0.31,1.48 -1.32,3.52 1.32,3.16 -7.54,5.76 -2.39,8.56 3.41,2.4 3.72,1.43 1.78,-0.31 1.02,1.07 -0.92,2.09 -1.17,1.78 0.66,3.42 3.26,1.73 2.29,-0.36 2.19,0.46 -0.71,1.73 -1.83,1.68 2.19,7.65 -6.37,2.75 0.46,3.16 2.7,1.84 1.94,0.15 1.68,0.92 -0.1,1.68 -1.37,0.76 z m 193.25,-105.72 4.79,1.48 1.73,0.61 -6.01,9.58 -6.21,6.22 -11.41,8.16 -3.77,1.17 -4.99,2.7 -36.61,28.95 -7.28,3.98 -23.78,8.51 -0.36,-3.06 -1.43,-1.12 -1.53,0.41 -0.71,1.58 -0.41,3.36 -1.12,1.27 -1.73,0.46 -2.24,1.02 -4.28,2.6 -4.28,1.94 -20.57,4.43 -9.93,3.42 -10.9,1.99 -4.99,1.94 -2.95,4.23 -5.35,-1.07 -5.14,1.99 -15.18,11.32 -0.51,0.56 -1.07,-0.61 -5.04,-2.29 -2.29,-3.67 1.37,-0.76 0.1,-1.68 -1.68,-0.92 -1.94,-0.15 -2.7,-1.84 -0.46,-3.16 6.37,-2.75 -2.19,-7.65 1.83,-1.68 0.71,-1.73 -2.19,-0.46 -2.29,0.36 -3.26,-1.73 -0.66,-3.42 1.17,-1.78 0.92,-2.09 -1.02,-1.07 -1.78,0.31 -3.72,-1.43 -3.41,-2.4 2.39,-8.56 7.54,-5.76 -1.32,-3.16 1.32,-3.52 -0.31,-1.48 1.83,-0.76 11.31,2.19 14.46,5.3 3.77,0.56 3.77,-0.87 3.77,-0.41 3,2.4 2.29,2.7 7.23,1.43 4.12,1.38 1.02,-3.47 -1.83,-5.1 -3.67,-4.08 4.89,-3.16 4.94,-2.7 5.6,-1.84 4.28,-3.26 -1.94,-4.49 0.97,-4.49 h 2.5 l 2.65,-0.2 1.63,-2.29 v -2.65 l 2.39,1.73 1.88,-2.14 4.94,-0.05 4.89,0.61 3.36,1.22 1.53,3.67 1.94,0.26 2.14,-0.1 1.78,-1.27 2.5,-0.25 3.67,4.84 3,5.15 4.94,2.04 5.4,-2.96 1.94,-1.94 3.06,-1.27 5.7,-1.53 11.71,-4.59 2.19,-1.58 0.46,0.61 1.73,0.25 5.3,-1.94 5.5,1.22 2.55,-4.23 v -1.73 l -0.1,-1.63 0.87,-1.22 0.87,-1.38 -1.02,-2.7 -0.1,-3.36 3.92,-3.11 4.68,-2.14 3.56,-3.47 4.18,-3.21 5.3,-0.97 3.56,-4.13 5.86,7.29 2.29,0.15 2.5,0.36 z m -255.43,108.68 0.36,2.09 v 0.2 l -1.27,-0.15 -0.97,-0.46 -0.61,-0.92 -0.87,-0.92 -1.53,-0.46 -0.92,0.36 -0.71,0.61 -0.76,0.56 -1.02,-0.05 -0.71,-0.56 -1.22,-1.78 -0.76,-0.46 -9.83,-3.57 -5.91,-1.22 -4.28,-3.47 -2.85,-1.43 -1.48,1.48 -3.67,-2.96 -16.09,-17.13 -1.32,-1.07 -0.61,-0.71 -0.2,-0.82 0.05,-1.73 -0.51,-0.87 -2.44,-3.21 -9.12,-19.37 -0.36,-1.84 0.1,-3.31 -0.36,-1.02 -1.63,-3.42 -1.63,-9.33 -3.67,-6.52 -2.24,-9.38 1.32,0.31 1.07,1.53 1.17,1.07 1.27,-0.92 1.99,-0.82 1.43,1.43 1.02,1.68 7.23,3.42 3.62,0.71 3.92,1.73 3.16,2.8 3.26,2.19 8.56,1.63 5.4,-3.01 5.96,-0.51 5.86,4.49 3,2.96 3.11,2.45 0.36,-3.98 -1.48,-4.33 v -4.28 l 3.67,-1.58 6.87,-4.28 7.03,-1.63 2.39,2.5 2.7,2.29 3.31,1.33 2.95,0.1 6.11,3.01 3.21,-0.1 1.68,2.5 -4.07,1.22 -2.65,2.7 2.34,3.57 3,3.06 -1.17,5.66 -6.06,-1.43 -3.77,-3.57 -4.18,-3.16 -3.26,-0.97 -3.16,0.87 1.94,3.67 3.92,2.55 4.18,5.96 1.48,5.71 -3.46,4.23 -6.93,-1.22 2.04,2.5 0.97,3.21 -1.43,4.13 -1.78,3.87 1.27,3.87 3,2.91 3.56,2.4 3.11,2.85 -2.7,3.21 -3.16,3.21 -2.7,1.07 -1.17,1.89 0.61,2.09 1.53,0.82 3.51,1.48 -1.22,2.4 -3.56,1.33 -2.19,3.87 z",
                        "Uva": "m 310.89,515.05 v -4.13 l 7.69,-1.84 1.53,3.82 1.73,3.26 4.02,-1.43 3.67,-2.7 -1.07,-7.39 v -7.65 l 4.89,0.2 3.97,-2.24 0.92,-1.38 1.37,-1.68 0.92,-1.94 -0.25,-2.34 -1.07,-2.34 -0.05,-2.6 2.04,-0.15 2.75,-0.71 1.32,-2.14 0.71,-1.89 2.19,-0.97 2.39,-0.82 4.94,-2.65 3.87,1.02 -2.9,4.59 1.22,0.71 1.32,0.25 -0.41,2.65 2.34,10.5 -0.31,4.79 0.81,3.82 4.38,3.82 2.75,4.84 0.56,4.28 4.28,5.91 -3.21,2.55 -4.12,4.89 -2.29,6.17 2.55,4.69 0.81,3.06 1.53,2.75 1.58,0.71 h 1.48 l 1.22,0.71 1.02,0.92 7.03,1.84 5.81,3.52 -0.36,3.72 -0.92,3.92 1.32,3.87 0.05,3.82 2.34,3.42 0.97,3.92 -5.09,73.15 -3.56,4.13 -5.3,0.97 -4.18,3.21 -3.56,3.47 -4.68,2.14 -3.92,3.11 0.1,3.36 1.02,2.7 -0.87,1.38 -0.87,1.22 0.1,1.63 v 1.73 l -2.55,4.23 -5.5,-1.22 -5.3,1.94 -1.73,-0.25 -0.46,-0.61 -2.19,1.58 -11.71,4.59 -5.7,1.53 -3.06,1.27 -1.94,1.94 -5.4,2.96 -4.94,-2.04 -3,-5.15 -3.67,-4.84 -2.5,0.25 -1.78,1.27 -2.14,0.1 -1.94,-0.26 -1.53,-3.67 -3.36,-1.22 -4.89,-0.61 -4.94,0.05 -1.88,2.14 -2.39,-1.73 v 2.65 l -1.63,2.29 -2.65,0.2 h -2.5 l -0.97,4.49 1.94,4.49 -4.28,3.26 -5.6,1.84 -4.94,2.7 -4.89,3.16 -1.53,-4.64 -1.88,-3.62 -3.62,-2.55 -3.77,-2.04 -2.75,-3.72 -2.24,-4.28 -0.15,-12.34 -1.22,-3.11 -0.61,-3.31 3,-5.66 3.72,-5.3 1.94,-8.67 1.88,-4.38 3.56,-4.38 2.04,-5.1 3.26,-4.94 2.34,0.1 1.53,2.4 0.92,3.42 1.58,0.82 1.53,0.36 1.83,4.08 1.37,4.38 1.37,0.66 1.32,0.82 0.87,6.32 2.29,2.85 1.73,2.75 0.76,-5.3 2.8,-4.33 2.09,1.38 2.14,1.02 0.61,-4.74 4.12,-1.48 -2.95,-4.59 -1.83,-5.56 -0.05,-3.06 0.41,-2.91 2.9,-4.59 -0.2,-3.52 -3.46,-0.92 -0.76,-2.6 1.68,-3.62 -0.41,-4.28 0.46,-4.18 6.67,-0.61 1.73,-3.31 5.7,-1.73 -4.79,-6.78 4.23,-2.34 5.04,-1.38 2.44,-2.04 2.04,-2.55 0.87,-1.58 1.17,-1.22 1.99,0.87 2.55,-0.56 1.02,-2.85 0.51,-3.11 1.32,-2.09 1.07,-2.14 0.76,-5.51 0.92,-3.62 v -3.67 l -0.56,-2.8 -1.02,-2.65 -1.48,-1.78 -1.07,-0.97 -2.14,-2.75 -7.23,1.94 -2.34,-2.45 -1.94,-4.08 -3.06,-2.96 -2.44,-3.21 0.61,-4.03 2.29,-3.52 3.26,0.41 2.75,2.96 3.26,-1.38 1.78,-3.06 5.4,-6.88 z m -48.94,-47.71 -0.97,-16.26 1.94,-9.38 0.51,0.51 3,1.84 1.27,2.85 0.25,3.21 1.58,4.79 4.84,8.16 3.62,-1.27 1.94,-0.46 2.39,-0.92 4.23,-3.92 9.68,-5.4 8.76,1.89 0.71,9.99 -2.04,9.69 -1.12,2.04 -0.56,1.78 0.61,2.45 0.76,2.5 1.32,8.77 2.14,4.64 2.95,2.96 1.73,-0.41 2.44,0.46 0.81,1.78 1.37,2.29 1.73,3.62 0.71,3.57 -7.69,1.84 v 4.13 l -1.53,3.72 -5.4,6.88 -1.78,3.06 -3.26,1.38 -2.75,-2.96 -3.26,-0.41 -2.29,3.52 -0.61,4.03 2.44,3.21 3.06,2.96 1.94,4.08 2.34,2.45 7.23,-1.94 2.14,2.75 1.07,0.97 1.48,1.78 1.02,2.65 0.56,2.8 v 3.67 l -0.92,3.62 -0.76,5.51 -1.07,2.14 -1.32,2.09 -0.51,3.11 -1.02,2.85 -2.55,0.56 -1.99,-0.87 -1.17,1.22 -0.87,1.58 -2.04,2.55 -2.44,2.04 -5.04,1.38 -4.23,2.34 4.79,6.78 -5.7,1.73 -1.73,3.31 -6.67,0.61 -0.46,4.18 0.41,4.28 -1.68,3.62 0.76,2.6 3.46,0.92 0.2,3.52 -2.9,4.59 -0.41,2.91 0.05,3.06 1.83,5.56 2.95,4.59 -4.12,1.48 -0.61,4.74 -2.14,-1.02 -2.09,-1.38 -2.8,4.33 -0.76,5.3 -1.73,-2.75 -2.29,-2.85 -0.87,-6.32 -1.32,-0.82 -1.37,-0.66 -1.37,-4.38 -1.83,-4.08 -1.53,-0.36 -1.58,-0.82 -0.92,-3.42 -1.53,-2.4 -2.34,-0.1 -3.62,0.15 -4.02,3.01 -4.74,1.94 -4.48,-0.87 -3,-2.45 -2.09,-3.31 0.92,-2.6 5.35,-2.45 0.76,-0.76 0.61,-1.58 0.46,-1.84 -3.36,-1.07 -2.7,-2.96 -1.48,0.56 -1.43,0.71 -0.56,-7.34 3.72,-0.92 2.04,-2.85 -1.83,-0.92 -1.78,-1.17 2.9,-4.74 -0.81,-1.33 -0.97,-1.22 -1.12,-3.06 -1.32,-2.8 -6.26,-3.16 -0.25,-3.21 3.56,-0.15 3.72,0.2 2.65,-3.06 0.92,-3.98 3.16,-2.85 3.56,-1.68 7.43,-1.63 4.38,-6.58 0.92,-3.87 1.78,-3.52 1.58,-1.48 1.32,-1.63 0.66,-1.48 -0.31,-1.38 -1.07,-3.52 0.92,-1.89 1.37,-1.63 -0.71,-1.02 -0.92,-1.07 -0.41,-1.68 0.46,-1.84 -1.53,-4.94 0.2,-3.62 2.5,-1.53 4.23,-1.17 5.3,-5 0.36,-6.47 -4.33,-14.37 z",
                        "Sabaragamuwa": "m 120.79,587.64 -8.2,-8.36 -3.06,1.38 -0.1,-1.94 -0.25,-1.94 2.65,-2.45 -0.61,-3.62 -3.41,-1.73 -4.28,-0.31 0.56,-1.63 v -1.84 l -2.95,-9.43 1.02,-5.81 2.5,-5.81 2.85,-1.99 1.48,-3.36 -4.12,-1.22 -4.84,1.12 -2.39,-5 0.87,-5.66 3.11,-1.58 2.55,-2.45 0.56,-6.83 1.94,-1.58 -0.36,-2.65 4.02,-2.29 4.07,-3.67 4.33,-3.11 4.63,-2.19 9.62,-2.14 2.09,-0.1 1.43,-1.94 0.66,-2.34 -0.25,-4.08 0.71,-3.77 4.33,-1.73 4.74,0.61 2.85,3.01 1.83,3.82 2.39,6.12 8.56,7.49 -0.36,3.87 1.68,1.17 4.99,2.8 2.39,2.91 -0.46,3.57 0.05,2.91 2.85,2.85 2.29,2.91 -1.12,2.6 -1.53,2.45 -2.14,0.51 -2.19,0.15 -3.11,3.36 -6.82,1.12 -2.24,2.09 3,7.19 1.43,2.5 -1.43,3.06 -0.1,3.92 0.25,0.66 0.66,0.15 -1.73,2.8 -2.75,2.45 -1.48,0.51 -1.12,1.48 1.12,1.53 1.27,1.27 -1.37,7.39 1.68,5.76 5.75,1.89 4.53,3.42 1.53,5.25 0.31,2.65 -2.24,1.99 -3.92,0.15 -3.92,-0.56 -5.45,-1.84 -4.23,-2.45 -3,-0.1 -2.44,0.25 -6.01,3.42 -4.94,-1.07 -0.92,-1.99 -1.43,-1.73 -1.99,0.46 -1.43,0.82 -3,-2.4 z m 125.22,108.68 1.88,3.62 1.53,4.64 3.67,4.08 1.83,5.1 -1.02,3.47 -4.12,-1.38 -7.23,-1.43 -2.29,-2.7 -3,-2.4 -3.77,0.41 -3.77,0.87 -3.77,-0.56 -14.46,-5.3 -11.31,-2.19 v -1.89 l 1.07,-1.07 -2.55,-1.89 0.15,-1.89 -2.19,-2.7 -4.74,0.76 -3.51,-0.61 1.27,-3.57 -2.85,-5.25 -8.66,1.12 -3.36,0.05 -1.32,3.21 -3.87,0.92 -3.87,0.56 -1.68,-2.5 -3.21,0.1 -6.11,-3.01 -2.95,-0.1 -3.31,-1.33 -2.7,-2.29 -2.39,-2.5 -7.13,-12.49 -8.35,-11.77 -1.02,-3.36 2.95,-1.17 -2.85,-5.45 -4.38,-4.08 -2.75,-1.07 -2.19,-2.04 -1.17,-5.81 -6.01,-5.86 -1.88,-3.98 -1.27,-3.77 0.31,-3.16 -3.46,-9.18 -0.66,-4.08 4.33,-3.92 -4.84,-5.15 1.02,-2.4 0.87,-2.75 2.14,-3.42 2.5,-3.11 3.06,-1.38 8.2,8.36 2.44,3.11 3,2.4 1.43,-0.82 1.99,-0.46 1.43,1.73 0.92,1.99 4.94,1.07 6.01,-3.42 2.44,-0.25 3,0.1 4.23,2.45 5.45,1.84 3.92,0.56 3.92,-0.15 -0.15,3.26 1.32,1.48 -1.48,1.43 -0.71,2.04 4.02,3.11 4.84,0.41 10.24,2.29 10.8,1.48 4.18,-0.71 4.89,-0.36 6.52,0.2 6.16,-0.82 11.15,-5.91 0.56,7.34 1.43,-0.71 1.48,-0.56 2.7,2.96 3.36,1.07 -0.46,1.84 -0.61,1.58 -0.76,0.76 -5.35,2.45 -0.92,2.6 2.09,3.31 3,2.45 4.48,0.87 4.74,-1.94 4.02,-3.01 3.62,-0.15 -3.26,4.94 -2.04,5.1 -3.56,4.38 -1.88,4.38 -1.94,8.67 -3.72,5.3 -3,5.66 0.61,3.31 1.22,3.11 0.15,12.34 2.24,4.28 2.75,3.72 3.77,2.04 z",
                        "Western-Province": "m 67.02,677.45 -1.07,-1.53 -1.32,-0.31 -0.87,-3.36 -0.41,-0.36 -0.87,-0.51 -0.87,-0.82 -0.56,-1.07 0.25,-1.17 0.97,-0.25 1.02,0.1 0.46,-0.05 -1.63,-11.27 -13.65,-35.22 0.31,-0.56 h 0.1 v -0.1 l -0.05,-2.5 -0.61,-2.55 -1.22,-3.67 0.2,-3.31 9.17,5.66 5.65,-2.14 2.29,-0.51 2.19,-1.02 7.59,-6.52 2.19,-0.25 2.19,1.02 3.06,-1.58 2.44,-2.85 1.22,0.25 1.02,0.61 2.55,5.96 3.87,0.97 -1.27,-5.76 6.42,-2.7 5.75,1.33 0.66,4.08 3.46,9.18 -0.31,3.16 1.27,3.77 1.88,3.98 6.01,5.86 1.17,5.81 2.19,2.04 2.75,1.07 4.38,4.08 2.85,5.45 -2.95,1.17 1.02,3.36 8.35,11.77 7.13,12.49 -7.03,1.63 -6.87,4.28 -3.67,1.58 v 4.28 l 1.48,4.33 -0.36,3.98 -3.11,-2.45 -3,-2.96 -5.86,-4.49 -5.96,0.51 -5.4,3.01 -8.56,-1.63 -3.26,-2.19 -3.16,-2.8 -3.92,-1.73 -3.62,-0.71 -7.23,-3.42 -1.02,-1.68 -1.43,-1.43 -1.99,0.82 -1.27,0.92 z M 45.93,574.59 42.68,572.9 l -4.28,-1.68 1.99,-4.74 0.51,-2.24 -0.05,-2.34 -9.42,-33.69 1.27,-4.89 -0.05,3.01 0.71,1.94 1.07,1.48 0.97,1.73 1.88,6.68 0.92,1.63 h 1.22 l 0.31,-1.94 0.56,-0.82 0.46,-0.1 0.15,0.1 -0.05,-6.12 -0.46,-2.7 -0.97,-2.19 -0.92,-0.61 -2.6,-0.61 -1.17,-0.76 -0.87,-1.68 0.36,-1.58 0.76,-1.48 0.41,-1.43 -1.17,-8.61 4.68,0.25 3.67,-0.97 3.82,-0.51 1.53,1.73 2.29,0.25 2.9,-1.78 3.46,1.33 4.18,-1.68 7.54,-5.91 4.68,-0.2 5.45,3.87 5.7,-1.68 4.84,-3.47 5.5,-0.97 1.78,1.99 0.56,1.68 1.12,1.68 4.94,5.61 3.41,2.5 0.36,2.65 -1.94,1.58 -0.56,6.83 -2.55,2.45 -3.11,1.58 -0.87,5.66 2.39,5 4.84,-1.12 4.12,1.22 -1.48,3.36 -2.85,1.99 -2.5,5.81 -1.02,5.81 2.95,9.43 v 1.84 l -0.56,1.63 -3.62,1.27 -5.35,-0.56 -3.87,1.84 -3.16,3.11 -0.76,3.72 -0.25,3.92 -4.23,0.2 -3.46,-0.41 -2.29,-0.92 -2.24,-1.22 -2.34,-2.19 -2.65,-1.63 -3.36,0.25 -3.41,0.66 -9.78,-2.91 -1.78,0.76 -1.58,0.82 z m 2.8,46.54 0.05,-0.05 -0.31,0.56 -7.33,-18.96 -2.95,-16.52 v -14.37 l 0.2,-0.56 4.28,1.68 3.26,1.68 3.46,0.82 1.58,-0.82 1.78,-0.76 9.78,2.91 3.41,-0.66 3.36,-0.25 2.65,1.63 2.34,2.19 2.24,1.22 2.29,0.92 3.46,0.41 4.23,-0.2 0.25,-3.92 0.76,-3.72 3.16,-3.11 3.87,-1.84 5.35,0.56 3.62,-1.27 4.28,0.31 3.41,1.73 0.61,3.62 -2.65,2.45 0.25,1.94 0.1,1.94 -2.5,3.11 -2.14,3.42 -0.87,2.75 -1.02,2.4 4.84,5.15 -4.33,3.92 -5.75,-1.33 -6.42,2.7 1.27,5.76 -3.87,-0.97 -2.55,-5.96 -1.02,-0.61 -1.22,-0.25 -2.44,2.85 -3.06,1.58 -2.19,-1.02 -2.19,0.25 -7.59,6.52 -2.19,1.02 -2.29,0.51 -5.65,2.14 -9.17,-5.66 -0.2,3.31 1.22,3.67 0.61,2.55 0.05,2.5 -0.1,0.1 -0.05,0.05 H 48.53 v 0.15 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));