console.log("script loaded");

//variables

//default json
let defaultJsonOutput = {
    "name": "Standard N64",
    "identifier": "com.delta.n64.standard",
    "gameTypeIdentifier": "com.rileytestut.delta.game.n64",
    "debug": false,
    "representations": {
        "iphone": {
            "standard": {
                "portrait": {
                    "assets": {
                        "resizable": "iphone_portrait.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "portrait_thumbstick.pdf",
                                "width": 85,
                                "height": 87
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 39,
                                "y": 77,
                                "width": 62,
                                "height": 62
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 17,
                                "y": 195,
                                "width": 120,
                                "height": 120
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 247,
                                "y": 122,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 171,
                                "y": 98,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 229,
                                "y": 50,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 0,
                                "y": 0,
                                "width": 95,
                                "height": 30
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 317,
                                "y": 0,
                                "width": 95,
                                "height": 30
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 144,
                                "y": 179,
                                "width": 43,
                                "height": 42
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 150,
                                "y": 34,
                                "width": 18,
                                "height": 18
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 215,
                                "y": 197,
                                "width": 42,
                                "height": 42
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 215,
                                "y": 276,
                                "width": 42,
                                "height": 42
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 177,
                                "y": 236,
                                "width": 42,
                                "height": 42
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 255,
                                "y": 237,
                                "width": 42,
                                "height": 42
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 414,
                        "height": 736
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 7,
                        "bottom": 7,
                        "left": 7,
                        "right": 7
                    }
                },
                "landscape": {
                    "assets": {
                        "resizable": "iphone_landscape.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 78,
                                "height": 78
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 34,
                                "y": 103,
                                "width": 86,
                                "height": 86
                            },
                            "extendedEdges": {
                                "top": 30,
                                "bottom": 30,
                                "left": 34,
                                "right": 30
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 15,
                                "y": 237,
                                "width": 123,
                                "height": 123
                            },
                             "extendedEdges": {
                                "top": 30,
                                "bottom": 30,
                                "left": 34,
                                "right": 30
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 597,
                                "y": 158,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 522,
                                "y": 134,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 580,
                                "y": 86,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 15,
                                "y": 14,
                                "width": 100,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 552,
                                "y": 14,
                                "width": 100,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 297,
                                "y": 334,
                                "width": 73,
                                "height": 26
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 299,
                                "y": 15,
                                "width": 73,
                                "height": 26
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 575,
                                "y": 246,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 575,
                                "y": 320,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 538,
                                "y": 283,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 612,
                                "y": 283,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 736,
                        "height": 414
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 15,
                        "bottom": 15,
                        "left": 15,
                        "right": 15
                    },
                    "translucent": true
                }
            },
            "edgeToEdge": {
                "portrait": {
                    "assets": {
                        "resizable": "iphone_edgetoedge_portrait.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "portrait_thumbstick.pdf",
                                "width": 85,
                                "height": 87
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 187,
                                "y": 564,
                                "width": 71,
                                "height": 71
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 194,
                                "y": 502,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "quickSave"
                            ],
                            "frame": {
                                "x": 19,
                                "y": 504,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "toggleFastForward"
                            ],
                            "frame": {
                                "x": 364,
                                "y": 505,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 10,
                                "y": 637,
                                "width": 178,
                                "height": 178
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 328,
                                "y": 650,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 242,
                                "y": 734,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 0,
                                "y": 562,
                                "width": 134,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 295,
                                "y": 562,
                                "width": 134,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 162,
                                "y": 860,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 230,
                                "y": 859,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 430,
                        "height": 932
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 62,
                                "width": 428,
                                "height": 322
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 7,
                        "bottom": 7,
                        "left": 7,
                        "right": 7
                    }
                },
                "landscape": {
                    "assets": {
                        "resizable": "iphone_edgetoedge_landscape.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 78,
                                "height": 78
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 49,
                                "y": 103,
                                "width": 86,
                                "height": 86
                            },
                            "extendedEdges": {
                                "top": 30,
                                "bottom": 30,
                                "left": 49,
                                "right": 30
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 30,
                                "y": 237,
                                "width": 123,
                                "height": 123
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 727,
                                "y": 158,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 652,
                                "y": 134,
                                "width": 56,
                                "height": 56
                            },
                             "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 710,
                                "y": 86,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 15,
                                "y": 14,
                                "width": 100,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }

                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 697,
                                "y": 14,
                                "width": 100,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 370,
                                "y": 334,
                                "width": 73,
                                "height": 26
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 370,
                                "y": 15,
                                "width": 73,
                                "height": 26
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 705,
                                "y": 246,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 705,
                                "y": 320,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 668,
                                "y": 283,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 742,
                                "y": 283,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 932,
                        "height": 430
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 15,
                        "bottom": 15,
                        "left": 15,
                        "right": 15
                    },
                    "translucent": true
                }
            }
        },
        "ipad": {
            "standard": {
                "portrait": {
                    "assets": {
                        "resizable": "ipad_portrait.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 94,
                                "height": 94
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 18,
                                "y": 100,
                                "width": 150,
                                "height": 150
                            },
                            "extendedEdges": {
                                "top": 25,
                                "bottom": 25,
                                "left": 25,
                                "right": 25
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 19,
                                "y": 286,
                                "width": 145,
                                "height": 145
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 717,
                                "y": 189,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 626,
                                "y": 160,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 696,
                                "y": 103,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 18,
                                "y": 18,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 663,
                                "y": 18,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 356,
                                "y": 401,
                                "width": 88,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 356,
                                "y": 18,
                                "width": 88,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 691,
                                "y": 296,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 691,
                                "y": 385,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 646,
                                "y": 340,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 735,
                                "y": 340,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1024,
                        "height": 1366
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 20,
                        "bottom": 20,
                        "left": 20,
                        "right": 20
                    }
                },
                "landscape": {
                    "assets": {
                        "resizable": "ipad_landscape.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 94,
                                "height": 94
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 18,
                                "y": 419,
                                "width": 150,
                                "height": 150
                            },
                            "extendedEdges": {
                                "top": 25,
                                "bottom": 25,
                                "left": 25,
                                "right": 25
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 19,
                                "y": 604,
                                "width": 145,
                                "height": 145
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 941,
                                "y": 507,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 850,
                                "y": 478,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 920,
                                "y": 421,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 18,
                                "y": 336,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 887,
                                "y": 336,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 470,
                                "y": 721,
                                "width": 85,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 469,
                                "y": 18,
                                "width": 88,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 915,
                                "y": 614,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 915,
                                "y": 703,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 870,
                                "y": 658,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 959,
                                "y": 658,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1366,
                        "height": 1024
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 20,
                        "bottom": 20,
                        "left": 20,
                        "right": 20
                    },
                    "translucent": true
                }
            },
            "splitView": {
                "portrait": {
                    "assets": {
                        "resizable": "ipad_portrait.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 94,
                                "height": 94
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 18,
                                "y": 100,
                                "width": 150,
                                "height": 150
                            },
                            "extendedEdges": {
                                "top": 25,
                                "bottom": 25,
                                "left": 25,
                                "right": 25
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 19,
                                "y": 286,
                                "width": 145,
                                "height": 145
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 717,
                                "y": 189,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 626,
                                "y": 160,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 696,
                                "y": 103,
                                "width": 67,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 18,
                                "y": 18,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 663,
                                "y": 18,
                                "width": 120,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 356,
                                "y": 401,
                                "width": 88,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 356,
                                "y": 18,
                                "width": 88,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 691,
                                "y": 296,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 691,
                                "y": 385,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 646,
                                "y": 340,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 735,
                                "y": 340,
                                "width": 47,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1024,
                        "height": 1366
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 20,
                        "bottom": 20,
                        "left": 20,
                        "right": 20
                    }
                },
                "landscape": {
                    "assets": {
                        "resizable": "ipad_splitview_landscape.pdf"
                    },
                    "items": [
                        {
                            "thumbstick": {
                                "name": "thumbstick_landscape.pdf",
                                "width": 94,
                                "height": 94
                            },
                            "inputs": {
                                "up": "analogStickUp",
                                "down": "analogStickDown",
                                "left": "analogStickLeft",
                                "right": "analogStickRight"
                            },
                            "frame": {
                                "x": 17,
                                "y": 102,
                                "width": 150,
                                "height": 150
                            },
                            "extendedEdges": {
                                "top": 25,
                                "bottom": 25,
                                "left": 25,
                                "right": 25
                            }
                        },
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 17,
                                "y": 285,
                                "width": 150,
                                "height": 145
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 938,
                                "y": 187,
                                "width": 71,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 848,
                                "y": 158,
                                "width": 71,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 919,
                                "y": 100,
                                "width": 71,
                                "height": 67
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 17,
                                "y": 18,
                                "width": 121,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 886,
                                "y": 18,
                                "width": 121,
                                "height": 48
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 469,
                                "y": 401,
                                "width": 86,
                                "height": 32
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 469,
                                "y": 17,
                                "width": 86,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 909,
                                "y": 294,
                                "width": 58,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 909,
                                "y": 384,
                                "width": 58,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 864,
                                "y": 339,
                                "width": 58,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 955,
                                "y": 339,
                                "width": 58,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 5,
                                "bottom": 5,
                                "left": 5,
                                "right": 5
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1366,
                        "height": 1024
                    },
                    "screens": [
                        {
                            "inputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            },
                            "outputFrame": {
                                "x": 0,
                                "y": 0,
                                "width": 256,
                                "height": 192
                            }
                        }
                    ],
                    "extendedEdges": {
                        "top": 20,
                        "bottom": 20,
                        "left": 20,
                        "right": 20
                    },
                    "translucent": false
                }
            }
        }
    }
};


let consoleTypes = ["", "nes", "snes", "n64", "gbc", "gba", "nds"];

//metadata select element

let consoleScreenSizes = {
    "nes:" : {
       "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    },
    "snes" : {
        "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    },
    "n64" : {
        "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    },
    "gbc" : {
        "inputFrame": { "x": 0, "y": 0, "width": 160, "height": 144
        }
    },
    "gba" : {
        "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    },
    "nds" : {
        "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    }
};

//selection dropdowns

let layoutTypes = [
        "",
        "iphone standard",
        "iphone edgeToEdge",
        "ipad standard",
        "ipad splitView"
    ];

let name = "";

let consoleSelection = "";

let identifier = "";

let debug;

let assets = {
    "resizable" : ""
}

let currentItem = "";

const buttonConfigs = {
    gbc: ['menu', 'dpad', 'thumbstick', 'a', 'b', 'start', 'select', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
    gba: ['menu', 'dpad', 'thumbstick', 'a', 'b', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
    nds: ['menu', 'dpad', 'thumbstick', 'xy', 'a', 'b', 'x', 'y', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
    nes: ['menu', 'dpad', 'thumbstick', 'a', 'b', 'start', 'select', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
    snes: ['menu', 'dpad', 'thumbstick', 'a', 'b', 'x', 'y', 'start', 'select', 'menu', 'l', 'r', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
    n64: ['menu', 'dpad', 'thumbstick', 'a', 'b', 'start', 'l', 'r', 'cUp', 'cDown', 'cLeft', 'cRight', 'z', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward']
};


//layout selection in metadata

let layoutSelection = "";

let selectLayout = document.getElementById("layoutSelect");


// Ensure these variables are declared at the top before they are used
let consoleSelect = document.getElementById('consoleSelect');

// Object to store uploaded images
const layoutImages = {};


//functions

// console selection in metadata
let selectConsole = document.getElementById('consoleSelect');

// Loop through the consoleTypes array and create an option for each item
consoleTypes.forEach(function(consoleType) {
    let option = document.createElement('option'); // Create a new <option> element
    option.value = consoleType;                   // Set the value attribute
    option.text = consoleType.toUpperCase();      // Set the text content (e.g., display as uppercase)
    selectConsole.appendChild(option);            // Add the option to the select element
});

 // Populate the layout dropdown
 layoutTypes.forEach(function(layoutType) {
    let option = document.createElement('option');
    option.value = layoutType;
    option.text = layoutType.toUpperCase(); // Optional: Display as uppercase
    selectLayout.appendChild(option);
});

// Add event listener to capture the selected value from consoleTypes
selectConsole.addEventListener('change', function() {
    consoleSelection = selectConsole.value; // Store the selected value
    document.getElementById('selectedConsole').innerText = consoleSelection;
    console.log("Selected console:", consoleSelection); // Optional: Log the selection

    automaticSelectLayout();
});

//select first layout when console is selected
function automaticSelectLayout() {
    layoutSelect.disabled = false;

    // Automatically select the first non-empty option in layoutSelect
    for (let i = 0; i < layoutSelect.options.length; i++) {
        if (layoutSelect.options[i].value !== "") {
            layoutSelect.selectedIndex = i;
            layoutSelection = layoutSelect.value;
            document.getElementById('selectedLayout').innerText = layoutSelection;
            console.log("Automatically selected layout:", layoutSelection);
            break;
        }
    }

    // Trigger the change event on layoutSelect to update any dependent functions
    layoutSelect.dispatchEvent(new Event('change'));

    // Call any functions that depend on both console and layout selection
    checkSelectionsAndAddButtons();
};

// Function to check if both device and layout have been selected
function checkSelectionsAndAddButtons() {
    let deviceSelected = consoleSelect.value !== ""; // Check if a device is selected
    let layoutSelected = layoutSelection !== ""; // Check if a layout is selected

    if (deviceSelected && layoutSelected) {
        addButtons(); // Only run addButtons if both selections are made
    }
}

// Listen for changes in the console and layout selections
consoleSelect.addEventListener('change', checkSelectionsAndAddButtons);

selectLayout.addEventListener('change', function() {
    layoutSelection = selectLayout.value; // Update the layoutSelection value
    checkSelectionsAndAddButtons();
});

// Add event listener to capture the selected value in layoutSelect
layoutSelect.addEventListener('change', function() {
    layoutSelection = selectLayout.value; // Store the selected value
    document.getElementById('selectedLayout').innerText = layoutSelection;
    console.log("Selected console:", layoutSelection); // Optional: Log the selection
});

// Event listener for layout selection
selectLayout.addEventListener('change', function() {
    // layoutSelection = layoutSelection.value;
    checkSelections();
    checkSelectionsAndAddButtons();
});

// Function to check which orientation is selected
function getSelectedOrientation() {
    // Select the checked radio button by name
    const selectedOption = document.querySelector('input[name="orientation"]:checked');

    // Get the id of the selected radio button
    return selectedOption.id;
    console.log(`Selected Orientation: ${orientation}`); // Outputs "portrait" or "landscape"
}

// Example usage
const orientation = getSelectedOrientation();
console.log(`Selected Orientation: ${orientation}`); // Outputs "portrait" or "landscape"

// Function to check if layout selection has been made and load layout based on selection
function checkSelections() {
    if (selectLayout) {
        //remove layout
        document.querySelectorAll('.layout-item').forEach(element => element.remove());
        document.getElementById("focus").style.display = "flex"

        //clear focus
        const focusItemDiv = document.querySelector('.focus-item');
        focusItemDiv.innerHTML = ''; // Clear previous content

        //clear item name
        // Update the item name in the .item-name div
         document.querySelector('.item-name').innerText = "";

       //load layout
        loadLayout();
    }
}

// Add event listener to detect changes in orientation selection
document.querySelectorAll('input[name="orientation"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const orientation = getSelectedOrientation();
        console.log(`Selected Orientation: ${orientation}`);

         //remove layout
        document.querySelectorAll('.layout-item').forEach(element => element.remove());
       //load layout
        loadLayout();
    });
});

function loadLayout() {
    // Split the selected layout into an array of individual words
    let parts = layoutSelection.split(" ");

    // Assign the first word to the 'device' variable
    let device = parts[0].toString();

    // Assign the second word to the 'layout' variable
    let layout = parts[1].toString();

    // Get the checked radio button with name 'orientation'
    let orientation = document.querySelector('input[name="orientation"]:checked').id;

    // Get width and height of selected layout
    let width = defaultJsonOutput["representations"][device][layout][orientation]["mappingSize"]["width"];
    let height = defaultJsonOutput["representations"][device][layout][orientation]["mappingSize"]["height"];

    document.getElementById("screen-size-info").innerHTML = "Size: " + width + " x " + height;

    // Layout object
    let layoutObject = document.getElementById("layout-object");

    // Set the size of the layout object
    layoutObject.style.width = width + "px";
    layoutObject.style.height = height + "px";

    // Clear any existing layout items
    layoutObject.innerHTML = '';

    // Get the item array from the JSON
    let itemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];

    // Add each item to the layout
    itemArray.forEach(item => {
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        div.className = 'layout-item';
        innerDiv.className = 'layout-item-inner';

        div.style.width = item.frame.width + 'px';
        div.style.height = item.frame.height + 'px';

        div.style.top = item.frame.y-item.extendedEdges.top + 'px';
        div.style.left = item.frame.x-item.extendedEdges.left + 'px';

        div.style.paddingTop = item.extendedEdges.top + 'px';
        div.style.paddingBottom = item.extendedEdges.bottom + 'px';
        div.style.paddingLeft = item.extendedEdges.left + 'px';
        div.style.paddingRight = item.extendedEdges.right + 'px';
        
        // Check for special cases
        if (item.thumbstick) {
            div.innerHTML = "<p class='item-text'>Thumbstick</p>";
            div.id = "thumbstick";
        } else if (item.inputs && item.inputs.up === "up" && item.inputs.down === "down" && item.inputs.left === "left" && item.inputs.right === "right") {
            div.innerHTML = "<p class='item-text'>D-Pad</p>";
            div.id = "d-pad";
        } else if (Array.isArray(item.inputs)) {
            div.innerHTML = "<p class='item-text'>" + item.inputs[0] + "</p>";  // Display the input name (e.g., "a")
            div.id = item.inputs[0];
        }

        // Create and append the resize handle
        const resizeHandle = document.createElement('div');
        resizeHandle.className = 'resize-handle';
        div.appendChild(resizeHandle);

        layoutObject.appendChild(div);
        div.appendChild(innerDiv);

        // Make the item draggable
        makeDraggable(div);

        makeResizable(div, resizeHandle);

        div.addEventListener('click', selectItem);
    });

    // Safely get the screen array from the JSON if it exists
    let screenArray = defaultJsonOutput?.representations?.[device]?.[layout]?.[orientation]?.screens || null;


    if (screenArray) {
    // Proceed with operations on screenArray
    console.log("Screen array exists:", screenArray);
    // Add each screen to the layout
    screenArray.forEach(screen => {
        let screenDiv = document.createElement('div');
        screenDiv.className = 'screen-item';
        screenDiv.style.width = screen.outputFrame.width + 'px';
        screenDiv.style.height = screen.outputFrame.height + 'px';
        screenDiv.style.top = screen.outputFrame.y + 'px';
        screenDiv.style.left = screen.outputFrame.x + 'px';
        screenDiv.id = "game-screen";

        // Create and append the resize handle
        const resizeHandle = document.createElement('div');
        resizeHandle.className = 'resize-handle';
        screenDiv.appendChild(resizeHandle);

        layoutObject.appendChild(screenDiv);

        // Make the item draggable
        makeDraggable(screenDiv);

        makeResizable(screenDiv, resizeHandle); // Add this line to make the item resizable

        screenDiv.addEventListener('click', selectScreen);
    });
    } else {
        // Handle the case where the screenArray doesn't exist
        console.log("Screen array does not exist.");
    }
    

}

function makeResizable(resizableElement) {
    const handle = resizableElement.querySelector('.resize-handle');
    //const container = document.getElementById('layout-object'); // The container element
    let initialX = 0, initialY = 0, initialWidth = 0, initialHeight = 0;
    let isResizing = false;

    handle.addEventListener('mousedown', function(e) {
        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;
        initialWidth = resizableElement.offsetWidth;
        initialHeight = resizableElement.offsetHeight;

        isResizing = true;

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (isResizing) {
            const dx = e.clientX - initialX;
            const dy = e.clientY - initialY;

            let newWidth, newHeight;

            if (resizableElement.classList.contains('screen-item')) {
                // Maintain aspect ratio for screen-item
                const aspectRatio = initialWidth / initialHeight;

                if (Math.abs(dx) > Math.abs(dy)) {
                    newWidth = initialWidth + dx;
                    newHeight = newWidth / aspectRatio;
                } else {
                    newHeight = initialHeight + dy;
                    newWidth = newHeight * aspectRatio;
                }
            } else {
                // Allow free resizing for layout-item
                newWidth = initialWidth + dx;
                newHeight = initialHeight + dy;
            }

            // // Get container dimensions and resizable element's position
            // const containerRect = container.getBoundingClientRect();
            // const elementRect = resizableElement.getBoundingClientRect();

            // // Calculate the maximum allowable width and height
            // const maxWidth = containerRect.right - elementRect.left;
            // const maxHeight = containerRect.bottom - elementRect.top;

            // // Clamp the width and height to prevent resizing outside the container
            // newWidth = Math.min(newWidth, maxWidth);
            // newHeight = Math.min(newHeight, maxHeight);

            // Apply the new width and height
            if (newWidth > 0 && newHeight > 0) {
                resizableElement.style.width = newWidth + 'px';
                resizableElement.style.height = newHeight + 'px';
            }

            updateItemSize(resizableElement.id, newWidth, newHeight);
            updateScreenSize(resizableElement.id, newWidth, newHeight);
            updateJson();
        }
    }

    function stopResize() {
        if (isResizing) {
            isResizing = false;

             // Re-enable dragging after resizing is done
            makeDraggable(resizableElement);

            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
        }
    }

    function updateItemSize(itemId, newWidth, newHeight, newExtendedTop, newExtendedBottom, newExtendedLeft, newExtendedRight) {
        // Split the selected layout into an array of individual words
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = document.querySelector('input[name="orientation"]:checked').id;

        // Get the items array from the selected layout
        let currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];

        // Find the matching item in the array
        let item = currentItemArray.find(item => {
            if (itemId === "d-pad") {
                const dPadInputs = ["up", "down", "left", "right"];
                return item.inputs && typeof item.inputs === "object" && dPadInputs.every(direction => direction in item.inputs) && !item.thumbstick;
            } else if (itemId === "thumbstick") {
                return item.thumbstick !== undefined;
            } else if (Array.isArray(item.inputs)) {
                return item.inputs.includes(itemId);
            } else if (typeof item.inputs === 'object') {
                return Object.values(item.inputs).includes(itemId);
            }
            return false;
        });

        if (item && item.frame) {
            item.frame.width = newWidth;
            item.frame.height = newHeight;
            //console.log(`Updated ${itemId} size: width=${newWidth}, height=${newHeight}`);
        }

        if (item && item.extendedEdges) {
            item.extendedEdges.top = newExtendedTop;
            //console.log(`Updated ${itemId} size: width=${newWidth}, height=${newHeight}`);
        }
    }

    function updateScreenSize(itemId, newWidth, newHeight) {
        // Split the selected layout into an array of individual words
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = document.querySelector('input[name="orientation"]:checked').id;

        // Safely get the screen array from the JSON if it exists
        let screenArray = defaultJsonOutput?.representations?.[device]?.[layout]?.[orientation]?.screens || null;

        if (screenArray) {
            // Proceed with operations on screenArray
            console.log("Screen array exists:", screenArray);
            // Get the screens array from the selected layout
            let currentScreenArray = defaultJsonOutput["representations"][device][layout][orientation]["screens"];

            // Find the screen in the array (assuming there's only one screen for simplicity)
            let screen = currentScreenArray[0];  // Adjust this if you have multiple screens

            if (screen && screen.outputFrame) {
                screen.outputFrame.width = newWidth;
                screen.outputFrame.height = newHeight;
                //console.log(`Updated ${itemId} size: width=${newWidth}, height=${newHeight}`);
            }
        } else {
            // Handle the case where the screenArray doesn't exist
            console.log("Screen array does not exist.");
        }
        
    }
}

//once console is selected, load layouts into array

//submit metadata

// Add an event listener to the button
document.getElementById("submitButton").addEventListener("click", function() {
    // Get the value of the input field

    let nameValue = document.getElementById("name").value;
    let consoleTypeValue = document.getElementById("selectedConsole").value;
    let identifierValue = document.getElementById("identifier").value;
    // Get the checkbox element
    let debugCheckbox = document.getElementById('debug');

    // Convert the checkbox state to true or false
    let debugValue = debugCheckbox.checked;
    
    // Store it in a variable
    name = nameValue; 
    consoleType = consoleTypeValue;
    identifier = identifierValue;
    debug = debugValue;

    // if (document.getElementById("debug").checked) {
    //     debugValue == "true" 
    // } else {
    //     debugValue == "false"
    // }
    // debug = debugValue;

    defaultJsonOutput.name = name;
    defaultJsonOutput.identifier = "com.delta." + consoleSelection + ".standard";
    defaultJsonOutput.gameTypeIdentifier = "com.rileytestut.delta.game." + consoleSelection;
    defaultJsonOutput.debug = debug;

    updateJson();

});

function getCurrentElement(itemId) {
    // Split the selected layout into an array of individual words
    let parts = layoutSelection.split(" ");
    let device = parts[0].toString();
    let layout = parts[1].toString();
    let orientation = document.querySelector('input[name="orientation"]:checked').id;

    // Get the items array from the selected layout
    let currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];
    
    // Find the matching item in the array
        let item = currentItemArray.find(item => {
            if (itemId === "d-pad") {
                const dPadInputs = ["up", "down", "left", "right"];
                return item.inputs && typeof item.inputs === "object" && dPadInputs.every(direction => direction in item.inputs) && !item.thumbstick;
            } else if (itemId === "thumbstick") {
                return item.thumbstick !== undefined;
            } else if (Array.isArray(item.inputs)) {
                return item.inputs.includes(itemId);
            } else if (typeof item.inputs === 'object') {
                return Object.values(item).includes(itemId);
            }
            return false;
        });

    return item;
}

function makeDraggable(draggableElement) {


    let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0, isDragging = false;
    let isResizing = false; // Add a flag for resizing

    draggableElement.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('resize-handle')) {
            isResizing = true; // Set the resizing flag to true
            return; // Exit the function if resizing
        }


        initialX = e.clientX;
        initialY = e.clientY;
        offsetX = draggableElement.offsetLeft;
        offsetY = draggableElement.offsetTop;

        isDragging = true;
        draggableElement.style.cursor = 'grabbing';

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
    });

    function drag(e) {
        if (isDragging && !isResizing) { // Prevent dragging when resizing
            const dx = e.clientX - initialX;
            const dy = e.clientY - initialY;

            let item = getCurrentElement(draggableElement.id);
            //console.log(item);
       
            let newLeft = offsetX + dx;
            let newTop = offsetY + dy;

            //get element parameters

            draggableElement.style.left = newLeft + 'px';
            draggableElement.style.top = newTop + 'px';

        }
    }

    function dragEnd() {
        if (isDragging) {
            isDragging = false;
            draggableElement.style.cursor = 'grab';

            let item = getCurrentElement(draggableElement.id);

            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', dragEnd);

            if (!isResizing) {
                const newLeft = parseInt(draggableElement.style.left, 10);
                const newTop = parseInt(draggableElement.style.top, 10);
                if (draggableElement.id == "game-screen") {
                     updateScreenPosition(draggableElement.id, newLeft, newTop);
                } else {
                    updateItemPosition(draggableElement.id, newLeft+item.extendedEdges.left, newTop+item.extendedEdges.top);
                }
                updateJson();
            }

            isResizing = false; // Reset the resizing flag
        }
    }

    function updateItemPosition(itemId, newX, newY) {
        // Split the selected layout into an array of individual words
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = document.querySelector('input[name="orientation"]:checked').id;

        // Get the items array from the selected layout
        let currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];

        // Find the matching item in the array
        let item = currentItemArray.find(item => {
            if (itemId === "d-pad") {
                const dPadInputs = ["up", "down", "left", "right"];
                return item.inputs && typeof item.inputs === "object" && dPadInputs.every(direction => direction in item.inputs) && !item.thumbstick;
            } else if (itemId === "thumbstick") {
                return item.thumbstick !== undefined;
            } else if (Array.isArray(item.inputs)) {
                return item.inputs.includes(itemId);
            } else if (typeof item.inputs === 'object') {
                return Object.values(item.inputs).includes(itemId);
            }
            return false;
        });

        if (item && item.frame) {
            item.frame.x = newX;
            item.frame.y = newY;
            //console.log(`Updated ${itemId}: x=${newX}, y=${newY}`);
        }
    }

    function updateScreenPosition(screenId, newScreenX, newScreenY) {
        // Split the selected layout into an array of individual words
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = document.querySelector('input[name="orientation"]:checked').id;

        // Get the items array from the selected layout
        let currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["screens"];
        console.log(currentItemArray[0]["outputFrame"]);

        currentItemArray[0]["outputFrame"]["x"] = newScreenX;
        currentItemArray[0]["outputFrame"]["y"] = newScreenY;

        // let screen = currentItemArray.find(screen => {
        //     if (typeof screen.outputFrame === 'object') {
        //         return Object.values(screen.outputFrame).includes(i);
        //     }
        //     return false;
        // });
        // if (screen && screen.outputFrame) {
        //     screen.outputFrame.x = newScreenX;
        //     screen.outputFrame.x = newScreenY;
        // }
    }
}


// Convert the JSON object to a formatted string
const jsonString = JSON.stringify(defaultJsonOutput, null, 4);

// Print the JSON string into the div with id "code" preserving the formatting
document.getElementById('code').textContent = jsonString;

function updateJson() {
    // Convert the JSON object to a formatted string
    const jsonString = JSON.stringify(defaultJsonOutput, null, 4);

    // Print the JSON string into the div with id "code" preserving the formatting
    document.getElementById('code').textContent = jsonString;
};
    
function selectItem(event) {
    // Remove highlight from all .layout-item elements
    document.querySelectorAll('.layout-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add the highlight to the clicked element
    event.currentTarget.classList.add('selected');

    // Get the selected item ID
    const itemId = event.currentTarget.id;

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = itemId;

    // Get the selected layout, device, and orientation
    let parts = layoutSelection.split(" ");
    let device = parts[0].toString();
    let layout = parts[1].toString();
    let orientation = document.querySelector('input[name="orientation"]:checked').id;

    // Get the items array from the selected layout
    currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];

    // Find the array item that contains the matching input
    currentItemId = event.currentTarget.id;
    selectedItem = currentItemArray.find(item => {
        if (currentItemId === "d-pad") {
            const dPadInputs = ["up", "down", "left", "right"];
            return item.inputs && typeof item.inputs === "object" && dPadInputs.every(direction => direction in item.inputs) && !item.thumbstick;
        } else if (currentItemId === "thumbstick") {
            return item.thumbstick !== undefined;
        } else if (Array.isArray(item.inputs)) {
            return item.inputs.includes(currentItemId);
        } else if (typeof item.inputs === 'object') {
            return Object.values(item.inputs).includes(currentItemId);
        }
        return false;
    });

    // Display the matched item in the .focus-item div
    displayMatchedItem(selectedItem);
}

function selectScreen(event) {
    // Remove highlight from all .layout-item elements
    document.querySelectorAll('.layout-item').forEach(screen => {
        screen.classList.remove('selected');
    });

    // Add the highlight to the clicked element
    event.currentTarget.classList.add('selected');

    // Get the selected item ID
    const screenId = event.currentTarget.id;

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = "Item " + screenId.toUpperCase();

    // Get the selected layout, device, and orientation
    let parts = layoutSelection.split(" ");
    let device = parts[0].toString();
    let layout = parts[1].toString();
    let orientation = document.querySelector('input[name="orientation"]:checked').id;


    // Safely get the screen array from the JSON if it exists
    let screenArray = defaultJsonOutput?.representations?.[device]?.[layout]?.[orientation]?.screens || null;

    

    if (screenArray) {
        // Proceed with operations on screenArray
        console.log("Screen array exists:", screenArray);
        // // Find the array item that contains the matching input
        currentScreenId = event.currentTarget.id;
        //console.log(currentScreenId);
        selectedScreen = screenArray.find(screen => {
           if (typeof screen.outputFrame === 'object') {
                return Object.values(screen.outputFrame);
            }
            return false;
        });

        // Display the matched item in the .focus-item div
        displayMatchedScreen(selectedScreen);
    } else {
        // Handle the case where the screenArray doesn't exist
        console.log("Screen array does not exist.");
    }

    
}

function displayMatchedItem(item) {
    const focusItemDiv = document.querySelector('.focus-item');
    focusItemDiv.innerHTML = ''; // Clear previous content
    document.getElementById("delete-button").style.display = "block";

    if (item) {
        // Function to create form fields and append them to the container
        function createFormField(id, label, value, path, container) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            //formGroup.id = label.toLowerCase() + "-container";

            const formId = formGroup.id = id;

            const formLabel = document.createElement('label');
            formLabel.textContent = label;

            const formInput = document.createElement('input');
            formInput.type = 'number';
            formInput.value = value;
            formInput.addEventListener('input', (e) => {
                const newValue = parseInt(e.target.value, 10);
                updateNestedProperty(item, path, newValue);
                updateDivStyle(item, currentItemId); // Update the corresponding div's CSS
                updateJson(); // Update the displayed JSON
            });

            formGroup.appendChild(formLabel);
            formGroup.appendChild(formInput);
            container.appendChild(formGroup); // Append the form group to the specified container (wrapperDiv)
        }

        // Update function for nested properties
        function updateNestedProperty(obj, path, newValue) {
            let current = obj;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = newValue;
        }

        // Function to update the corresponding div's CSS when clicked
        function updateDivStyle(item, divId) {
            const div = document.getElementById(divId);
            if (div) {
                if (item.frame) {
                    div.style.top = item.frame.y-item.extendedEdges.top + 'px';
                    div.style.left = item.frame.x-item.extendedEdges.left + 'px';
                   

                    // div.style.left = item.frame.x + 'px';
                    // div.style.top = item.frame.y + 'px';

                    div.style.width = item.frame.width + 'px';
                    div.style.height = item.frame.height + 'px';

                    div.style.paddingTop = item.extendedEdges.top + 'px';
                    div.style.paddingBottom = item.extendedEdges.bottom + 'px';
                    div.style.paddingLeft = item.extendedEdges.left + 'px';
                    div.style.paddingRight = item.extendedEdges.right + 'px';
                }
            }
        }

        // Create a new div to wrap both form fields
        const positionWrapper = document.createElement('div');
        positionWrapper.classList = 'position-wrapper'; // Add a class for styling if needed
        focusItemDiv.appendChild(positionWrapper); // Append the wrapper to focusItemDiv

        // Create a new div to wrap both form fields
        const sizeWrapper = document.createElement('div');
        sizeWrapper.classList = 'size-wrapper'; // Add a class for styling if needed
        focusItemDiv.appendChild(sizeWrapper); // Append the wrapper to focusItemDiv

        // Create form fields for each relevant property
        if (item.frame) {

            createFormField('form-x', 'X', item.frame.x, ['frame', 'x'], positionWrapper);
            createFormField('form-y', 'Y', item.frame.y, ['frame', 'y'], positionWrapper);
            createFormField('form-width', 'Width', item.frame.width, ['frame', 'width'], sizeWrapper);
            createFormField('form-height', 'Height', item.frame.height, ['frame', 'height'], sizeWrapper);
        
        }

        if (item.extendedEdges) {
            
            createFormField('form-top', 'Top', item.extendedEdges.top, ['extendedEdges', 'top'], sizeWrapper);
            createFormField('form-bottom', 'Bottom', item.extendedEdges.bottom, ['extendedEdges', 'bottom'], sizeWrapper);
            createFormField('form-left', 'Left', item.extendedEdges.left, ['extendedEdges', 'left'], sizeWrapper);
            createFormField('form-right', 'Right', item.extendedEdges.right, ['extendedEdges', 'right'], sizeWrapper);
        
        }

        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value < 0) {
                    this.value = 0;
                }
            });
        });


        // You can similarly wrap other fields in separate divs if needed
    } else {
        focusItemDiv.innerHTML = `<p>No matching item found.</p>`;
    }
}

function displayMatchedScreen(screen) {
    const focusItemDiv = document.querySelector('.focus-item');
    focusItemDiv.innerHTML = ''; // Clear previous content

    if (screen) {
        // Function to create form fields and append them to the container
        function createFormField(id, label, value, path, container) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const formId = formGroup.id = id;

            const formLabel = document.createElement('label');
            formLabel.textContent = label;

            const formInput = document.createElement('input');
            formInput.type = 'number';
            formInput.value = value;
            formInput.addEventListener('input', (e) => {
                const newValue = parseInt(e.target.value, 10);
                updateNestedProperty(screen, path, newValue);
                updateDivStyle(screen, currentScreenId); // Update the corresponding div's CSS
                updateJson(); // Update the displayed JSON
            });

            formGroup.appendChild(formLabel);
            formGroup.appendChild(formInput);

            // Append the form group to focusItemDiv
            container.appendChild(formGroup);
        }

        // Update function for nested properties
        function updateNestedProperty(obj, path, newValue) {
            let current = obj;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = newValue;
        }

        // Function to update the corresponding div's CSS
        function updateDivStyle(screen, divId) {
            const div = document.getElementById(divId);
            if (div) {
                if (screen.outputFrame) {
                    div.style.left = screen.outputFrame.x + 'px';
                    div.style.top = screen.outputFrame.y + 'px';
                    div.style.width = screen.outputFrame.width + 'px';
                    div.style.height = screen.outputFrame.height + 'px';
                }
            }
        }

        // Create a new div to wrap both form fields
        const positionWrapper = document.createElement('div');
        positionWrapper.classList = 'screen-position-wrapper'; // Add a class for styling if needed
        focusItemDiv.appendChild(positionWrapper); // Append the wrapper to focusItemDiv

        // Create a new div to wrap both form fields
        const sizeWrapper = document.createElement('div');
        sizeWrapper.classList = 'screen-size-wrapper'; // Add a class for styling if needed
        focusItemDiv.appendChild(sizeWrapper); // Append the wrapper to focusItemDiv

        // Create form fields for each relevant property
        if (screen.outputFrame) {
            createFormField('form-x', 'X', screen.outputFrame.x, ['outputFrame', 'x'], positionWrapper);
            createFormField('form-y', 'Y', screen.outputFrame.y, ['outputFrame', 'y'], positionWrapper);
            createFormField('form-width', 'Width', screen.outputFrame.width, ['outputFrame', 'width'], sizeWrapper);
            createFormField('form-height', 'Height', screen.outputFrame.height, ['outputFrame', 'height'], sizeWrapper);
        }

    } else {
        focusItemDiv.innerHTML = `<p>No matching item found.</p>`;
    }
}


function updateJson() {
    // Convert the JSON object to a formatted string
    const jsonString = JSON.stringify(defaultJsonOutput, null, 4);

    // Print the JSON string into the div with id "code" preserving the formatting
    document.getElementById('code').textContent = jsonString;
}

// Add an event listener to the copy button
document.getElementById('copy-json').addEventListener('click', function() {
    // Get the text content of the div with id "code"
    const jsonText = document.getElementById('code').textContent;

    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = jsonText;
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);

    // Optionally, display a message or alert to confirm the copy action
    alert('JSON copied to clipboard!');
});


document.getElementById('uploadImageButton').addEventListener('click', function() {
    const fileInput = document.getElementById('bgUpload');
    const layoutObject = document.getElementById('layout-object');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            layoutObject.style.backgroundImage = `url(${e.target.result})`;
            layoutObject.style.backgroundSize = 'cover'; // Optional: cover the entire div
            layoutObject.style.backgroundPosition = 'center'; // Optional: center the image
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Please select an image file to upload.');
    }
});

document.getElementById('delete-button').addEventListener('click', function() {
    let currentItemName = document.querySelector(".item-name").innerHTML;

    document.getElementById("delete-button").style.display = "none";

    //console.log(currentItemName);

    let currentItem = getCurrentElement(currentItemName);

    //console.log(currentItem);

    if (currentItem) {
        // Get the selected layout and orientation
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = getSelectedOrientation();

        // Find the item in the JSON and remove it
        let itemsArray = defaultJsonOutput.representations[device][layout][orientation].items;
        
        const index = itemsArray.findIndex(item => item === currentItem);
        if (index !== -1) {
            itemsArray.splice(index, 1);
        }

        // Remove the item from the DOM
        document.querySelector('#' + currentItemName).remove();

        // Clear the focus section
        document.querySelector('.focus-item').innerHTML = '';
        document.querySelector('.item-name').innerText = '';

        loadLayout();

        updateJson();

        // Clear the current item reference
        currentItem = null;

        document.getElementById("focus").style.display = "flex";

        
        console.log("Item deleted successfully.");
    } else {
        console.log("No item is currently in focus.");
    }

    addButtons();

});

function addButtons() {
    let consoleTypes = ["", "nes", "snes", "n64", "gbc", "gba", "nds"];

    const buttonConfigs = {
        gbc: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        gba: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'l', 'r', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        nds: ['menu', 'd-pad', 'thumbstick', 'xy', 'a', 'b', 'x', 'y', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        nes: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        snes: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'x', 'y', 'start', 'select', 'l', 'r', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        n64: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'l', 'r', 'cUp', 'cDown', 'cLeft', 'cRight', 'z', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward']
    };

    let consoleSelect = document.getElementById('consoleSelect');
    let buttonContainer = document.getElementById('buttons-container');
    let layoutObject = document.getElementById('layout-object');

    
    let selectedConsole = consoleSelect.value;

    // Clear previous buttons
    buttonContainer.innerHTML = '';

    // Get the corresponding buttons for the selected console
    let buttons = buttonConfigs[selectedConsole];
    if (buttons) {
        buttons.forEach(buttonName => {
            if (!buttonExistsInJson(buttonName, selectedConsole)) {
                createButton(buttonName, selectedConsole);
            }
        });
    }

    function buttonExistsInJson(buttonName, consoleType) {
        let layoutParts = layoutSelection.split(" ");
        let device = layoutParts[0];
        let layout = layoutParts[1];
        let orientation = getSelectedOrientation();

        let itemsArray = defaultJsonOutput.representations[device][layout][orientation].items;

        return itemsArray.some(item => {
            if (buttonName === 'd-pad') {
                // Check if the item represents a d-pad
                return item.inputs && item.inputs.up === 'up' && item.inputs.down === 'down' && 
                       item.inputs.left === 'left' && item.inputs.right === 'right';
            } else if (buttonName === 'thumbstick') {
                // Check if the item represents a thumbstick
                return item.inputs && item.inputs.up === 'analogStickUp' && item.inputs.down === 'analogStickDown' && 
                       item.inputs.left === 'analogStickLeft' && item.inputs.right === 'analogStickRight';
            } else {
                // Default check for other buttons
                return Array.isArray(item.inputs) && item.inputs.includes(buttonName);
            }
        });
    }

    // Function to create a button and add it to the container
    function createButton(buttonName, consoleType) {
        let button = document.createElement('button');
        button.innerText = buttonName;
        button.className = 'console-button';
        button.addEventListener('click', function() {
            addButtonToJsonAndLayout(buttonName, consoleType);
            button.remove(); // Remove the button from the button container after it's added
        });
        buttonContainer.appendChild(button);
    }

    // Function to add the button configuration to the JSON array and layout-object
    function addButtonToJsonAndLayout(buttonName, consoleType) {
        let layoutParts = layoutSelection.split(" ");
        let device = layoutParts[0];
        let layout = layoutParts[1];
        let orientation = getSelectedOrientation();

        let buttonFormat;

        // Handle special cases for d-pad and thumbstick
        if (buttonName === 'd-pad') {
            buttonFormat = {
                "inputs": {
                    "up": "up",
                    "down": "down",
                    "left": "left",
                    "right": "right"
                },
                "frame": {
                    "x": 0,
                    "y": 0,
                    "width": 120,
                    "height": 120
                },
                "extendedEdges": {
                    "top": 5,
                    "bottom": 5,
                    "left": 5,
                    "right": 5
                }
            };
        } else if (buttonName === 'thumbstick') {
            buttonFormat = {
                "thumbstick": {
                    "name": `${orientation}_thumbstick.pdf`,
                    "width": 50,
                    "height": 50
                },
                "inputs": {
                    "up": "analogStickUp",
                    "down": "analogStickDown",
                    "left": "analogStickLeft",
                    "right": "analogStickRight"
                },
                "frame": {
                    "x": 0,
                    "y": 0,
                    "width": 50,
                    "height": 50
                },
                "extendedEdges": {
                    "top": 5,
                    "bottom": 5,
                    "left": 5,
                    "right": 5
                }
            };
        } else {
            // Default format for other buttons
            buttonFormat = {
                "inputs": [buttonName],
                "frame": {
                    "x": 0,
                    "y": 0,
                    "width": 50,
                    "height": 50
                },
                "extendedEdges": {
                    "top": 5,
                    "bottom": 5,
                    "left": 5,
                    "right": 5
                }
            };
        }

        // Add the button configuration to the correct JSON array
        defaultJsonOutput.representations[device][layout][orientation].items.push(buttonFormat);

        // Create a new div for the button in the layout-object
        let buttonDiv = document.createElement('div');
        buttonDiv.className = 'layout-item';
        buttonDiv.style.width = buttonFormat.frame.width + 'px';
        buttonDiv.style.height = buttonFormat.frame.height + 'px';
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.left = buttonFormat.frame.x + 'px';
        buttonDiv.style.top = buttonFormat.frame.y + 'px';
        buttonDiv.style.border = '1px solid black';
        buttonDiv.style.backgroundColor = 'rgba(220,220,220,.8)';
        buttonDiv.innerText = buttonName;

        // Append the button div to the layout-object
        layoutObject.appendChild(buttonDiv);

        loadLayout();

        console.log(`${buttonName} added to layout.`);
    }
}

document.getElementById('shadowOpacitySlider').addEventListener('input', function() {
    let opacity = this.value / 100; // Convert slider value to a decimal
    let layoutObject = document.getElementById('layout-object');
    
    // Set the box-shadow with the new opacity
    layoutObject.style.boxShadow = `inset 0 0 0 2000px rgba(255, 255, 255, ${opacity})`;
});

document.getElementById('importJsonButton').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                let jsonContent = JSON.parse(e.target.result);
                
                // Ensure all items have the required extendedEdges parameters
                jsonContent = ensureExtendedEdges(jsonContent);

                // Find the console name based on the identifier
                selectConsoleBasedOnIdentifier(jsonContent);

                // Place the "name" from the JSON into the input field
                placeNameInInput(jsonContent);

                // Place the "gameTypeIdentifier" from the JSON into the input field
                placeGameTypeIdentifierInInput(jsonContent);

                // Replace defaultJsonOutput with the imported JSON
                defaultJsonOutput = jsonContent;
                console.log("defaultJsonOutput has been updated:", defaultJsonOutput);
    automaticSelectLayout();
                // Optionally, refresh or update the UI to reflect the new data
                updateUIWithNewJsonData(); // Implement this function as needed
            } catch (error) {
                console.error("Invalid JSON file:", error);
                alert("Failed to import JSON: Invalid JSON format.");
            }
        };
        reader.readAsText(file);
    }

    
});

function placeNameInInput(jsonContent) {
    // Check if the "name" field exists in the JSON
    if (jsonContent.name) {
        document.getElementById('name').value = jsonContent.name;
        console.log(`Name field set to: ${jsonContent.name}`);
    } else {
        console.log("Name field is missing in the JSON.");
    }
}

function placeGameTypeIdentifierInInput(jsonContent) {
    // Check if the "gameTypeIdentifier" field exists in the JSON
    if (jsonContent.gameTypeIdentifier) {
        document.getElementById('identifier').value = jsonContent.gameTypeIdentifier;
        console.log(`Identifier field set to: ${jsonContent.gameTypeIdentifier}`);
    } else {
        console.log("gameTypeIdentifier field is missing in the JSON.");
    }
}

function ensureExtendedEdges(jsonContent) {
    function addDefaultEdges(item) {
        if (!item.extendedEdges) {
            item.extendedEdges = {};
        }
        item.extendedEdges.top = item.extendedEdges.top || 0;
        item.extendedEdges.bottom = item.extendedEdges.bottom || 0;
        item.extendedEdges.left = item.extendedEdges.left || 0;
        item.extendedEdges.right = item.extendedEdges.right || 0;
    }

    for (let device in jsonContent.representations) {
        for (let layout in jsonContent.representations[device]) {
            for (let orientation in jsonContent.representations[device][layout]) {
                jsonContent.representations[device][layout][orientation].items.forEach(item => {
                    addDefaultEdges(item);
                });
            }
        }
    }

    return jsonContent;
}

function selectConsoleBasedOnIdentifier(jsonContent) {
    const identifierMapping = {
        "com.delta.n64.standard": "n64",
        "com.delta.gba.standard": "gba",
        "com.delta.gbc.standard": "gbc",
        "com.delta.nes.standard": "nes",
        "com.delta.snes.standard": "snes",
        "com.delta.nds.standard": "nds"
    };

    // Check the identifier at the top level of the JSON
    let identifier = jsonContent.identifier;
    if (identifier && identifierMapping[identifier]) {
        document.getElementById('consoleSelect').value = identifierMapping[identifier];
        console.log(`Console selected: ${identifierMapping[identifier]}`);
    } else {
        console.log("No matching identifier found or identifier is missing.");
    }
}

function updateUIWithNewJsonData() {
    updateJson();
    selectConsoleBasedOnIdentifier(defaultJsonOutput);
}

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const selectedLayout = document.getElementById('imageLayoutSelect').value;
    
    if (file && selectedLayout) {
        if (file.type === 'application/pdf') {
            handlePdfUpload(file, selectedLayout);
        } else if (file.type.startsWith('image/')) {
            handleImageUpload(file, selectedLayout);
        } else {
            alert('Please upload a PDF or image file.');
            this.value = ''; // Clear the file input
        }
    } else if (!selectedLayout) {
        alert('Please select a layout before uploading a file.');
        this.value = ''; // Clear the file input
    } else {
        alert('Please select a file to upload.');
    }
});


// Populate the image layout select
function populateImageLayoutSelect() {
    const imageLayoutSelect = document.getElementById('imageLayoutSelect');
    imageLayoutSelect.innerHTML = '';
    layoutTypes.forEach(function(layoutType) {
        if (layoutType !== "") {  // Skip empty option
            let option = document.createElement('option');
            option.value = layoutType;
            option.text = layoutType.toUpperCase();
            imageLayoutSelect.appendChild(option);
        }
    });
}

// Handle image upload
document.getElementById('uploadImageButton').addEventListener('click', function() {
    const file = document.getElementById('imageUpload').files[0];
    const selectedLayout = document.getElementById('imageLayoutSelect').value;
    
    if (file && selectedLayout) {
        const imageUrl = URL.createObjectURL(file);
        layoutImages[selectedLayout] = imageUrl;
        displayUploadedImages();
        updateLayoutBackground();
    } else {
        alert('Please select both a layout and an image file.');
    }
});

// Display all uploaded images
function displayUploadedImages() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    for (const [layout, imageUrl] of Object.entries(layoutImages)) {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'image-wrapper';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = layout;
        img.style.maxWidth = '100px';
        img.style.height = 'auto';

        const label = document.createElement('p');
        label.textContent = layout;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            URL.revokeObjectURL(imageUrl);
            delete layoutImages[layout];
            displayUploadedImages();
            updateLayoutBackground();
        };

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(label);
        imgWrapper.appendChild(removeButton);
        imageContainer.appendChild(imgWrapper);
    }
}

// Update layout background based on selected layout
function updateLayoutBackground() {
    const selectedLayout = layoutSelection;
    const layoutObject = document.getElementById('layout-object');
    
    if (selectedLayout && layoutImages[selectedLayout]) {
        layoutObject.style.backgroundImage = `url(${layoutImages[selectedLayout]})`;
        layoutObject.style.backgroundSize = 'cover';
        layoutObject.style.backgroundPosition = 'center';
    } else {
        layoutObject.style.backgroundImage = 'none';
    }
}

// Add event listener to layout select
selectLayout.addEventListener('change', function() {
    layoutSelection = selectLayout.value; // Update the layoutSelection value
    updateLayoutBackground();
});

// Call these functions to initialize
populateImageLayoutSelect();

// Only call displayUploadedImages if a layout is selected
if (layoutSelection) {
    displayUploadedImages();
    updateLayoutBackground();
}

function handlePdfUpload(file, selectedLayout) {
    const fileReader = new FileReader();
    
    fileReader.onload = function() {
        const typedarray = new Uint8Array(this.result);

        pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
            pdf.getPage(1).then(function(page) {
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                page.render(renderContext).promise.then(function() {
                    const imageUrl = canvas.toDataURL('image/png');
                    layoutImages[selectedLayout] = imageUrl;

                    // Update defaultJsonOutput with the filename
                    updateDefaultJsonOutput(selectedLayout, file.name);
                    updateJson();
                    displayUploadedImages();
                    updateLayoutBackground();
                });
            });
        });
    };

    fileReader.readAsArrayBuffer(file);
}

// Update the file input to accept PDFs as well
document.getElementById('imageUpload').accept = "image/*,application/pdf";

function updateDefaultJsonOutput(selectedLayout, filename) {
    // Split the selected layout into device and layout type
    const [device, layoutType] = selectedLayout.split(' ');
    const orientation = getSelectedOrientation();

    // Update the defaultJsonOutput
    if (defaultJsonOutput.representations[device] &&
        defaultJsonOutput.representations[device][layoutType] &&
        defaultJsonOutput.representations[device][layoutType][orientation] &&
        defaultJsonOutput.representations[device][layoutType][orientation].assets) {
        defaultJsonOutput.representations[device][layoutType][orientation].assets.resizable = filename;
        console.log(`Updated defaultJsonOutput for ${selectedLayout} (${orientation}) with filename: ${filename}`);
    } else {
        console.error(`Could not update defaultJsonOutput for ${selectedLayout} (${orientation}). Path does not exist.`);
    }
}

function getSelectedOrientation() {
    return document.querySelector('input[name="orientation"]:checked').id;
}