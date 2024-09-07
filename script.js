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
                        },
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
                        },
                        {
                            "inputs": {
                                "x": "touchScreenX",
                                "y": "touchScreenY"
                            },
                            "frame": {
                                "x": 100,
                                "y": 200,
                                "width": 200,
                                "height": 150
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
                        },
                        {
                            "inputs": {
                                "x": "touchScreenX",
                                "y": "touchScreenY"
                            },
                            "frame": {
                                "x": 100,
                                "y": 200,
                                "width": 200,
                                "height": 150
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
                        },
                        {
                            "inputs": {
                                "x": "touchScreenX",
                                "y": "touchScreenY"
                            },
                            "frame": {
                                "x": 100,
                                "y": 200,
                                "width": 200,
                                "height": 150
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
                        },
                        {
                            "inputs": {
                                "x": "touchScreenX",
                                "y": "touchScreenY"
                            },
                            "frame": {
                                "x": 100,
                                "y": 200,
                                "width": 200,
                                "height": 150
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
                        },
                        {
                            "inputs": {
                                "x": "touchScreenX",
                                "y": "touchScreenY"
                            },
                            "frame": {
                                "x": 100,
                                "y": 200,
                                "width": 200,
                                "height": 150
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
                    "translucent": false
                }
            }
        }
    }
};

let defaultJson_NES = {
    "name": "",
    "identifier": "com.rileytestut.delta.game.",
    "gameTypeIdentifier": "com.rileytestut.delta.game.nes",
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
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 28,
                                "y": 486,
                                "width": 155,
                                "height": 155
                            },
                            "extendedEdges": {
                                "top": 19,
                                "bottom": 19,
                                "left": 19,
                                "right": 19
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 313,
                                "y": 524,
                                "width": 71,
                                "height": 71
                            },
                            "extendedEdges": {
                                "right": 29,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 221,
                                "y": 524,
                                "width": 71,
                                "height": 71
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 319,
                                "y": 652,
                                "width": 45,
                                "height": 18
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 240,
                                "y": 652,
                                "width": 45,
                                "height": 18
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 28,
                                "y": 690,
                                "width": 21,
                                "height": 20
                            },
                            "extendedEdges": {
                                "left": 28,
                                "bottom": 29,
                                "top": 0,
                                "right": 0
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
                                "x": 0,
                                "y": 38,
                                "width": 430,
                                "height": 363
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
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 16,
                                "y": 228,
                                "width": 168,
                                "height": 168
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 637,
                                "y": 243,
                                "width": 81,
                                "height": 81
                            },
                            "extendedEdges": {
                                "left": 0,
                                "down": 0,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 566,
                                "y": 315,
                                "width": 81,
                                "height": 81
                            },
                            "extendedEdges": {
                                "up": 0,
                                "right": 0,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 378,
                                "y": 368,
                                "width": 80,
                                "height": 28
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 275,
                                "y": 368,
                                "width": 80,
                                "height": 28
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 327,
                                "y": 16,
                                "width": 80,
                                "height": 28
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
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
                                "x": 166,
                                "y": 8,
                                "width": 405,
                                "height": 380
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
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 29,
                                "y": 646,
                                "width": 162,
                                "height": 162
                            },
                            "extendedEdges": {
                                "top": 20,
                                "bottom": 20,
                                "left": 29,
                                "right": 20
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 325,
                                "y": 685,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "right": 30,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 229,
                                "y": 685,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 233,
                                "y": 847,
                                "width": 49,
                                "height": 17
                            },
                            "extendedEdges": {
                                "top": 20,
                                "bottom": 20,
                                "left": 20,
                                "right": 20
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 146,
                                "y": 847,
                                "width": 49,
                                "height": 17
                            },
                            "extendedEdges": {
                                "top": 20,
                                "bottom": 20,
                                "left": 20,
                                "right": 20
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 376,
                                "y": 632,
                                "width": 24,
                                "height": 24
                            },
                            "extendedEdges": {
                                "top": 40,
                                "left": 20,
                                "right": 29,
                                "bottom": 0
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
                                "y": 70,
                                "width": 430,
                                "height": 404
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
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 34,
                                "y": 237,
                                "width": 175,
                                "height": 175
                            },
                            "extendedEdges": {
                                "left": 34,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 812,
                                "y": 253,
                                "width": 84,
                                "height": 84
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 0,
                                "right": 34,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 738,
                                "y": 328,
                                "width": 84,
                                "height": 84
                            },
                            "extendedEdges": {
                                "top": 0,
                                "right": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 477,
                                "y": 383,
                                "width": 83,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 370,
                                "y": 383,
                                "width": 83,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 424,
                                "y": 17,
                                "width": 83,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                        "small": "ipad_portrait_small.png",
                        "medium": "ipad_portrait_medium.png",
                        "large": "ipad_portrait_large.png"
                    },
                    "items": [
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 77,
                                "y": 616,
                                "width": 201,
                                "height": 201
                            },
                            "extendedEdges": {
                                "top": 40,
                                "bottom": 85,
                                "left": 77,
                                "right": 40
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 810,
                                "y": 730,
                                "width": 80,
                                "height": 80
                            },
                            "extendedEdges": {
                                "bottom": 93,
                                "right": 133,
                                "top": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 676,
                                "y": 730,
                                "width": 80,
                                "height": 80
                            },
                            "extendedEdges": {
                                "bottom": 93,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 501,
                                "y": 752,
                                "width": 78,
                                "height": 33
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 365,
                                "y": 752,
                                "width": 78,
                                "height": 33
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 48,
                                "y": 511,
                                "width": 30,
                                "height": 30
                            },
                            "extendedEdges": {
                                "top": 40,
                                "left": 48,
                                "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 24,
                                "y": 741,
                                "width": 258,
                                "height": 258
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 1223,
                                "y": 789,
                                "width": 118,
                                "height": 118
                            },
                            "extendedEdges": {
                                "bottom": 13,
                                "left": 0,
                                "top": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 1103,
                                "y": 881,
                                "width": 118,
                                "height": 118
                            },
                            "extendedEdges": {
                                "top": 0,
                                "right": 13,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 699,
                                "y": 959,
                                "width": 117,
                                "height": 41
                            },
                            "extendedEdges": {
                                "left": 16,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 549,
                                "y": 959,
                                "width": 117,
                                "height": 41
                            },
                            "extendedEdges": {
                                "right": 16,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 628,
                                "y": 24,
                                "width": 117,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                        "small": "ipad_portrait_small.png",
                        "medium": "ipad_portrait_medium.png",
                        "large": "ipad_portrait_large.png"
                    },
                    "items": [
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 77,
                                "y": 616,
                                "width": 201,
                                "height": 201
                            },
                            "extendedEdges": {
                                "top": 40,
                                "bottom": 85,
                                "left": 77,
                                "right": 40
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 810,
                                "y": 730,
                                "width": 80,
                                "height": 80
                            },
                            "extendedEdges": {
                                "bottom": 93,
                                "right": 133,
                                "top": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 676,
                                "y": 730,
                                "width": 80,
                                "height": 80
                            },
                            "extendedEdges": {
                                "bottom": 93,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 501,
                                "y": 752,
                                "width": 78,
                                "height": 33
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 365,
                                "y": 752,
                                "width": 78,
                                "height": 33
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 48,
                                "y": 511,
                                "width": 30,
                                "height": 30
                            },
                            "extendedEdges": {
                                "top": 40,
                                "left": 48,
                                "bottom": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1024,
                        "height": 683
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
                        "top": 20,
                        "bottom": 20,
                        "left": 20,
                        "right": 20
                    }
                },
                "landscape": {
                    "assets": {
                        "small": "ipad_landscape_small.png",
                        "medium": "ipad_landscape_medium.png",
                        "large": "ipad_landscape_large.png"
                    },
                    "items": [
                        {
                            "inputs": {
                                "up": "up",
                                "down": "down",
                                "left": "left",
                                "right": "right"
                            },
                            "frame": {
                                "x": 62,
                                "y": 93,
                                "width": 100,
                                "height": 100
                            },
                            "extendedEdges": {
                                "top": 20,
                                "bottom": 42,
                                "left": 62,
                                "right": 20
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 575,
                                "y": 150,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "bottom": 46,
                                "right": 67,
                                "top": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 508,
                                "y": 150,
                                "width": 40,
                                "height": 40
                            },
                            "extendedEdges": {
                                "bottom": 46,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 336,
                                "y": 161,
                                "width": 39,
                                "height": 16
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "select"
                            ],
                            "frame": {
                                "x": 268,
                                "y": 161,
                                "width": 39,
                                "height": 16
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 24,
                                "y": 40,
                                "width": 15,
                                "height": 15
                            },
                            "extendedEdges": {
                                "top": 20,
                                "left": 24,
                                "bottom": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 683,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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

let defaultJson_SNES = {
  "name": "Standard SNES",
  "identifier": "com.delta.snes.standard",
  "gameTypeIdentifier": "com.rileytestut.delta.game.snes",
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 7,
                              "y": 502,
                              "width": 170,
                              "height": 170
                          },
                          "extendedEdges": {
                              "top": 19,
                              "bottom": 19,
                              "left": 19,
                              "right": 19
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 323,
                              "y": 554,
                              "width": 65,
                              "height": 65
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 24
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 265,
                              "y": 612,
                              "width": 65,
                              "height": 65
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "right": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 430,
                              "width": 125,
                              "height": 37
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 289,
                              "y": 430,
                              "width": 125,
                              "height": 37
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 227,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 160,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 10,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "left": 10,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 205,
                              "y": 554,
                              "width": 65,
                              "height": 65
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 262,
                              "y": 494,
                              "width": 65,
                              "height": 65
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 16,
                              "y": 219,
                              "width": 177,
                              "height": 177
                          },
                          "extendedEdges": {
                              "left": 22,
                              "top": 22,
                              "right": 22,
                              "bottom": 22
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 637,
                              "y": 262,
                              "width": 58,
                              "height": 58
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 39
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 584,
                              "y": 316,
                              "width": 58,
                              "height": 58
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 38,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 16,
                              "y": 16,
                              "width": 110,
                              "height": 44
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 609,
                              "y": 16,
                              "width": 110,
                              "height": 44
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 379,
                              "y": 369,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "left": 11,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 276,
                              "y": 369,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "right": 11,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 329,
                              "y": 16,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 582,
                              "y": 207,
                              "width": 58,
                              "height": 58
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 529,
                              "y": 262,
                              "width": 58,
                              "height": 58
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 8,
                              "y": 648,
                              "width": 177,
                              "height": 177
                          },
                          "extendedEdges": {
                              "top": 20,
                              "bottom": 20,
                              "left": 20,
                              "right": 20
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 335,
                              "y": 702,
                              "width": 68,
                              "height": 68
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 25
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 275,
                              "y": 762,
                              "width": 68,
                              "height": 68
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "right": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 573,
                              "width": 130,
                              "height": 38
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 301,
                              "y": 573,
                              "width": 130,
                              "height": 38
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 236,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 166,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 10,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "left": 10,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 213,
                              "y": 702,
                              "width": 68,
                              "height": 68
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 272,
                              "y": 640,
                              "width": 68,
                              "height": 68
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
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
                      "resizable": "iphone_edgetoedge_landscape.pdf"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 34,
                              "y": 228,
                              "width": 184,
                              "height": 184
                          },
                          "extendedEdges": {
                              "left": 34,
                              "top": 22,
                              "right": 22,
                              "bottom": 22
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 812,
                              "y": 273,
                              "width": 60,
                              "height": 60
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 58
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 757,
                              "y": 329,
                              "width": 60,
                              "height": 60
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 40,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 17,
                              "y": 17,
                              "width": 114,
                              "height": 45
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 800,
                              "y": 17,
                              "width": 114,
                              "height": 45
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 477,
                              "y": 384,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "left": 11,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 370,
                              "y": 384,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "right": 11,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 425,
                              "y": 17,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 755,
                              "y": 215,
                              "width": 60,
                              "height": 60
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 700,
                              "y": 273,
                              "width": 60,
                              "height": 60
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                      "small": "ipad_portrait_small.png",
                      "medium": "ipad_portrait_medium.png",
                      "large": "ipad_portrait_large.png"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 71,
                              "y": 565,
                              "width": 199,
                              "height": 199
                          },
                          "extendedEdges": {
                              "top": 38,
                              "bottom": 93,
                              "left": 76,
                              "right": 38
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 896,
                              "y": 630,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 12,
                              "bottom": 12,
                              "left": 0,
                              "right": 57
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 812,
                              "y": 694,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 93,
                              "left": 12,
                              "right": 12
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 430,
                              "width": 213,
                              "height": 57
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 810,
                              "y": 430,
                              "width": 213,
                              "height": 57
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 565,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "left": 10,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 468,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "left": 10,
                              "right": 10,
                              "top": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 371,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "right": 10,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 729,
                              "y": 629,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 12,
                              "bottom": 12,
                              "right": 0,
                              "left": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 812,
                              "y": 565,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 12,
                              "right": 12,
                              "top": 0
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 24,
                              "y": 741,
                              "width": 258,
                              "height": 258
                          },
                          "extendedEdges": {
                              "left": 40,
                              "top": 40,
                              "right": 40,
                              "bottom": 40
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 1224,
                              "y": 804,
                              "width": 85,
                              "height": 85
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 56
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 1147,
                              "y": 884,
                              "width": 85,
                              "height": 85
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 56,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 24,
                              "y": 560,
                              "width": 160,
                              "height": 64
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 1183,
                              "y": 560,
                              "width": 160,
                              "height": 64
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 699,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "left": 16,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 550,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "right": 14,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 629,
                              "y": 24,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 1143,
                              "y": 725,
                              "width": 85,
                              "height": 85
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 1065,
                              "y": 805,
                              "width": 85,
                              "height": 85
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                      "small": "ipad_portrait_small.png",
                      "medium": "ipad_portrait_medium.png",
                      "large": "ipad_portrait_large.png"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 71,
                              "y": 565,
                              "width": 199,
                              "height": 199
                          },
                          "extendedEdges": {
                              "top": 38,
                              "bottom": 93,
                              "left": 76,
                              "right": 38
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 896,
                              "y": 630,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 12,
                              "bottom": 12,
                              "left": 0,
                              "right": 57
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 812,
                              "y": 694,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 93,
                              "left": 12,
                              "right": 12
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 430,
                              "width": 213,
                              "height": 57
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 810,
                              "y": 430,
                              "width": 213,
                              "height": 57
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 565,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "left": 10,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 468,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "left": 10,
                              "right": 10,
                              "top": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 371,
                              "y": 709,
                              "width": 76,
                              "height": 67
                          },
                          "extendedEdges": {
                              "right": 10,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 729,
                              "y": 629,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "top": 12,
                              "bottom": 12,
                              "right": 0,
                              "left": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 812,
                              "y": 565,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 12,
                              "right": 12,
                              "top": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 1024,
                      "height": 683
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
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 610,
                              "y": 145,
                              "width": 46,
                              "height": 42
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 28
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 571,
                              "y": 185,
                              "width": 46,
                              "height": 42
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 28,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 11,
                              "y": 11,
                              "width": 80,
                              "height": 32
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 590,
                              "y": 11,
                              "width": 80,
                              "height": 32
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 349,
                              "y": 223,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "left": 8,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 274,
                              "y": 223,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "right": 7,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 312,
                              "y": 11,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "x"
                          ],
                          "frame": {
                              "x": 570,
                              "y": 106,
                              "width": 46,
                              "height": 42
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "right": 0,
                              "top": 0
                          }
                      },
                      {
                          "inputs": [
                              "y"
                          ],
                          "frame": {
                              "x": 531,
                              "y": 146,
                              "width": 46,
                              "height": 42
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "right": 0,
                              "left": 0
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
                              "x": 11,
                              "y": 114,
                              "width": 128,
                              "height": 129
                          },
                          "extendedEdges": {
                              "top": 20,
                              "bottom": 20,
                              "left": 40,
                              "right": 20
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 683,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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

let defaultJson_N64 = {
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
                                "x": 50,
                                "y": 529,
                                "width": 91,
                                "height": 91
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
                                "x": 21,
                                "y": 682,
                                "width": 155,
                                "height": 155
                            },
                            "extendedEdges": {
                                "top": 19,
                                "bottom": 19,
                                "left": 21,
                                "right": 9
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 319,
                                "y": 587,
                                "width": 72,
                                "height": 72
                            },
                            "extendedEdges": {
                                "right": 21,
                                "top": 19,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 221,
                                "y": 556,
                                "width": 72,
                                "height": 72
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 296,
                                "y": 494,
                                "width": 72,
                                "height": 72
                            },
                            "extendedEdges": {
                                "bottom": 19,
                                "top": 0,
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
                                "y": 430,
                                "width": 122,
                                "height": 38
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 291,
                                "y": 430,
                                "width": 122,
                                "height": 38
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 186,
                                "y": 661,
                                "width": 41,
                                "height": 41
                            },
                            "extendedEdges": {
                                "left": 0,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 194,
                                "y": 473,
                                "width": 23,
                                "height": 23
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 278,
                                "y": 684,
                                "width": 54,
                                "height": 54
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 0,
                                "right": 0,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 278,
                                "y": 787,
                                "width": 54,
                                "height": 54
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "right": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 228,
                                "y": 735,
                                "width": 54,
                                "height": 54
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 329,
                                "y": 736,
                                "width": 54,
                                "height": 54
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 29
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
                                "x": 37,
                                "y": 113,
                                "width": 94,
                                "height": 94
                            },
                            "extendedEdges": {
                                "top": 33,
                                "bottom": 33,
                                "left": 37,
                                "right": 33
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
                                "x": 16,
                                "y": 261,
                                "width": 135,
                                "height": 135
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 658,
                                "y": 174,
                                "width": 61,
                                "height": 61
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 576,
                                "y": 147,
                                "width": 61,
                                "height": 61
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 640,
                                "y": 94,
                                "width": 61,
                                "height": 61
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 16,
                                "y": 15,
                                "width": 110,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 609,
                                "y": 15,
                                "width": 110,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 327,
                                "y": 368,
                                "width": 80,
                                "height": 28
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 329,
                                "y": 16,
                                "width": 80,
                                "height": 28
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 634,
                                "y": 271,
                                "width": 44,
                                "height": 44
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 0,
                                "right": 0,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 634,
                                "y": 353,
                                "width": 44,
                                "height": 44
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "right": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 593,
                                "y": 312,
                                "width": 44,
                                "height": 44
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 675,
                                "y": 312,
                                "width": 44,
                                "height": 44
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                                "x": 52,
                                "y": 676,
                                "width": 95,
                                "height": 95
                            },
                            "extendedEdges": {
                                "top": 26,
                                "bottom": 26,
                                "left": 26,
                                "right": 26
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
                                "x": 22,
                                "y": 835,
                                "width": 161,
                                "height": 161
                            },
                            "extendedEdges": {
                                "top": 20,
                                "bottom": 20,
                                "left": 22,
                                "right": 9
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 331,
                                "y": 736,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "right": 22,
                                "top": 20,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 229,
                                "y": 704,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 307,
                                "y": 640,
                                "width": 75,
                                "height": 75
                            },
                            "extendedEdges": {
                                "bottom": 20,
                                "top": 0,
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
                                "y": 573,
                                "width": 127,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 302,
                                "y": 573,
                                "width": 127,
                                "height": 40
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 193,
                                "y": 813,
                                "width": 43,
                                "height": 43
                            },
                            "extendedEdges": {
                                "left": 0,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 201,
                                "y": 618,
                                "width": 24,
                                "height": 24
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 288,
                                "y": 837,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 0,
                                "right": 0,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 288,
                                "y": 943,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "right": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 237,
                                "y": 890,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 342,
                                "y": 891,
                                "width": 56,
                                "height": 56
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 30
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
                                "x": 56,
                                "y": 118,
                                "width": 98,
                                "height": 98
                            },
                            "extendedEdges": {
                                "top": 34,
                                "bottom": 34,
                                "left": 56,
                                "right": 34
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
                                "x": 34,
                                "y": 272,
                                "width": 141,
                                "height": 141
                            },
                            "extendedEdges": {
                                "left": 34,
                                "top": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 834,
                                "y": 181,
                                "width": 64,
                                "height": 64
                            },
                            "extendedEdges": {
                                "right": 34,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 748,
                                "y": 153,
                                "width": 64,
                                "height": 64
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 814,
                                "y": 98,
                                "width": 64,
                                "height": 64
                            },
                            "extendedEdges": {
                                "right": 52,
                                "top": 0,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 17,
                                "y": 16,
                                "width": 114,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 800,
                                "y": 16,
                                "width": 114,
                                "height": 47
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 424,
                                "y": 383,
                                "width": 83,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 424,
                                "y": 17,
                                "width": 83,
                                "height": 29
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 809,
                                "y": 282,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 0,
                                "right": 0,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 809,
                                "y": 367,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "right": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 766,
                                "y": 324,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 851,
                                "y": 324,
                                "width": 45,
                                "height": 45
                            },
                            "extendedEdges": {
                                "top": 0,
                                "bottom": 0,
                                "left": 0,
                                "right": 34
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                                "x": 23,
                                "y": 558,
                                "width": 192,
                                "height": 192
                            },
                            "extendedEdges": {
                                "top": 32,
                                "bottom": 32,
                                "left": 32,
                                "right": 32
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
                                "x": 24,
                                "y": 796,
                                "width": 185,
                                "height": 185
                            },
                            "extendedEdges": {
                                "top": 12,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 917,
                                "y": 671,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "top": 12,
                                "left": 12,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 801,
                                "y": 634,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "top": 12,
                                "right": 12,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 890,
                                "y": 561,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "bottom": 12,
                                "left": 12,
                                "top": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 23,
                                "y": 453,
                                "width": 153,
                                "height": 61
                            },
                            "extendedEdges": {
                                "bottom": 12,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 848,
                                "y": 453,
                                "width": 153,
                                "height": 61
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 455,
                                "y": 943,
                                "width": 112,
                                "height": 39
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 455,
                                "y": 453,
                                "width": 112,
                                "height": 39
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 884,
                                "y": 808,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 12,
                                "right": 12,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 884,
                                "y": 922,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 12,
                                "right": 12,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 826,
                                "y": 865,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 12,
                                "bottom": 12,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 940,
                                "y": 865,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 12,
                                "bottom": 12,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                                "x": 24,
                                "y": 558,
                                "width": 200,
                                "height": 200
                            },
                            "extendedEdges": {
                                "top": 33,
                                "bottom": 33,
                                "left": 33,
                                "right": 33
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
                                "x": 25,
                                "y": 805,
                                "width": 193,
                                "height": 193
                            },
                            "extendedEdges": {
                                "top": 13,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 1255,
                                "y": 676,
                                "width": 89,
                                "height": 89
                            },
                            "extendedEdges": {
                                "top": 13,
                                "left": 13,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 1133,
                                "y": 637,
                                "width": 89,
                                "height": 89
                            },
                            "extendedEdges": {
                                "top": 13,
                                "right": 13,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 1227,
                                "y": 561,
                                "width": 89,
                                "height": 89
                            },
                            "extendedEdges": {
                                "bottom": 13,
                                "left": 13,
                                "top": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 24,
                                "y": 448,
                                "width": 160,
                                "height": 64
                            },
                            "extendedEdges": {
                                "bottom": 13,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 1183,
                                "y": 448,
                                "width": 160,
                                "height": 64
                            },
                            "extendedEdges": {
                                "bottom": 13,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 626,
                                "y": 961,
                                "width": 113,
                                "height": 38
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 625,
                                "y": 24,
                                "width": 117,
                                "height": 41
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 1220,
                                "y": 819,
                                "width": 62,
                                "height": 62
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 13,
                                "right": 13,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 1220,
                                "y": 937,
                                "width": 62,
                                "height": 62
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 13,
                                "right": 13,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 1160,
                                "y": 877,
                                "width": 62,
                                "height": 62
                            },
                            "extendedEdges": {
                                "top": 13,
                                "bottom": 13,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 1279,
                                "y": 877,
                                "width": 62,
                                "height": 62
                            },
                            "extendedEdges": {
                                "top": 13,
                                "bottom": 13,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                                "x": 23,
                                "y": 558,
                                "width": 192,
                                "height": 192
                            },
                            "extendedEdges": {
                                "top": 32,
                                "bottom": 32,
                                "left": 32,
                                "right": 32
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
                                "x": 24,
                                "y": 796,
                                "width": 185,
                                "height": 185
                            },
                            "extendedEdges": {
                                "top": 12,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 917,
                                "y": 671,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "top": 12,
                                "left": 12,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 801,
                                "y": 634,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "top": 12,
                                "right": 12,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 890,
                                "y": 561,
                                "width": 85,
                                "height": 85
                            },
                            "extendedEdges": {
                                "bottom": 12,
                                "left": 12,
                                "top": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 23,
                                "y": 453,
                                "width": 153,
                                "height": 61
                            },
                            "extendedEdges": {
                                "bottom": 12,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 848,
                                "y": 453,
                                "width": 153,
                                "height": 61
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 455,
                                "y": 943,
                                "width": 112,
                                "height": 39
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 455,
                                "y": 453,
                                "width": 112,
                                "height": 39
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 884,
                                "y": 808,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 12,
                                "right": 12,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 884,
                                "y": 922,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 12,
                                "right": 12,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 826,
                                "y": 865,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 12,
                                "bottom": 12,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 940,
                                "y": 865,
                                "width": 60,
                                "height": 60
                            },
                            "extendedEdges": {
                                "top": 12,
                                "bottom": 12,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 1024,
                        "height": 683
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
                                "x": 11,
                                "y": 68,
                                "width": 100,
                                "height": 100
                            },
                            "extendedEdges": {
                                "top": 16,
                                "bottom": 16,
                                "left": 16,
                                "right": 16
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
                                "x": 11,
                                "y": 190,
                                "width": 100,
                                "height": 96
                            },
                            "extendedEdges": {
                                "top": 6,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "a"
                            ],
                            "frame": {
                                "x": 625,
                                "y": 124,
                                "width": 47,
                                "height": 44
                            },
                            "extendedEdges": {
                                "top": 6,
                                "left": 6,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "b"
                            ],
                            "frame": {
                                "x": 565,
                                "y": 105,
                                "width": 47,
                                "height": 44
                            },
                            "extendedEdges": {
                                "top": 6,
                                "right": 6,
                                "left": 0,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "z"
                            ],
                            "frame": {
                                "x": 612,
                                "y": 66,
                                "width": 47,
                                "height": 44
                            },
                            "extendedEdges": {
                                "bottom": 6,
                                "left": 6,
                                "top": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "l"
                            ],
                            "frame": {
                                "x": 11,
                                "y": 12,
                                "width": 80,
                                "height": 32
                            },
                            "extendedEdges": {
                                "bottom": 6,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "r"
                            ],
                            "frame": {
                                "x": 590,
                                "y": 12,
                                "width": 80,
                                "height": 32
                            },
                            "extendedEdges": {
                                "bottom": 6,
                                "top": 0,
                                "left": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "start"
                            ],
                            "frame": {
                                "x": 312,
                                "y": 267,
                                "width": 57,
                                "height": 21
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "menu"
                            ],
                            "frame": {
                                "x": 312,
                                "y": 11,
                                "width": 57,
                                "height": 20
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 0,
                                "bottom": 0,
                                "right": 0
                            }
                        },
                        {
                            "inputs": [
                                "cUp"
                            ],
                            "frame": {
                                "x": 606,
                                "y": 196,
                                "width": 38,
                                "height": 31
                            },
                            "extendedEdges": {
                                "bottom": 0,
                                "left": 6,
                                "right": 6,
                                "top": 0
                            }
                        },
                        {
                            "inputs": [
                                "cDown"
                            ],
                            "frame": {
                                "x": 606,
                                "y": 256,
                                "width": 38,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 0,
                                "left": 6,
                                "right": 6,
                                "bottom": 0
                            }
                        },
                        {
                            "inputs": [
                                "cLeft"
                            ],
                            "frame": {
                                "x": 576,
                                "y": 226,
                                "width": 38,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 6,
                                "bottom": 6,
                                "right": 0,
                                "left": 0
                            }
                        },
                        {
                            "inputs": [
                                "cRight"
                            ],
                            "frame": {
                                "x": 636,
                                "y": 226,
                                "width": 38,
                                "height": 31
                            },
                            "extendedEdges": {
                                "top": 6,
                                "bottom": 6,
                                "left": 0,
                                "right": 0
                            }
                        }
                    ],
                    "mappingSize": {
                        "width": 683,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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

let defaultJson_GBC = {
  "name": "Standard GBC",
  "identifier": "com.delta.gbc.standard",
  "gameTypeIdentifier": "com.rileytestut.delta.game.gbc",
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 7,
                              "y": 502,
                              "width": 170,
                              "height": 170
                          },
                          "extendedEdges": {
                              "top": 19,
                              "bottom": 19,
                              "left": 19,
                              "right": 19
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 311,
                              "y": 510,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "right": 19,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 227,
                              "y": 586,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 223,
                              "y": 702,
                              "width": 42,
                              "height": 20
                          },
                          "extendedEdges": {
                              "bottom": 16,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 146,
                              "y": 702,
                              "width": 42,
                              "height": 20
                          },
                          "extendedEdges": {
                              "bottom": 16,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 9,
                              "y": 702,
                              "width": 42,
                              "height": 20
                          },
                          "extendedEdges": {
                              "left": 9,
                              "bottom": 16,
                              "top": 0,
                              "right": 0
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 8,
                              "y": 254,
                              "width": 144,
                              "height": 144
                          },
                          "extendedEdges": {
                              "left": 16,
                              "top": 16,
                              "right": 16,
                              "bottom": 16
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 647,
                              "y": 267,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "right": 17,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 574,
                              "y": 325,
                              "width": 70,
                              "height": 70
                          },
                          "extendedEdges": {
                              "bottom": 17,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 392,
                              "y": 368,
                              "width": 54,
                              "height": 25
                          },
                          "extendedEdges": {
                              "bottom": 19,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 286,
                              "y": 368,
                              "width": 54,
                              "height": 25
                          },
                          "extendedEdges": {
                              "bottom": 19,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 14,
                              "y": 19,
                              "width": 54,
                              "height": 25
                          },
                          "extendedEdges": {
                              "left": 14,
                              "top": 19,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "gameScreenFrame": {
                      "x": 183,
                      "y": 0,
                      "width": 300,
                      "height": 270
                  },
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
                  },
                  "translucent": false
              }
          },
          "edgeToEdge": {
              "portrait": {
                  "assets": {
                      "resizable": "iphone_edgetoedge_portrait.pdf"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 8,
                              "y": 648,
                              "width": 177,
                              "height": 177
                          },
                          "extendedEdges": {
                              "top": 20,
                              "bottom": 20,
                              "left": 20,
                              "right": 20
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 323,
                              "y": 656,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "right": 20,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 236,
                              "y": 735,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 232,
                              "y": 856,
                              "width": 44,
                              "height": 21
                          },
                          "extendedEdges": {
                              "bottom": 17,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 151,
                              "y": 856,
                              "width": 44,
                              "height": 21
                          },
                          "extendedEdges": {
                              "bottom": 17,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 9,
                              "y": 856,
                              "width": 44,
                              "height": 21
                          },
                          "extendedEdges": {
                              "left": 9,
                              "bottom": 17,
                              "top": 0,
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
                      "resizable": "iphone_edgetoedge_landscape.pdf"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 68,
                              "y": 265,
                              "width": 150,
                              "height": 150
                          },
                          "extendedEdges": {
                              "left": 17,
                              "top": 17,
                              "right": 17,
                              "bottom": 17
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 769,
                              "y": 277,
                              "width": 73,
                              "height": 73
                          },
                          "extendedEdges": {
                              "right": 18,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 693,
                              "y": 338,
                              "width": 73,
                              "height": 73
                          },
                          "extendedEdges": {
                              "bottom": 18,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 491,
                              "y": 383,
                              "width": 56,
                              "height": 26
                          },
                          "extendedEdges": {
                              "bottom": 20,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 381,
                              "y": 383,
                              "width": 56,
                              "height": 26
                          },
                          "extendedEdges": {
                              "bottom": 20,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 68,
                              "y": 20,
                              "width": 56,
                              "height": 26
                          },
                          "extendedEdges": {
                              "left": 14,
                              "top": 20,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "gameScreenFrame": {
                      "x": 255,
                      "y": 0,
                      "width": 300,
                      "height": 270
                  },
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
                  },
                  "translucent": false
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 23,
                              "y": 734,
                              "width": 248,
                              "height": 248
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 887,
                              "y": 780,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "left": 0,
                              "bottom": 12,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 771,
                              "y": 869,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 12,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 527,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "left": 15,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 384,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "right": 15,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 459,
                              "y": 453,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 24,
                              "y": 741,
                              "width": 258,
                              "height": 258
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 1223,
                              "y": 789,
                              "width": 118,
                              "height": 118
                          },
                          "extendedEdges": {
                              "bottom": 13,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 1103,
                              "y": 881,
                              "width": 118,
                              "height": 118
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 13,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 699,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "left": 16,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 549,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "right": 16,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 628,
                              "y": 24,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 23,
                              "y": 734,
                              "width": 248,
                              "height": 248
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 887,
                              "y": 780,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "left": 0,
                              "bottom": 12,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 771,
                              "y": 869,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 12,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 527,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "left": 15,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 384,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "right": 15,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 459,
                              "y": 453,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 1024,
                      "height": 683
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 12,
                              "y": 114,
                              "width": 129,
                              "height": 129
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 612,
                              "y": 138,
                              "width": 58,
                              "height": 59
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 552,
                              "y": 184,
                              "width": 59,
                              "height": 59
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 350,
                              "y": 224,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "left": 8,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 275,
                              "y": 224,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "right": 8,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 313,
                              "y": 12,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 683,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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

let defaultJson_GBA = {
  "name": "Standard GBA",
  "identifier": "com.delta.gba.standard",
  "gameTypeIdentifier": "com.rileytestut.delta.game.gba",
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 7,
                              "y": 502,
                              "width": 170,
                              "height": 170
                          },
                          "extendedEdges": {
                              "top": 19,
                              "bottom": 19,
                              "left": 19,
                              "right": 19
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 311,
                              "y": 510,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "right": 19,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 227,
                              "y": 586,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 430,
                              "width": 125,
                              "height": 37
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 289,
                              "y": 430,
                              "width": 125,
                              "height": 37
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 227,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "bottom": 16,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 160,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "bottom": 16,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 10,
                              "y": 695,
                              "width": 27,
                              "height": 27
                          },
                          "extendedEdges": {
                              "left": 10,
                              "bottom": 16,
                              "top": 0,
                              "right": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 414,
                      "height": 736
                  },
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 16,
                              "y": 219,
                              "width": 177,
                              "height": 177
                          },
                          "extendedEdges": {
                              "left": 22,
                              "top": 22,
                              "right": 22,
                              "bottom": 22
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 636,
                              "y": 251,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 0,
                              "left": 0,
                              "right": 16
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 553,
                              "y": 314,
                              "width": 82,
                              "height": 82
                          },
                          "extendedEdges": {
                              "top": 0,
                              "bottom": 16,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 16,
                              "y": 16,
                              "width": 110,
                              "height": 44
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 609,
                              "y": 16,
                              "width": 110,
                              "height": 44
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 379,
                              "y": 369,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "left": 11,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 276,
                              "y": 369,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "right": 11,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 329,
                              "y": 16,
                              "width": 80,
                              "height": 28
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 8,
                              "y": 648,
                              "width": 177,
                              "height": 177
                          },
                          "extendedEdges": {
                              "top": 20,
                              "bottom": 20,
                              "left": 20,
                              "right": 20
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 323,
                              "y": 656,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "right": 20,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 236,
                              "y": 735,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 0,
                              "y": 573,
                              "width": 130,
                              "height": 38
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 301,
                              "y": 573,
                              "width": 130,
                              "height": 38
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 236,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "bottom": 17,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 166,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "bottom": 17,
                              "top": 0,
                              "left": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 10,
                              "y": 848,
                              "width": 28,
                              "height": 28
                          },
                          "extendedEdges": {
                              "left": 10,
                              "bottom": 17,
                              "top": 0,
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
                      "resizable": "iphone_edgetoedge_landscape.pdf"
                  },
                  "items": [
                      {
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 34,
                              "y": 228,
                              "width": 184,
                              "height": 184
                          },
                          "extendedEdges": {
                              "left": 34,
                              "top": 22,
                              "right": 22,
                              "bottom": 22
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 811,
                              "y": 261,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "right": 34,
                              "top": 0,
                              "left": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 725,
                              "y": 327,
                              "width": 86,
                              "height": 86
                          },
                          "extendedEdges": {
                              "right": 0,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 17,
                              "y": 17,
                              "width": 114,
                              "height": 45
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 800,
                              "y": 17,
                              "width": 114,
                              "height": 45
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 477,
                              "y": 384,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "left": 11,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 370,
                              "y": 384,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "right": 11,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 425,
                              "y": 17,
                              "width": 83,
                              "height": 29
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 23,
                              "y": 734,
                              "width": 248,
                              "height": 248
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 887,
                              "y": 780,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 771,
                              "y": 869,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 23,
                              "y": 453,
                              "width": 153,
                              "height": 61
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 848,
                              "y": 453,
                              "width": 153,
                              "height": 61
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 527,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "left": 15,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 384,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "right": 15,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 459,
                              "y": 453,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 24,
                              "y": 741,
                              "width": 258,
                              "height": 258
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 1223,
                              "y": 789,
                              "width": 118,
                              "height": 118
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 1103,
                              "y": 881,
                              "width": 118,
                              "height": 118
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 24,
                              "y": 593,
                              "width": 160,
                              "height": 64
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 1183,
                              "y": 593,
                              "width": 160,
                              "height": 64
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 699,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "left": 16,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 549,
                              "y": 959,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "right": 16,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 628,
                              "y": 24,
                              "width": 117,
                              "height": 41
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 23,
                              "y": 734,
                              "width": 248,
                              "height": 248
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 887,
                              "y": 780,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 771,
                              "y": 869,
                              "width": 113,
                              "height": 113
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 23,
                              "y": 453,
                              "width": 153,
                              "height": 61
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 848,
                              "y": 453,
                              "width": 153,
                              "height": 61
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 527,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "left": 15,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 384,
                              "y": 944,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "right": 15,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 459,
                              "y": 453,
                              "width": 112,
                              "height": 39
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 1024,
                      "height": 683
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
                          "inputs": {
                              "up": "up",
                              "down": "down",
                              "left": "left",
                              "right": "right"
                          },
                          "frame": {
                              "x": 12,
                              "y": 114,
                              "width": 129,
                              "height": 129
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "a"
                          ],
                          "frame": {
                              "x": 612,
                              "y": 138,
                              "width": 59,
                              "height": 59
                          },
                          "extendedEdges": {
                              "bottom": 0,
                              "left": 0,
                              "top": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "b"
                          ],
                          "frame": {
                              "x": 552,
                              "y": 184,
                              "width": 59,
                              "height": 59
                          },
                          "extendedEdges": {
                              "top": 0,
                              "right": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "l"
                          ],
                          "frame": {
                              "x": 12,
                              "y": 12,
                              "width": 80,
                              "height": 32
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "r"
                          ],
                          "frame": {
                              "x": 591,
                              "y": 12,
                              "width": 80,
                              "height": 32
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "start"
                          ],
                          "frame": {
                              "x": 350,
                              "y": 224,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "left": 8,
                              "top": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      },
                      {
                          "inputs": [
                              "select"
                          ],
                          "frame": {
                              "x": 275,
                              "y": 224,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "right": 8,
                              "top": 0,
                              "left": 0,
                              "bottom": 0
                          }
                      },
                      {
                          "inputs": [
                              "menu"
                          ],
                          "frame": {
                              "x": 313,
                              "y": 12,
                              "width": 57,
                              "height": 20
                          },
                          "extendedEdges": {
                              "top": 0,
                              "left": 0,
                              "bottom": 0,
                              "right": 0
                          }
                      }
                  ],
                  "mappingSize": {
                      "width": 683,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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

let defaultJson_DS = {
    "name" : "Standard DS",
    "identifier" : "com.delta.ds.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.ds",
    "debug" : false,
    "representations" : {
      "iphone" : {
        "standard" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_portrait.pdf"
            },
            "items": [
              {
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 15,
                  "y": 500,
                  "width": 128,
                  "height": 128
                },
                "extendedEdges": {
                  "top": 15,
                  "bottom": 15,
                  "left": 17,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 313,
                  "y": 540,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 16
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 267,
                  "y": 586,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
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
                  "y": 366,
                  "width": 32,
                  "height": 112
                },
                "extendedEdges": {
                  "right": 0,
                  "left": 18
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 325,
                  "y": 366,
                  "width": 32,
                  "height": 112
                },
                "extendedEdges": {
                  "left": 0,
                  "right": 18
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 154,
                  "y": 600,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "top": 15,
                  "bottom": 0,
                  "left": 0,
                  "right": 45
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 154,
                  "y": 631,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 15,
                  "left": 0,
                  "right": 45
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 154,
                  "y": 498,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "left": 0,
                  "right": 45
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 221,
                  "y": 540,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 267,
                  "y": 494,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 50,
                  "y": 252,
                  "width": 275,
                  "height": 206
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "screens": [
              {
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 50,
                  "y": 18,
                  "width": 275,
                  "height": 206
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 50,
                  "y": 252,
                  "width": 275,
                  "height": 206
                }
              }
            ],
            "mappingSize" : {
              "width" : 375,
              "height" : 667
            },
            "extendedEdges" : {
              "top" : 7,
              "bottom" : 7,
              "left" : 7,
              "right" : 7
            }
          },
          "landscape" : {
            "assets" : {
              "resizable" : "iphone_landscape.pdf"
            },
            "items": [
              {
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 15,
                  "y": 235,
                  "width": 123,
                  "height": 123
                },
                "extendedEdges": {
                  "top": 15,
                  "bottom": 20,
                  "left": 20,
                  "right": 20
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 606,
                  "y": 273,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 562,
                  "y": 318,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 173,
                  "y": 219,
                  "width": 135,
                  "height": 33
                },
                "extendedEdges": {
                  "top": 0
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 359,
                  "y": 219,
                  "width": 135,
                  "height": 33
                },
                "extendedEdges": {
                  "top": 0
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 304,
                  "y": 287,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "right": 50
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 410,
                  "y": 288,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "right": 50
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 195,
                  "y": 288,
                  "width": 18,
                  "height": 18
                },
                "extendedEdges": {
                  "right": 50
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 562,
                  "y": 229,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 8,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 517,
                  "y": 273,
                  "width": 47,
                  "height": 47
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "right": 0
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 361,
                  "y": 24,
                  "width": 259,
                  "height": 194
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 667,
              "height" : 375
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
                  "x": 47,
                  "y": 24,
                  "width": 259,
                  "height": 194
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 361,
                  "y": 24,
                  "width": 259,
                  "height": 194
                }
              }
            ],
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            }
          }
        },
        "edgeToEdge" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_edgetoedge_portrait.pdf"
            },
            "items" : [
              {
                "inputs" : {
                  "up" : "up",
                  "down" : "down",
                  "left" : "left",
                  "right" : "right"
                },
                "frame" : {
                  "x" : 18,
                  "y" : 650,
                  "width" : 165,
                  "height" : 165
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 18,
                  "right" : 10
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 336,
                  "y" : 703,
                  "width" : 60,
                  "height" : 60
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 18
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 280,
                  "y" : 759,
                  "width" : 60,
                  "height" : 60
                },
                "extendedEdges" : {
                  "top" : 0,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 29,
                  "y" : 590,
                  "width" : 136,
                  "height" : 35
                }
              ,
                "extendedEdges": {
                  "top": 0,
                  "left": 29
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 249,
                  "y" : 590,
                  "width" : 136,
                  "height" : 35
                }
              ,
                "extendedEdges": {
                  "top": 0,
                  "right": 29
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 174,
                  "y" : 844,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges" : {
                  "bottom": 32,
                  "left": 15,
                  "right" : 75
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 369,
                  "y" : 844,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges": {
                  "bottom": 32,
                  "left": 75,
                  "right": 25
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 25,
                  "y" : 844,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges": {
                  "bottom": 32,
                  "left": 25,
                  "right": 75
                }
              },
              {
                "inputs" : [
                  "y"
                ],
                "frame" : {
                  "x" : 224,
                  "y" : 703,
                  "width" : 60,
                  "height" : 60
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 280,
                  "y" : 647,
                  "width" : 60,
                  "height" : 60
                },
                "extendedEdges" : {
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 30,
                  "y": 324,
                  "width": 354,
                  "height": 265
                }
              ,
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "screens": [
              {
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 30,
                  "y": 43,
                  "width": 354,
                  "height": 265
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 30,
                  "y": 324,
                  "width": 354,
                  "height": 265
                }
              }
            ],
            "mappingSize" : {
              "width" : 414,
              "height" : 896
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
            "extendedEdges" : {
              "top" : 7,
              "bottom" : 7,
              "left" : 7,
              "right" : 7
            }
          },
          "landscape" : {
            "assets" : {
              "resizable" : "iphone_edgetoedge_landscape.pdf"
            },
            "items" : [
              {
                "inputs" : {
                  "up" : "up",
                  "down" : "down",
                  "left" : "left",
                  "right" : "right"
                },
                "frame" : {
                  "x" : 69,
                  "y" : 260,
                  "width" : 136,
                  "height" : 136
                },
                "extendedEdges" : {
                  "left" : 30,
                  "top" : 20,
                  "right" : 20,
                  "bottom" : 20
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 777,
                  "y" : 302,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 30
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 728,
                  "y" : 351,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "top" : 0,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 69,
                  "y" : 65,
                  "width" : 40,
                  "height" : 148
                }
              ,
                "extendedEdges": {
                  "left": 50,
                  "right": 0
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 788,
                  "y" : 65,
                  "width" : 40,
                  "height" : 148
                }
              ,
                "extendedEdges": {
                  "left": 0,
                  "right": 50
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 415,
                  "y" : 315,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges": {
                  "right": 50
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 533,
                  "y" : 315,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges" : {
                  "right" : 50
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 295,
                  "y" : 315,
                  "width" : 20,
                  "height" : 20
                },
                "extendedEdges": {
                  "right": 50
                }
              },
              {
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 728,
                  "y" : 253,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "y"
                ],
                "frame" : {
                  "x" : 679,
                  "y" : 302,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "right" : 0
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 500,
                  "y": 27,
                  "width": 286,
                  "height": 214
                }
              ,
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 896,
              "height" : 414
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
                  "x": 110,
                  "y": 27,
                  "width": 286,
                  "height": 214
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 500,
                  "y": 27,
                  "width": 286,
                  "height": 214
                }
              }
            ],
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            }
          }
        }
      },
      "ipad": {
        "standard": {
          "portrait": {
            "assets": {
              "large": "ipad_portrait.png"
            },
            "items": [
              {
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 30,
                  "y": 649,
                  "width": 132,
                  "height": 132
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 30,
                  "left": 30,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 695,
                  "y": 697,
                  "width": 48,
                  "height": 48
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "left": 0,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 648,
                  "y": 744,
                  "width": 48,
                  "height": 48
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 648,
                  "y": 650,
                  "width": 48,
                  "height": 48
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 601,
                  "y": 697,
                  "width": 48,
                  "height": 48
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 0,
                  "y": 485,
                  "width": 148,
                  "height": 53
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 620,
                  "y": 485,
                  "width": 148,
                  "height": 53
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 599,
                  "y": 874,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 73
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 599,
                  "y": 913,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "top": 10,
                  "right": 73
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 599,
                  "y": 835,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "bottom": 10,
                  "right": 73
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 210,
                  "y": 649,
                  "width": 348,
                  "height": 259
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "screens": [
              {
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 178,
                  "y": 91,
                  "width": 412,
                  "height": 309
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 210,
                  "y": 649,
                  "width": 348,
                  "height": 259
                }
              }
            ],
            "mappingSize": {
              "width": 768,
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
                                "x": 317,
                                "y": 0,
                                "width": 62,
                                "height": 62
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
              "large": "ipad_landscape.png"
            },
            "items": [
              {
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 81,
                  "y": 459,
                  "width": 135,
                  "height": 135
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 30,
                  "left": 81,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 900,
                  "y": 502,
                  "width": 50,
                  "height": 50
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "left": 0,
                  "right": 75
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 852,
                  "y": 550,
                  "width": 50,
                  "height": 50
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 852,
                  "y": 453,
                  "width": 50,
                  "height": 50
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 803,
                  "y": 502,
                  "width": 50,
                  "height": 50
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 0,
                  "y": 358,
                  "width": 148,
                  "height": 52
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 876,
                  "y": 358,
                  "width": 148,
                  "height": 52
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 754,
                  "y": 674,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 70
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 754,
                  "y": 713,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "top": 10,
                  "right": 70
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 754,
                  "y": 634,
                  "width": 19,
                  "height": 19
                },
                "extendedEdges": {
                  "bottom": 10,
                  "right": 70
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 319,
                  "y": 432,
                  "width": 387,
                  "height": 288
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              }
            ],
            "screens": [
              {
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 316,
                  "y": 45,
                  "width": 393,
                  "height": 294
                }
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 319,
                  "y": 432,
                  "width": 387,
                  "height": 288
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
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
              "top": 20,
              "bottom": 20,
              "left": 20,
              "right": 20
            }
          }
        }
      ,
        "splitView": {
          "portrait": {
            "assets": {
              "large": "ipad_splitview_portrait.png"
            },
            "items": [
              {
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 84,
                  "y": 159,
                  "width": 222,
                  "height": 218
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 95,
                  "left": 84,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 857,
                  "y": 227,
                  "width": 85,
                  "height": 83
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "left": 0,
                  "right": 82
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 780,
                  "y": 305,
                  "width": 85,
                  "height": 83
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 84,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 780,
                  "y": 148,
                  "width": 85,
                  "height": 83
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 701,
                  "y": 227,
                  "width": 85,
                  "height": 83
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
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
                  "width": 199,
                  "height": 70
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 825,
                  "y": 0,
                  "width": 199,
                  "height": 70
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 456,
                  "y": 175,
                  "width": 32,
                  "height": 31
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 83
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 456,
                  "y": 253,
                  "width": 32,
                  "height": 31
                },
                "extendedEdges": {
                  "top": 10,
                  "right": 83
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 456,
                  "y": 329,
                  "width": 32,
                  "height": 31
                },
                "extendedEdges": {
                  "bottom": 10,
                  "right": 83
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 0,
                  "y": 0.5,
                  "width": 1.0,
                  "height": 0.5
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                },
                "placement": "app"
              }
            ],
            "screens": [
              {
                "placement": "app",
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 1.0,
                  "height": 0.5
                }
              },
              {
                "placement": "app",
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 0,
                  "y": 0.5,
                  "width": 1.0,
                  "height": 0.5
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 472
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
                "inputs": {
                  "up": "up",
                  "down": "down",
                  "left": "left",
                  "right": "right"
                },
                "frame": {
                  "x": 17,
                  "y": 171,
                  "width": 193,
                  "height": 194
                },
                "extendedEdges": {
                  "top": 30,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 916,
                  "y": 218,
                  "width": 69,
                  "height": 64
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 42
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 857,
                  "y": 278,
                  "width": 69,
                  "height": 64
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 42,
                  "left": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 856,
                  "y": 159,
                  "width": 69,
                  "height": 64
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 797,
                  "y": 219,
                  "width": 69,
                  "height": 64
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 17,
                  "y": 17,
                  "width": 120,
                  "height": 48
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 886,
                  "y": 17,
                  "width": 120,
                  "height": 48
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 524,
                  "y": 335,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "top": 10,
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 412,
                  "y": 335,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "top": 10,
                  "right": 12
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
                  "bottom": 10
                }
              },
              {
                "inputs": {
                  "x": "touchScreenX",
                  "y": "touchScreenY"
                },
                "frame": {
                  "x": 338,
                  "y": 59,
                  "width": 350,
                  "height": 266
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                },
                "placement": "controller"
              }
            ],
            "screens": [
              {
                "inputFrame": {
                  "x": 0,
                  "y": 0,
                  "width": 256,
                  "height": 192
                },
                "placement": "app"
              },
              {
                "inputFrame": {
                  "x": 0,
                  "y": 192,
                  "width": 256,
                  "height": 192
                },
                "outputFrame": {
                  "x": 338,
                  "y": 59,
                  "width": 350,
                  "height": 266
                },
                "placement": "controller"
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 384
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
              "top": 20,
              "bottom": 20,
              "left": 20,
              "right": 20
            },
            "translucent": false
          }
        }
      },
      "tv": {
        "items": [
          {
            "inputs": {
              "x": "touchScreenX",
              "y": "touchScreenY"
            },
            "frame": {
              "x": 0,
              "y": 0.5,
              "width": 1.0,
              "height": 0.5
            },
            "placement": "app"
          }
        ],
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
              "width": 1.0,
              "height": 0.5
            },
            "placement": "app"
          },
          {
            "inputFrame": {
              "x": 0,
              "y": 192,
              "width": 256,
              "height": 192
            },
            "outputFrame": {
              "x": 0,
              "y": 0.5,
              "width": 1.0,
              "height": 0.5
            },
            "placement": "app"
          }
        ]
      }
    }
  };

let consoleTypes = ["", "nes", "snes", "n64", "gbc", "gba", "ds"];


let devices = [
    "iphone",
    "ipad",
    "tv"
];



// let layoutTypes = [
//         "",
//         "iphone standard",
//         "iphone edgeToEdge",
//         "ipad standard",
//         "ipad splitView"
//     ];

let orientationTypes = [
    "portrait",
    "landscape"
];

let name = "";

let consoleSelection = "";

let identifier = "";

let debug;

let assets = {
    "resizable" : ""
}

let currentItem = "";

// Find the div with the "selected" class and store it in currentSelectedItem
let currentSelectedItem;

// Create alignment buttons
const alignmentTools = document.getElementById('alignmentTools');

// Left align button
const leftAlignButton = document.createElement('button');
leftAlignButton.innerHTML = '<i class="fa-solid fa-align-left"></i>';
leftAlignButton.classList.add('button', 'button--primary');
leftAlignButton.addEventListener('click', () => alignItem('left'));

// Center align button
const centerAlignButton = document.createElement('button');
centerAlignButton.innerHTML = '<i class="fa-solid fa-align-center"></i>';
centerAlignButton.classList.add('button', 'button--primary');
centerAlignButton.addEventListener('click', () => alignItem('center'));

// Right align button
const rightAlignButton = document.createElement('button');
rightAlignButton.innerHTML = '<i class="fa-solid fa-align-right"></i>';
rightAlignButton.classList.add('button', 'button--primary');
rightAlignButton.addEventListener('click', () => alignItem('right'));

// Add buttons to alignmentTools
alignmentTools.appendChild(leftAlignButton);
alignmentTools.appendChild(centerAlignButton);
alignmentTools.appendChild(rightAlignButton);

// Function to align the selected item
function alignItem(alignment) {
    // Change #alignmentTools to display: flex
   

    let currentSelectedItem = document.querySelector('.selected');
    if (!currentSelectedItem) return;

    
    const layoutObject = document.getElementById('layout-object');
    const layoutWidth = layoutObject.offsetWidth;
    const itemWidth = currentSelectedItem.offsetWidth;

    switch (alignment) {
        case 'left':
            currentSelectedItem.style.left = '0px';
            break;
        case 'center':
            currentSelectedItem.style.left = `${(layoutWidth - itemWidth) / 2}px`;
            break;
        case 'right':
            currentSelectedItem.style.left = `${layoutWidth - itemWidth}px`;
            break;
            
    }

    let item = getCurrentElement(currentSelectedItem.id);

    const newLeft = parseInt(currentSelectedItem.style.left, 10);
    const newTop = parseInt(currentSelectedItem.style.top, 10);
    if (currentSelectedItem.classList.contains("screen-item")) {
        updateScreenPosition(currentSelectedItem.id, newLeft, newTop);
    } else {
        const extendedLeft = item && item.extendedEdges ? item.extendedEdges.left : 0;
        const extendedTop = item && item.extendedEdges ? item.extendedEdges.top : 0;
        updateItemPosition(currentSelectedItem.id, newLeft + extendedLeft, newTop + extendedTop);
    }
               
    // Update the JSON representation
    updateItemPosition(currentSelectedItem.id, newLeft, newTop);

    // Update the form-x input value
    const formXInput = document.querySelector('#form-x input');
    if (formXInput) {
        formXInput.value = newLeft;
    }

    updateJson();

}

// // Function to update item position in JSON
// function updateItemPosition(item) {
//     const state = getCurrentState();
//     const items = defaultJsonOutput.representations[state.device][state.layout][state.orientation].items;
//     const itemIndex = Array.from(item.parentNode.children).indexOf(item);

//     if (items[itemIndex]) {
//         items[itemIndex].frame.x = parseInt(item.style.left);
//         items[itemIndex].frame.y = parseInt(item.style.top);
//     }

//     updateJson();
// }



const buttonConfigs = {
    gbc: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings'],
    gba: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings'],
    nds: ['menu', 'd-pad', 'thumbstick', 'xy', 'a', 'b', 'x', 'y', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings'],
    nes: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings'],
    snes: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'x', 'y', 'start', 'select', 'menu', 'l', 'r', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings'],
    n64: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'l', 'r', 'cUp', 'cDown', 'cLeft', 'cRight', 'z', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'quickSettings']
};

// Add this to your existing global variables
let isItemLocked = false;

//layout selection in metadata

let layoutSelection = "";

let selectLayout = document.getElementById("layoutSelect");


// Ensure these variables are declared at the top before they are used
let consoleSelect = document.getElementById('consoleSelect');

// Object to store uploaded images
let layoutImages = {};

//functions

function getCurrentState() {
   // Split the selected layout into an array of individual words
   let parts = layoutSelection.split(" ");

   // Assign the first word to the 'device' variable
   let device = parts[0].toString();

   // Assign the second word to the 'layout' variable
   let layout = parts[1].toString();

   // Get the checked radio button with name 'orientation'
   let orientation = document.querySelector('input[name="orientation"]:checked').id;

    return { device, layout, orientation };
}

// console selection in metadata
let selectConsole = document.getElementById('consoleSelect');

// Loop through the consoleTypes array and create an option for each item
consoleTypes.forEach(function(consoleType) {
    let option = document.createElement('option'); // Create a new <option> element
    option.value = consoleType;                   // Set the value attribute
    option.text = consoleType;      // Set the text content (e.g., display as uppercase)
    selectConsole.appendChild(option);            // Add the option to the select element
});

 // Populate the layout dropdown
 const layoutTypes = [];
 for (const device in defaultJsonOutput.representations) {
     for (const layout in defaultJsonOutput.representations[device]) {
         layoutTypes.push(`${device} ${layout}`);
     }
 }
 
 layoutTypes.forEach(function(layoutType) {
    let option = document.createElement('option');
    option.value = layoutType;
    option.text = layoutType;
    selectLayout.appendChild(option);
});

// Add event listener to capture the selected value from consoleTypes
selectConsole.addEventListener('change', function() {
    consoleSelection = selectConsole.value; // Store the selected value
    document.getElementById('selectedConsole').innerText = consoleSelection;
    console.log("Selected console:", consoleSelection); // Optional: Log the selection

    // Match the selected console with the corresponding default JSON
    switch (consoleSelection) {
        case "nes":
            defaultJsonOutput = defaultJson_NES;
            break;
        case "snes":
            defaultJsonOutput = defaultJson_SNES;
            break;
        case "n64":
            defaultJsonOutput = defaultJson_N64;
            break;
        case "gbc":
            defaultJsonOutput = defaultJson_GBC;
            break;
        case "gba":
            defaultJsonOutput = defaultJson_GBA;
            break;
        case "ds":
            defaultJsonOutput = defaultJson_DS;
            break;
        default:
            console.warn("No matching default JSON found for the selected console.");
            // You might want to set a default JSON or handle this case differently
            break;
    }

    automaticSelectLayout();
    updateJson(); // Update the displayed JSON after changing the defaultJsonOutput
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
        document.getElementById("layout-container").style.display = "flex";
        addButtons(); // Only run addButtons if both selections are made
        addScreenButton();
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
    document.getElementById('selectedOrientation').innerText = getSelectedOrientation();
    console.log("Selected layout:", layoutSelection); // Optional: Log the selection
});

// Event listener for layout selection
selectLayout.addEventListener('change', function() {
    // layoutSelection = layoutSelection.value;
    checkSelections();
    checkSelectionsAndAddButtons();
});

// Example usage
let orientation = getSelectedOrientation();
console.log(`Selected Orientation: ${orientation}`); // Outputs "portrait" or "landscape"

// Function to check if layout selection has been made and load layout based on selection
function checkSelections() {
    if (selectLayout) {
        //remove layout
        document.querySelectorAll('.layout-item').forEach(element => element.remove());
        document.getElementById("focus").style.display = "flex"
        document.getElementById('selectedOrientation').innerText = getSelectedOrientation();
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
        document.getElementById('selectedOrientation').innerText = getSelectedOrientation();
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
    let width = defaultJsonOutput["representations"][device][layout][orientation]["mappingSize"]?.width || 1920; // Default TV width
    let height = defaultJsonOutput["representations"][device][layout][orientation]["mappingSize"]?.height || 1080; // Default TV height

    document.getElementById("screen-size-info").innerHTML = "Size: " + width + " x " + height;

    // Layout object
    let layoutObject = document.getElementById("layout-object");

    // Set the size of the layout object
    layoutObject.style.width = width + "px";
    layoutObject.style.height = height + "px";

    // Clear any existing layout items
    layoutObject.innerHTML = '';

    // Add DS screens if the console is DS
    if (device === "ds") {
        createDSScreens(layoutObject, width, height);
    } else {
        // Get the item array from the JSON
        let itemArray = defaultJsonOutput["representations"][device][layout][orientation]["items"];

        // Add each item to the layout
        itemArray.forEach(item => {
            const div = document.createElement('div');
            const innerDiv = document.createElement('div');
            div.className = 'layout-item';
            innerDiv.className = 'layout-item-inner';
            
            // Create a 10px by 10px crosshair in the center of the layout-item
            const crosshair = document.createElement('div');
            crosshair.style.position = 'absolute';
            crosshair.style.width = '10px';
            crosshair.style.height = '10px';
            crosshair.style.top = '50%';
            crosshair.style.left = '50%';
            crosshair.style.transform = 'translate(-50%, -50%)';
            crosshair.style.zIndex = '10';
            crosshair.style.backgroundImage = 'linear-gradient(to bottom, transparent 45%, red 45%, red 55%, transparent 55%), linear-gradient(to right, transparent 45%, red 45%, red 55%, transparent 55%)';
            innerDiv.appendChild(crosshair);

            // Handle relative positioning for TV
            if (device === "tv") {
                div.style.width = (item.frame.width * width) + 'px';
                div.style.height = (item.frame.height * height) + 'px';
                div.style.top = (item.frame.y * height) + 'px';
                div.style.left = (item.frame.x * width) + 'px';
            } else {
                div.style.width = item.frame.width + 'px';
                div.style.height = item.frame.height + 'px';
                div.style.top = (item.frame.y - (item.extendedEdges?.top || 0)) + 'px';
                div.style.left = (item.frame.x - (item.extendedEdges?.left || 0)) + 'px';
            }

            if (item.extendedEdges) {
                div.style.paddingTop = item.extendedEdges.top + 'px';
                div.style.paddingBottom = item.extendedEdges.bottom + 'px';
                div.style.paddingLeft = item.extendedEdges.left + 'px';
                div.style.paddingRight = item.extendedEdges.right + 'px';
            }
            
            // Check for special cases
            if (item.thumbstick) {
                div.innerHTML = "<p class='item-text'>Thumbstick</p>";
                div.id = "thumbstick";
            } else if (item.inputs && item.inputs.up === "up" && item.inputs.down === "down" && item.inputs.left === "left" && item.inputs.right === "right") {
                div.innerHTML = "<p class='item-text'>d-pad</p>";
                div.id = "d-pad";
            } else if (item.inputs && item.inputs.x === "touchScreenX" && item.inputs.y === "touchScreenY") {
                div.innerHTML = "<p class='item-text'>Touch Screen</p>";
                div.id = "touch-screen";
            } else if (Array.isArray(item.inputs)) {
                div.innerHTML = "<p class='item-text'>" + item.inputs[0] + "</p>";
                div.id = item.inputs[0];
            } else if (typeof item.inputs === 'object') {
                // Handle other object-type inputs
                const inputName = Object.values(item.inputs)[0];
                div.innerHTML = "<p class='item-text'>" + inputName + "</p>";
                div.id = inputName;
            }

            if (item.placement) {
                div.dataset.placement = item.placement;
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

            // if (item.thumbstick && item.thumbstick.image) {
            //     const img = document.createElement('img');
            //     img.src = item.thumbstick.image;
            //     img.style.width = '100%';
            //     img.style.height = '100%';
            //     div.appendChild(img);
            // } else {
            //     div.innerText = item.inputs ? Object.keys(item.inputs).join(', ') : 'Item';
            // }
        });

        // Safely get the screen array from the JSON if it exists
        let screenArray = defaultJsonOutput?.representations?.[device]?.[layout]?.[orientation]?.screens || null;

        if (screenArray) {
            // Proceed with operations on screenArray
            //console.log("Screen array exists:", screenArray);
            // Add each screen to the layout
            screenArray.forEach((screen, index) => {
                let screenDiv = document.createElement('div');
                screenDiv.className = 'screen-item';
                
                if (device === "tv") {
                    screenDiv.style.width = (screen.outputFrame.width * width) + 'px';
                    screenDiv.style.height = (screen.outputFrame.height * height) + 'px';
                    screenDiv.style.top = (screen.outputFrame.y * height) + 'px';
                    screenDiv.style.left = (screen.outputFrame.x * width) + 'px';
                } else {
                    screenDiv.style.width = screen.outputFrame.width + 'px';
                    screenDiv.style.height = screen.outputFrame.height + 'px';
                    screenDiv.style.top = screen.outputFrame.y + 'px';
                    screenDiv.style.left = screen.outputFrame.x + 'px';
                }
                
                screenDiv.id = `game-screen-${index}`;

                // Add text to the screen
                let screenText = document.createElement('p');
                screenText.textContent = `Game Screen ${index}`;
                screenText.className = 'screen-text';
                screenDiv.appendChild(screenText);

                if (screen.placement) {
                    screenDiv.dataset.placement = screen.placement;
                }

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
            //console.log("Screen array does not exist.");
        }
    }
    
    if (thumbstickImageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;

            const { device, layout, orientation } = getCurrentState();
            const thumbstickConfig = defaultJsonOutput["representations"][device][layout][orientation]["items"].find(item => {
                if (typeof item.inputs === 'object') {
                    return item.inputs.up === "analogStickUp" &&
                           item.inputs.down === "analogStickDown" &&
                           item.inputs.left === "analogStickLeft" &&
                           item.inputs.right === "analogStickRight";
                }
                return false;
            });
            const thumbstickWidth = thumbstickConfig ? thumbstickConfig.thumbstick.width : null;
            const thumbstickHeight = thumbstickConfig ? thumbstickConfig.thumbstick.height : null;

            // Set the image inside the padding of #thumbstick
            const thumbstickElement = document.querySelector('#thumbstick .layout-item-inner');
            if (thumbstickElement) {
                const thumbstickStyle = window.getComputedStyle(document.getElementById("thumbstick"));
                const innerImg = document.createElement('img');
                innerImg.src = img.src;
                innerImg.style.position = "absolute";
                innerImg.style.top = "50%";
                innerImg.style.left = "50%";
                innerImg.style.transform = "translate(-50%, -50%)";
                innerImg.style.width = thumbstickWidth + "px";
                innerImg.style.height = thumbstickHeight + "px";
               // innerImg.style.objectFit = 'contain';
                innerImg.style.backgroundPosition = "center";
                thumbstickElement.innerHTML = ''; // Clear any existing content
                thumbstickElement.appendChild(innerImg);

                 // Create a 10px by 10px crosshair in the center of the layout-item
                const crosshair = document.createElement('div');
                crosshair.style.position = 'absolute';
                crosshair.style.width = '10px';
                crosshair.style.height = '10px';
                crosshair.style.top = '50%';
                crosshair.style.left = '50%';
                crosshair.style.transform = 'translate(-50%, -50%)';
                crosshair.style.zIndex = '10';
                crosshair.style.backgroundImage = 'linear-gradient(to bottom, transparent 45%, red 45%, red 55%, transparent 55%), linear-gradient(to right, transparent 45%, red 45%, red 55%, transparent 55%)';
                document.querySelector('#thumbstick .layout-item-inner').appendChild(crosshair);
            }
           

        };
        reader.readAsDataURL(thumbstickImageFile);
    }

}

function makeResizable(resizableElement) {
    const handle = resizableElement.querySelector('.resize-handle');
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

            // Apply the new width and height
            if (newWidth > 0 && newHeight > 0) {
                resizableElement.style.width = newWidth + 'px';
                resizableElement.style.height = newHeight + 'px';
            }

            // Get the current position and extended edges
            const currentTop = parseInt(resizableElement.style.top, 10);
            const currentLeft = parseInt(resizableElement.style.left, 10);
            const extendedTop = parseInt(resizableElement.style.paddingTop, 10) || 0;
            const extendedLeft = parseInt(resizableElement.style.paddingLeft, 10) || 0;

            updateItemSize(resizableElement.id, newWidth, newHeight, currentTop, currentLeft, extendedTop, extendedLeft);
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

    function updateItemSize(itemId, newWidth, newHeight, currentTop, currentLeft, extendedTop, extendedLeft) {
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
            } else if (itemId === "touch-screen") {
                return item.inputs && item.inputs.x === "touchScreenX" && item.inputs.y === "touchScreenY";
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
            item.frame.y = currentTop + extendedTop; // Preserve y-position
            item.frame.x = currentLeft + extendedLeft; // Preserve x-position
        }

        if (item && item.extendedEdges) {
            item.extendedEdges.top = extendedTop; // Preserve extendedEdges top value
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
            // Extract the index from the itemId (assuming format "game-screen-X")
            let screenIndex = parseInt(itemId.split('-')[2]);

            if (screenIndex >= 0 && screenIndex < screenArray.length) {
                let screen = screenArray[screenIndex];

                if (screen && screen.outputFrame) {
                    screen.outputFrame.width = newWidth;
                    screen.outputFrame.height = newHeight;
                    //console.log(`Updated screen ${screenIndex}: width=${newWidth}, height=${newHeight}`);

                    // Update the JSON
                    updateJson();

                    // Update the focus
                    const focusItemDiv = document.querySelector('.focus-item');
                    if (focusItemDiv) {
                        const widthInput = focusItemDiv.querySelector('input[name="width"]');
                        const heightInput = focusItemDiv.querySelector('input[name="height"]');
                        if (widthInput) widthInput.value = newWidth;
                        if (heightInput) heightInput.value = newHeight;
                    }
                } else {
                    console.log(`Screen at index ${screenIndex} doesn't have an outputFrame.`);
                }
            } else {
                console.log(`Invalid screen index: ${screenIndex}`);
            }
        } else {
            // Handle the case where the screenArray doesn't exist
            console.log("Screen array does not exist.");
        }
    }
}

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
        } else if (itemId === "Touch Screen") {
            return item.inputs && item.inputs.x === "touchScreenX" && item.inputs.y === "touchScreenY";
        } else if (Array.isArray(item.inputs)) {
            return item.inputs.includes(itemId);
        } else if (typeof item.inputs === 'object') {
            return Object.values(item.inputs).includes(itemId);
        }
        return false;
    });

    return item;
}

function makeDraggable(draggableElement) {
    let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0, isDragging = false;
    let isResizing = false;
    let startTime, startX, startY;
    const tapThreshold = 10; // pixels
    const tapDuration = 200; // milliseconds

    // Touch event handlers
    draggableElement.addEventListener('touchstart', dragStart, { passive: false });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', dragEnd);

    // Mouse event handlers
    draggableElement.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (draggableElement.classList.contains('locked')) {
            // If the item is locked, only allow click/tap events
            startTime = new Date().getTime();
            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            } else {
                startX = e.clientX;
                startY = e.clientY;
            }
            return;
        }

        if (e.target.classList.contains('resize-handle')) {
            isResizing = true;
            return;
        }

        e.preventDefault();
        
        startTime = new Date().getTime();
        
        if (e.type === 'touchstart') {
            initialX = startX = e.touches[0].clientX;
            initialY = startY = e.touches[0].clientY;
        } else {
            initialX = startX = e.clientX;
            initialY = startY = e.clientY;
        }

        offsetX = draggableElement.offsetLeft;
        offsetY = draggableElement.offsetTop;

        isDragging = true;
        draggableElement.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (isDragging && !isResizing && !draggableElement.classList.contains('locked')) {
            e.preventDefault();
            
            let currentX, currentY;
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }

            const dx = currentX - initialX;
            const dy = currentY - initialY;

            let newLeft = offsetX + dx;
            let newTop = offsetY + dy;

            draggableElement.style.left = newLeft + 'px';
            draggableElement.style.top = newTop + 'px';
        }
    }

    function dragEnd(e) {
        let endX, endY;
        if (e.type === 'touchend') {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
        } else {
            endX = e.clientX;
            endY = e.clientY;
        }

        const endTime = new Date().getTime();
        const dragDistance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const dragDuration = endTime - startTime;

        if (dragDistance < tapThreshold && dragDuration < tapDuration) {
            // This was a tap/click, not a drag
            draggableElement.click();
        } else if (isDragging && !draggableElement.classList.contains('locked')) {
            // This was a drag, update position
            let item = getCurrentElement(draggableElement.id);

            if (!isResizing) {
                const newLeft = parseInt(draggableElement.style.left, 10);
                const newTop = parseInt(draggableElement.style.top, 10);
                if (draggableElement.classList.contains("screen-item")) {
                    updateScreenPosition(draggableElement.id, newLeft, newTop);
                } else {
                    const extendedLeft = item && item.extendedEdges ? item.extendedEdges.left : 0;
                    const extendedTop = item && item.extendedEdges ? item.extendedEdges.top : 0;
                    updateItemPosition(draggableElement.id, newLeft + extendedLeft, newTop + extendedTop);
                }
                updateJson();
            }
        }

        isDragging = false;
        isResizing = false;
        draggableElement.style.cursor = 'grab';
    }
}

function updateScreenPosition(screenId, newScreenX, newScreenY) {
    // Split the selected layout into an array of individual words
    let parts = layoutSelection.split(" ");
    let device = parts[0].toString();
    let layout = parts[1].toString();
    let orientation = document.querySelector('input[name="orientation"]:checked').id;

    // Get the screens array from the selected layout
    let screensArray = defaultJsonOutput["representations"][device][layout][orientation]["screens"];

    // Extract the index from the screenId (assuming format "game-screen-X")
    let screenIndex = parseInt(screenId.split('-')[2]);

    if (screenIndex >= 0 && screenIndex < screensArray.length) {
        let screen = screensArray[screenIndex];
        
        if (screen && screen.outputFrame) {
            if (device === "tv") {
                screen.outputFrame.x = newScreenX / layoutObject.clientWidth;
                screen.outputFrame.y = newScreenY / layoutObject.clientHeight;
            } else {
                screen.outputFrame.x = newScreenX;
                screen.outputFrame.y = newScreenY;
            }
            console.log(`Updated screen ${screenIndex}: x=${screen.outputFrame.x}, y=${screen.outputFrame.y}`);

            // Update the JSON
            updateJson();

            // Update the focus
            const focusItemDiv = document.querySelector('.focus-item');
            const xInput = focusItemDiv.querySelector('#form-x input');
            const yInput = focusItemDiv.querySelector('#form-y input');
            xInput.value = screen.outputFrame.x;
            yInput.value = screen.outputFrame.y;
        }
    } else {
        console.error(`Screen with id ${screenId} not found in the screens array.`);
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
        } else if (itemId === "touch-screen") {
            return item.inputs && item.inputs.x === "touchScreenX" && item.inputs.y === "touchScreenY";
        } else if (Array.isArray(item.inputs)) {
            return item.inputs.includes(itemId);
        } else if (typeof item.inputs === 'object') {
            return Object.values(item.inputs).includes(itemId);
        }
        return false;
    });

    if (item && item.frame) {
        if (device === "tv") {
            item.frame.x = newX / layoutObject.clientWidth;
            item.frame.y = newY / layoutObject.clientHeight;
        } else {
            item.frame.x = newX;
            item.frame.y = newY;
        }
        //console.log(`Updated ${itemId}: x=${newX}, y=${newY}`);
    }
}

// Convert the JSON object to a formatted string
const jsonString = JSON.stringify(defaultJsonOutput, null, 4);

// Print the JSON string into the div with id "code" preserving the formatting
document.getElementById('code').textContent = jsonString;


function toggleLockItem() {
    const lockButton = document.getElementById('lock-button');
    const selectedItem = document.querySelector('.layout-item.selected, .screen-item.selected');

    if (selectedItem) {
        isItemLocked = !isItemLocked;
        selectedItem.classList.toggle('locked', isItemLocked);
        lockButton.innerHTML = isItemLocked ? '<i class="fa-solid fa-lock"></i>' : '<i class="fa-solid fa-unlock"></i>';
        lockButton.classList.toggle('locked', isItemLocked);
        // Hide the delete button when an item is locked, but only for layout items
        const deleteButton = document.getElementById('delete-button');
        if (deleteButton && selectedItem.classList.contains('layout-item')) {
            deleteButton.style.display = isItemLocked ? 'none' : 'block';
        }
        
        // Hide or show the resize handle based on the lock state
        const resizeHandle = selectedItem.querySelector('.resize-handle');
        if (resizeHandle) {
            resizeHandle.style.display = isItemLocked ? 'none' : 'block';
        }
        
        // Show or hide the .focus-item based on the lock state
        const focusItem = document.querySelector('.focus-item');
        if (focusItem) {
            focusItem.style.display = isItemLocked ? 'none' : 'flex';
        }

        // Add a 1em gap to the .container if the item is unlocked
        const containers = document.querySelectorAll('#focus > .container:first-child');
        containers.forEach(container => {
            container.style.gap = isItemLocked ? '0' : '1em';
        });
        // Re-initialize draggable functionality
        makeDraggable(selectedItem);
    }
}

// Add this to your existing event listeners
document.getElementById('lock-button').addEventListener('click', toggleLockItem);
    
function selectItem(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to layout-object
    
    // Update the gap for the first container in #focus only if the item is unlocked
    if (!isItemLocked) {
        const firstFocusContainer = document.querySelector('#focus > .container:first-child');
        if (firstFocusContainer) {
            firstFocusContainer.style.gap = '1em';
        }
    }

    // Remove highlight from all .layout-item elements
    document.querySelectorAll('.layout-item, .screen-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add the highlight to the clicked element
    event.currentTarget.classList.add('selected');
    // Change #alignmentTools to display: flex
    const alignmentTools = document.getElementById('alignmentTools');
    if (alignmentTools) {
        alignmentTools.style.display = 'flex';
    }

    // Get the selected item ID
    const itemId = event.currentTarget.id;

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = itemId === 'touch-screen' ? 'Touch Screen' : itemId;
    
    document.querySelector('.item-name').style.display = "block";

    // // Show or hide the delete button based on whether the selected item is a game screen
    // const deleteButton = document.getElementById('delete-button');
    // if (deleteButton) {
    //     if (event.currentTarget.classList.contains('screen-item')) {
    //         deleteButton.style.display = 'none';
    //     } else {
    //         deleteButton.style.display = 'block';
    //     }
    // }

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
        } else if (currentItemId === "touch-screen") {
            return item.inputs && item.inputs.x === "touchScreenX" && item.inputs.y === "touchScreenY";
        } else if (Array.isArray(item.inputs)) {
            return item.inputs.includes(currentItemId);
        } else if (typeof item.inputs === 'object') {
            return Object.values(item.inputs).includes(currentItemId);
        }
        return false;
    });

    const lockButton = document.getElementById('lock-button');
    isItemLocked = event.currentTarget.classList.contains('locked');
    lockButton.innerHTML = isItemLocked ? '<i class="fa-solid fa-lock"></i>' : '<i class="fa-solid fa-unlock">';
    lockButton.classList.toggle('locked', isItemLocked);
    lockButton.style.display = 'inline-block'; // Show the lock button
    // Update the display of .focus-item based on the lock state
    const focusItem = document.querySelector('.focus-item');
    if (focusItem) {
        focusItem.style.display = isItemLocked ? 'none' : 'flex';
    }
    
    // Display the matched item in the .focus-item div
    displayMatchedItem(selectedItem);
}

function deselectAllItems() {
    document.querySelectorAll('.layout-item').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector('.item-name').innerText = '';
    document.querySelector('.focus-item').innerHTML = '';
    document.getElementById("delete-button").style.display = "none";
    document.querySelector("#focus > .container:first-child").style.gap = "0";
    document.getElementById('lock-button').style.display = 'none';
    document.querySelector('.item-name').style.display = 'none';

    // Change #alignmentTools to display: none
    const alignmentTools = document.getElementById('alignmentTools');
    if (alignmentTools) {
        alignmentTools.style.display = 'none';
    }
    
}

document.getElementById('layout-object').addEventListener('click', function(event) {
    if (event.target === this) {
        deselectAllItems();
        document.getElementById('lock-button').style.display = 'none';
    }
});

function selectScreen(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to layout-object

    // Remove highlight from all .layout-item elements
    document.querySelectorAll('.layout-item, .screen-item').forEach(screen => {
        screen.classList.remove('selected');
    });

    const deleteButton = document.getElementById('delete-button');
    if (deleteButton) {
        deleteButton.style.display = 'block';
    }

    // Add the highlight to the clicked element
    event.currentTarget.classList.add('selected');
    // Change #alignmentTools to display: flex
    const alignmentTools = document.getElementById('alignmentTools');
    if (alignmentTools) {
        alignmentTools.style.display = 'flex';
    }

    // Get the selected item ID
    const screenId = event.currentTarget.id;

    // Update lock button state
    const lockButton = document.getElementById('lock-button');
    isItemLocked = event.currentTarget.classList.contains('locked');
    lockButton.innerHTML = isItemLocked ? '<i class="fa-solid fa-lock">' : '<i class="fa-solid fa-unlock">';
    lockButton.classList.toggle('locked', isItemLocked);
    lockButton.style.display = 'inline-block'; // Show the lock button

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = screenId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.querySelector('#focus > .container:first-child').style.gap = "1em";
    document.querySelector('.item-name').style.display = "block";
    // Get the selected layout, device, and orientation
    let parts = layoutSelection.split(" ");
    let device = parts[0].toString();
    let layout = parts[1].toString();
    let orientation = document.querySelector('input[name="orientation"]:checked').id;

    // Safely get the screen array from the JSON if it exists
    let screenArray = defaultJsonOutput?.representations?.[device]?.[layout]?.[orientation]?.screens || null;

    if (screenArray) {
        // Proceed with operations on screenArray
        //console.log("Screen array exists:", screenArray);
        // // Find the array item that contains the matching input
        currentScreenId = event.currentTarget.id;
        let screenIndex = parseInt(currentScreenId.split('-')[2]);
        selectedScreen = screenArray[screenIndex];

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
    document.getElementById("delete-button").style.display = isItemLocked ? "none" : "block";

    

    // Get the current device from the layout selection
    const currentState = getCurrentState();
    const device = currentState.device;

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
                let newValue = parseFloat(e.target.value);
                if (device === "tv" && (label === "X" || label === "Y" || label === "Width" || label === "Height")) {
                    newValue /= (label === "X" || label === "Width") ? layoutObject.clientWidth : layoutObject.clientHeight;
                }
                //here
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

                    div.style.width = item.frame.width + 'px';
                    div.style.height = item.frame.height + 'px';

                    div.style.paddingTop = item.extendedEdges.top + 'px';
                    div.style.paddingBottom = item.extendedEdges.bottom + 'px';
                    div.style.paddingLeft = item.extendedEdges.left + 'px';
                    div.style.paddingRight = item.extendedEdges.right + 'px';

                    // Check if the item is a thumbstick
                    if (item.thumbstick) {
                        // Get the layout-item-inner img for the thumbstick
                        const thumbstickImg = div.querySelector('.layout-item-inner img');
                        if (thumbstickImg) {
                            thumbstickImg.style.width = item.thumbstick.width + 'px';
                            thumbstickImg.style.height = item.thumbstick.height + 'px';
                        }
                    }
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

        // Create a new div to wrap thumbstick fields
        const thumbstickWrapper = document.createElement('div');
        thumbstickWrapper.classList.add('thumbstick-wrapper'); // Add a class for styling if needed
        focusItemDiv.appendChild(thumbstickWrapper); // Append the wrapper to focusItemDiv

        // Create form fields for each relevant property
        if (item.frame) {
            let multiplier = device === "tv" ? layoutObject.clientWidth : 1;
            createFormField('form-x', 'X-Position', item.frame.x * multiplier, ['frame', 'x'], positionWrapper);
            multiplier = device === "tv" ? layoutObject.clientHeight : 1;
            createFormField('form-y', 'Y-Position', item.frame.y * multiplier, ['frame', 'y'], positionWrapper);
            multiplier = device === "tv" ? layoutObject.clientWidth : 1;
            createFormField('form-width', 'Width', item.frame.width * multiplier, ['frame', 'width'], sizeWrapper);
            multiplier = device === "tv" ? layoutObject.clientHeight : 1;
            createFormField('form-height', 'Height', item.frame.height * multiplier, ['frame', 'height'], sizeWrapper);
        }

        

        if (item.extendedEdges) {
            
            createFormField('form-top', '', item.extendedEdges.top, ['extendedEdges', 'top'], sizeWrapper);
            createFormField('form-bottom', '', item.extendedEdges.bottom, ['extendedEdges', 'bottom'], sizeWrapper);
            createFormField('form-left', '', item.extendedEdges.left, ['extendedEdges', 'left'], sizeWrapper);
            createFormField('form-right', '', item.extendedEdges.right, ['extendedEdges', 'right'], sizeWrapper);
        
        }

        // Check if the item is a thumbstick
        if (item.thumbstick) {
            // Create form fields for thumbstick width and height
            createFormField('form-thumbstick-width', 'Thumbstick Width', item.thumbstick.width, ['thumbstick', 'width'], thumbstickWrapper);
            createFormField('form-thumbstick-height', 'Thumbstick Height', item.thumbstick.height, ['thumbstick', 'height'], thumbstickWrapper);
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
            createFormField('form-x', 'X-Position', screen.outputFrame.x, ['outputFrame', 'x'], positionWrapper);
            createFormField('form-y', 'Y-Position', screen.outputFrame.y, ['outputFrame', 'y'], positionWrapper);
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

// This function should be called after parsing the info.json file
function createFilenameMappings(jsonContent) {
    const filenameMappings = new Map();

    for (const [device, deviceLayouts] of Object.entries(jsonContent.representations)) {
        for (const [layout, orientations] of Object.entries(deviceLayouts)) {
            for (const [orientation, data] of Object.entries(orientations)) {
                if (data.assets) {
                    let filename;
                    if (data.assets.resizable) {
                        filename = data.assets.resizable;
                    } else if (data.assets.small) {
                        filename = data.assets.small;
                    } else if (data.assets.medium) {
                        filename = data.assets.medium;
                    } else if (data.assets.large) {
                        filename = data.assets.large;
                    }
                    
                    if (filename) {
                        const layoutKey = `${device} ${layout} - ${orientation}`;
                        filenameMappings.set(filename, layoutKey);
                    }
                }
            }
        }
    }

    return filenameMappings;
}

async function handleZipUpload(event) {
    const file = event.target.files[0];
    if (file && (file.name.endsWith('.zip') || file.name.endsWith('.deltaskin'))) {
        showLoadingModal(); // Show the loading modal
        const zip = new JSZip();
        try {
            const zipContent = await zip.loadAsync(file);
            const infoJsonFile = zipContent.file('info.json');

            if (infoJsonFile) {
                const infoJsonContent = await infoJsonFile.async('string');
                let jsonContent = JSON.parse(infoJsonContent);

                jsonContent = ensureExtendedEdges(jsonContent);
                defaultJsonOutput = jsonContent;

                document.getElementById('nameInput').value = jsonContent.name || '';
                document.getElementById('identifierInput').value = jsonContent.identifier || '';
                
                selectConsoleBasedOnIdentifier(jsonContent);

                // Clear existing options in layoutSelect
                selectLayout.innerHTML = '';

                // Get layout options from the updated jsonContent
                const layoutOptions = [];
                for (const device in jsonContent.representations) {
                    for (const layout in jsonContent.representations[device]) {
                        layoutOptions.push(`${device} ${layout}`);
                    }
                }

                // Populate layoutSelect with new options
                layoutOptions.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    selectLayout.appendChild(optionElement);
                });

                // Check if there are any thumbsticks in the file
                const thumbstickNames = [];
                for (const device in defaultJsonOutput.representations) {
                    for (const layout in defaultJsonOutput.representations[device]) {
                        for (const orientation in defaultJsonOutput.representations[device][layout]) {
                            const items = defaultJsonOutput.representations[device][layout][orientation].items;
                            items.forEach(item => {
                                if (item.thumbstick && item.thumbstick.name) {
                                    if (!thumbstickNames.includes(item.thumbstick.name)) {
                                        thumbstickNames.push(item.thumbstick.name);
                                    }
                                }
                            });
                        }
                    }
                }

                updateJson();

                if (thumbstickNames.length > 0) {
                    console.log('Thumbstick names found:', thumbstickNames);
                    thumbstickImageFile = zipContent.file(thumbstickNames[0]);
                    if (thumbstickImageFile) {
                        thumbstickImageFile = await thumbstickImageFile.async('blob');
                        thumbstickImageFile.name = thumbstickNames[0];
                        console.log(`Set thumbstick image file name to: ${thumbstickImageFile.name}`);
                        handleThumbstick(thumbstickImageFile);
                    } else {
                        console.warn(`Thumbstick image file '${thumbstickNames[0]}' not found in the zip.`);
                    }
                } else {
                    console.log('No thumbsticks found in the file.');
                }
                

                automaticSelectLayout();

                const filenameMappings = createFilenameMappings(jsonContent);



                for (const fileName in zipContent.files) {
                    if (fileName !== 'info.json') {
                        const fileData = await zipContent.file(fileName).async('blob');
                        await handleMultiFileUpload(fileData, fileName, filenameMappings);
                    }
                }

                updateLayoutBackground();
                displayUploadedImages();
                updateJson();
                
            } else {
                alert('info.json file not found in the archive.');
            }
        } catch (error) {
            console.error('Error processing the file:', error);
            alert('Error processing the file. Please make sure it\'s a valid .zip or .deltaskin file.');
        } finally {
            hideLoadingModal(); // Hide the loading modal when done
        }
    } else {
        alert('Please upload a .zip or .deltaskin file.');
    }
}

function convertImageLayoutSelectionToJsonKeys() {
    const currentLayoutSelection = document.getElementById('imageLayoutSelect').value;
    // Split the currentLayoutSelection into an array of words
    const layoutParts = currentLayoutSelection.split(/\s+|-/).filter(part => part.trim() !== '');

    // Create a layout object with device, layout, and orientation properties
    const layoutObject = {
        device: layoutParts[0],
        layout: layoutParts[1],
        orientation: layoutParts[2]
    };
    console.log(layoutObject);
    return layoutObject;
}

// Handle image or PDF upload
document.getElementById('uploadImageButton').addEventListener('click', function() {
    let fileInput = document.getElementById('imageUpload');
    let file = fileInput.files[0];
    let selectedLayout = document.getElementById('imageLayoutSelect').value;
    
    if (!file) {
        alert('Please select an image or pdf');
        return;
    }
    
    let fileName = file.name;
    let fileType = getFileType(fileName);
    
    if (selectedLayout) {
        handleSingleFileUpload(file, fileType, fileName, selectedLayout)
            .then(() => {
                updateLayoutBackground();
                displayUploadedImages();
                updateJson();
                // Clear the file input after successful upload
                fileInput.value = '';
            })
            .catch(error => {
                console.error('Error handling file upload:', error);
                alert('Error handling file upload. Please check the console for details.');
                // Clear the file input even if there's an error
                fileInput.value = '';
            });
    } else {
        alert('Please select a layout.');
        // Clear the file input if no layout is selected
        fileInput.value = '';
    }
});

// Update handleFileUpload to use the filename mappings
async function handleSingleFileUpload(file, fileType, fileName, selectedLayout) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
            const layoutKey = document.getElementById('imageLayoutSelect').value;

            if (fileType === 'pdf') {
                try {
                    const pdfData = new Uint8Array(e.target.result);
                    await processPdf(pdfData, layoutKey, fileName);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            } else if (['png', 'jpg', 'jpeg', 'gif'].includes(fileType)) {
                layoutImages[layoutKey] = e.target.result;
                updateDefaultJsonOutput(layoutKey, fileName);
                resolve();
            } else {
                console.warn(`Unsupported file type: ${fileType} for file ${fileName}. Skipping this file.`);
                resolve();
            }
        };
        reader.onerror = reject;

        if (getFileType(fileName) === 'pdf') {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsDataURL(file);
        }
    });
}

// Update handleFileUpload to use the filename mappings
async function handleMultiFileUpload(file, fileName, filenameMappings) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
            const fileType = getFileType(fileName);
            const layoutKey = filenameMappings.get(fileName);

            if (!layoutKey) {
                console.warn(`Layout key not found for ${fileName}. Skipping this file.`);
                resolve();
                return;
            }

            if (fileType === 'pdf') {
                try {
                    const pdfData = new Uint8Array(e.target.result);
                    await processPdf(pdfData, layoutKey, fileName);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            } else if (['png', 'jpg', 'jpeg', 'gif'].includes(fileType)) {
                layoutImages[layoutKey] = e.target.result;
                resolve();
            } else {
                console.warn(`Unsupported file type: ${fileType} for file ${fileName}. Skipping this file.`);
                resolve();
            }
        };

        reader.onerror = reject;

        if (getFileType(fileName) === 'pdf') {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsDataURL(file);
        }
    });
}

function getFileType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension;
}

async function processPdf(pdfData, layoutKey, fileName) {
    const pdf = await pdfjsLib.getDocument(pdfData).promise;
    const page = await pdf.getPage(1);
    
    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const renderContext = {
        canvasContext: context,
        viewport: viewport,
        background: 'rgba(0, 0, 0, 0)'
    };

    await page.render(renderContext).promise;

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {
            data[i + 3] = 0;
        }
    }
    context.putImageData(imageData, 0, 0);

    const imageUrl = canvas.toDataURL('image/png');
    layoutImages[layoutKey] = imageUrl;
    updateDefaultJsonOutput(layoutKey, fileName);
}

// Function to check if any element has the "selected" class and update #focusContainer visibility
function updateFocusContainerVisibility() {
    const selectedElement = document.querySelector('.selected');
    const focusContainer = document.getElementById('focusContainer');
    
    if (focusContainer) {
        if (!selectedElement) {
            focusContainer.style.display = 'none';
        } else {
            focusContainer.style.display = ''; // Reset to default display value
        }
    }
}

// Call the function initially
updateFocusContainerVisibility();

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(updateFocusContainerVisibility);

// Configure the observer to watch for changes to the entire document body
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
});

// Function to add the "Fit Width" button for screens
function addFitWidthButton() {
    const otherTools = document.getElementById('otherTools');
    if (!otherTools) return;

    // Remove existing "Fit Width" button if it exists
    const existingButton = otherTools.querySelector('#fitWidthButton');
    if (existingButton) {
        existingButton.remove();
    }

    // Create and add the "Fit Width" button
    const fitWidthButton = document.createElement('button');
    fitWidthButton.id = 'fitWidthButton';
    fitWidthButton.classList.add('button', 'button--primary');
    fitWidthButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
    fitWidthButton.addEventListener('click', fitScreenToWidth);
    otherTools.appendChild(fitWidthButton);
}

// Function to fit the screen to the width of #layout-object
function fitScreenToWidth() {
    const selectedScreen = document.querySelector('.screen-item.selected');
    if (!selectedScreen) return;

    const layoutObject = document.getElementById('layout-object');
    const layoutWidth = layoutObject.offsetWidth;

    // Get the current aspect ratio
    const currentWidth = selectedScreen.offsetWidth;
    const currentHeight = selectedScreen.offsetHeight;
    const aspectRatio = currentHeight / currentWidth;

    // Set new dimensions
    const newWidth = layoutWidth;
    const newHeight = Math.round(newWidth * aspectRatio);

    // Update screen style
    selectedScreen.style.left = '0px';
    selectedScreen.style.width = `${newWidth}px`;
    selectedScreen.style.height = `${newHeight}px`;

    // Update JSON
    updateScreenDimensions(selectedScreen.id, 0, newWidth, newHeight);

    // Update form inputs
    updateFormInputs(0, newWidth, newHeight);

    // Update JSON display
    updateJson();
}

// Function to update screen dimensions in JSON
function updateScreenDimensions(screenId, newX, newWidth, newHeight) {
    const currentState = getCurrentState();
    const screenIndex = parseInt(screenId.split('-')[2]);
    const screen = defaultJsonOutput.representations[currentState.device][currentState.layout][currentState.orientation].screens[screenIndex];

    if (screen) {
        screen.frame = {
            x: newX,
            y: screen.inputFrame.y, // Keep the original y position
            width: newWidth,
            height: newHeight
        };
    }
}

// Function to update form inputs
function updateFormInputs(newX, newWidth, newHeight) {
    const formXInput = document.querySelector('#form-x input');
    const formWidthInput = document.querySelector('#form-width input');
    const formHeightInput = document.querySelector('#form-height input');

    if (formXInput) formXInput.value = newX;
    if (formWidthInput) formWidthInput.value = newWidth;
    if (formHeightInput) formHeightInput.value = newHeight;
}

// Modify the selectScreen function to add the "Fit Width" button
const originalSelectScreen = selectScreen;
selectScreen = function(event) {
    originalSelectScreen.call(this, event);
    addFitWidthButton();
};

// Modify the deselectAllItems function to remove the "Fit Width" button
const originalDeselectAllItems = deselectAllItems;
deselectAllItems = function() {
    originalDeselectAllItems.call(this);
    const fitWidthButton = document.getElementById('fitWidthButton');
    if (fitWidthButton) {
        fitWidthButton.remove();
    }
};



document.getElementById('delete-button').addEventListener('click', function() {
    let currentItemName = document.querySelector(".item-name").innerHTML;
    document.querySelector('.item-name').style.display = "none";
    document.getElementById('lock-button').style.display = "none";
    document.querySelector('#focus > .container:first-child').style.gap = "0"

    // Change #alignmentTools to display: none
    const alignmentTools = document.getElementById('alignmentTools');
    if (alignmentTools) {
        alignmentTools.style.display = 'none';
    }

    document.getElementById("delete-button").style.display = "none";

    let selectedItem = document.querySelector('.layout-item.selected, .screen-item.selected');

    if (selectedItem) {
        // Get the selected layout and orientation
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = getSelectedOrientation();

        if (selectedItem.classList.contains('layout-item')) {
            // Handle layout item deletion
            let currentItem = getCurrentElement(currentItemName);
            let itemsArray = defaultJsonOutput.representations[device][layout][orientation].items;
            
            const index = itemsArray.findIndex(item => item === currentItem);
            if (index !== -1) {
                itemsArray.splice(index, 1);
            }

            // Check if the current item is "Touch Screen" and change it to "touch-screen"
            if (currentItemName === "Touch Screen") {
                currentItemName = "touch-screen";
            }
            selectedItem.remove();
        } else if (selectedItem.classList.contains('screen-item')) {
            // Handle screen item deletion
            let screenId = selectedItem.id;
            let screenIndex = parseInt(screenId.split('-')[2]);
            let screensArray = defaultJsonOutput.representations[device][layout][orientation].screens;
            
            if (screenIndex !== -1 && screenIndex < screensArray.length) {
                screensArray.splice(screenIndex, 1);
            }
            selectedItem.remove();
        }

        // Clear the focus section
        document.querySelector('.focus-item').innerHTML = '';
        document.querySelector('.item-name').innerText = '';

        // Add the deleted button back to the buttons-container
        if (selectedItem.classList.contains('layout-item')) {
            let buttonContainer = document.getElementById('buttons-container');
            let newButton = document.createElement('button');
            newButton.innerText = currentItemName === "touch-screen" ? "Touch Screen" : currentItemName;
            newButton.id = currentItemName;
            newButton.className = 'console-button button button--primary';
            newButton.addEventListener('click', function() {
                addButtonToJsonAndLayout(currentItemName, selectedConsole);
                this.remove(); // Remove the button from the button container after it's added
            });
            buttonContainer.appendChild(newButton);
        }

        loadLayout();
        updateJson();

        document.getElementById("focus").style.display = "flex";
        
        console.log("Item deleted successfully.");
    } else {
        console.log("No item is currently selected.");
    }

    // Don't remove the button from button-container
});

function addScreenButton() {
    let buttonContainer = document.getElementById('buttons-container');
    let consoleSelect = document.getElementById('consoleSelect');
    let selectedConsole = consoleSelect.value;

    // Add the screen button for all consoles
    let screenButton = document.createElement('button');
    screenButton.innerText = 'Add Screen';
    screenButton.id = 'add-screen-button';
    screenButton.className = 'console-button button button--primary';
    screenButton.addEventListener('click', function() {
        addScreenToJsonAndLayout();
       // this.remove(); // Remove the button after it's clicked
    });
    buttonContainer.appendChild(screenButton);
}

function addScreenToJsonAndLayout() {
    let layoutParts = layoutSelection.split(" ");
    let device = layoutParts[0];
    let layout = layoutParts[1];
    let orientation = getSelectedOrientation();
    let selectedConsole = document.getElementById('consoleSelect').value;

    let layoutObject = document.getElementById('layout-object');
    let layoutObjectWidth = layoutObject.clientWidth;
    let layoutObjectHeight = layoutObject.clientHeight;

    const consoleSpecs = {
        gbc: { width: 160, height: 144, ratio: 10/9 },
        gba: { width: 240, height: 160, ratio: 3/2 },
        ds: { width: 256, height: 192, ratio: 2/3 },
        nes: { width: 256, height: 240, ratio: 16/15 },
        snes: { width: 256, height: 224, ratio: 8/7 },
        n64: { width: 256, height: 224, ratio: 8/7 }
    };

    const spec = consoleSpecs[selectedConsole];

    let outputWidth = layoutObjectWidth;
    let outputHeight = outputWidth / spec.ratio;

    if (outputHeight > layoutObjectHeight) {
        outputHeight = layoutObjectHeight;
        outputWidth = outputHeight * spec.ratio;
    }

    let screenFormat = {
        "inputFrame": {
            "x": 0,
            "y": 0,
            "width": spec.width,
            "height": spec.height
        },
        "outputFrame": {
            "x": 0,
            "y": 0,
            "width": spec.width,
            "height": spec.height
        }
    };

    // Add the screen configuration to the correct JSON array
    defaultJsonOutput.representations[device][layout][orientation].screens.push(screenFormat);

    // Create a new div for the screen in the layout-object
    let screenDiv = document.createElement('div');
    screenDiv.className = 'screen-item';
    screenDiv.style.width = screenFormat.outputFrame.width + 'px';
    screenDiv.style.height = screenFormat.outputFrame.height + 'px';
    screenDiv.style.position = 'absolute';
    screenDiv.style.left = screenFormat.outputFrame.x + 'px';
    screenDiv.style.top = screenFormat.outputFrame.y + 'px';
    screenDiv.style.border = '1px solid black';
    screenDiv.style.backgroundColor = 'rgba(200,200,200,0.5)';
    screenDiv.innerText = 'Screen';
    screenDiv.classList.add('unlocked');

    // Append the screen div to the layout-object
    layoutObject.appendChild(screenDiv);

    loadLayout();
    updateJson();

    console.log('Screen added to layout.');
}

// Call this function after the existing addButtons function
addScreenButton();

function addButtons() {
    let consoleTypes = ["", "nes", "snes", "n64", "gbc", "gba", "ds"];

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
            } else if (buttonName === 'screenInput') {
                // Check if the item represents a touch screen input
                return item.inputs && item.inputs.x === 'touchScreenX' && item.inputs.y === 'touchScreenY';
            } else {
                // Default check for other buttons
                return Array.isArray(item.inputs) && item.inputs.includes(buttonName);
            }
        });
    }

    // Function to create a button and add it to the container
    function createButton(buttonName, consoleType) {
        let button = document.createElement('button');
        if (buttonName === "screenInput") {
            button.innerText = "Touch Screen";
        } else if (buttonName === "toggleFastForward") {
            button.innerText = "Toggle Fast Forward";
        } else if (buttonName === "fastForward") {
            button.innerText = "Fast Forward";
        } else if (buttonName === "quickSave") {
            button.innerText = "Quick Save";
        } else if (buttonName === "quickLoad") {
            button.innerText = "Quick Load";
        } else {
            button.innerText = buttonName;
        }
        button.id = buttonName;
        button.className = 'console-button button button--primary';
        button.addEventListener('click', function() {
            addButtonToJsonAndLayout(buttonName, consoleType);
            button.remove(); // Remove the button from the button container after it's added
        });
        buttonContainer.appendChild(button);
    }

    // Add event listener to all console buttons
    const consoleButtons = document.querySelectorAll('.console-button');
    consoleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Wait for the JSON to be updated before refreshing the view
            setTimeout(() => {
                updateJsonView();
            }, 0);
        });
    });

    // Function to add the button configuration to the JSON array and layout-object
    function addButtonToJsonAndLayout(buttonName, consoleType) {

        let layoutObjectWidth = document.getElementById('layout-object').clientWidth;
        let layoutObjectHeight = document.getElementById('layout-object').clientHeight;
        let layoutParts = layoutSelection.split(" ");
        let device = layoutParts[0];
        let layout = layoutParts[1];
        let orientation = getSelectedOrientation();

        let buttonFormat;

        // Handle special cases for d-pad, thumbstick, and screen input
        if (buttonName === 'd-pad') {
            buttonFormat = {
                "inputs": {
                    "up": "up",
                    "down": "down",
                    "left": "left",
                    "right": "right"
                },
                "frame": {
                    "x": layoutObjectWidth / 2 - 60,
                    "y": layoutObjectHeight / 2 - 60,
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
                    "x": layoutObjectWidth / 2 - 25,
                    "y": layoutObjectHeight / 2 - 25,
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
        } else if (buttonName === 'screenInput') {
            buttonFormat = {
                "inputs": {
                    "x": "touchScreenX",
                    "y": "touchScreenY"
                },
                "frame": {
                    "x": layoutObjectWidth / 2 - 100,
                    "y": layoutObjectHeight / 2 - 75,
                    "width": 200,
                    "height": 150
                },
                "extendedEdges": {
                    "top": 0,
                    "bottom": 0,
                    "left": 0,
                    "right": 0
                }
            };
        } else {
            // Default format for other buttons
            buttonFormat = {
                "inputs": [buttonName],
                "frame": {
                    "x": layoutObjectWidth / 2 - 25,
                    "y": layoutObjectHeight / 2 - 25,
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
        buttonDiv.classList.add('unlocked');

        // Append the button div to the layout-object
        layoutObject.appendChild(buttonDiv);

        loadLayout();

        console.log(`${buttonName} added to layout.`);
    }
}

function restartLayout() {
    // Show confirmation dialog
    if (!confirm("Are you sure you want to restart this layout?")) {
        return; // If user cancels, exit the function
    }

    let consoleSelected = consoleSelect.value;
    console.log(consoleSelected);
    let layoutParts = layoutSelection.split(" ");
    let device = layoutParts[0];
    let layout = layoutParts[1];
    let orientation = getSelectedOrientation();

    // Remove all items and screens from the JSON
    defaultJsonOutput.representations[device][layout][orientation].items = [];
    defaultJsonOutput.representations[device][layout][orientation].screens = [];

    // Remove all layout items and screen items from the DOM
    const layoutObject = document.getElementById('layout-object');
    const itemsToRemove = layoutObject.querySelectorAll('.layout-item, .screen-item');
    itemsToRemove.forEach(item => item.remove());

    // Update the JSON view
    updateJson();

    // Reload the layout
    loadLayout();

    console.log("Layout restarted. All items removed.");

    let buttonContainer = document.getElementById('buttons-container');
    buttonContainer.innerHTML = ''; // Clear existing buttons
   

    let buttons = buttonConfigs[consoleSelected];
    if (buttons) {
        buttons.forEach(buttonName => {
            let button = document.createElement('button');
            if (buttonName === "screenInput") {
                button.innerText = "Touch Screen";
            } else if (buttonName === "toggleFastForward") {
                button.innerText = "Toggle Fast Forward";
            } else if (buttonName === "fastForward") {
                button.innerText = "Fast Forward";
            } else if (buttonName === "quickSave") {
                button.innerText = "Quick Save";
            } else if (buttonName === "quickLoad") {
                button.innerText = "Quick Load";
            } else {
                button.innerText = buttonName;
            }
            button.id = buttonName;
            button.className = 'console-button button button--primary';
            button.addEventListener('click', function() {
                addButtonToJsonAndLayout(buttonName, consoleSelected);
                button.remove(); // Remove the button from the button container after it's added
            });
            buttonContainer.appendChild(button);
        });
    }

    // Add the "Add Screen" button
    let addScreenButton = document.createElement('button');
    addScreenButton.innerText = 'Add Screen';
    addScreenButton.id = 'add-screen-button';
    addScreenButton.className = 'console-button button button--primary';
    addScreenButton.addEventListener('click', function() {
        addScreenToJsonAndLayout();
        // this.remove(); // Remove the button after it's clicked
    });
    buttonContainer.appendChild(addScreenButton);

    // Add event listener to all console buttons
    const consoleButtons = document.querySelectorAll('.console-button');
    consoleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Wait for the JSON to be updated before refreshing the view
            setTimeout(() => {
                updateJson();
            }, 0);
        });
    });

    console.log(`Buttons-container populated with all possible buttons for ${consoleSelected}.`);
}
// Function to add the button configuration to the JSON array and layout-object
function addButtonToJsonAndLayout(buttonName, consoleType) {

    let layoutObjectWidth = document.getElementById('layout-object').clientWidth;
    let layoutObjectHeight = document.getElementById('layout-object').clientHeight;
    let layoutParts = layoutSelection.split(" ");
    let device = layoutParts[0];
    let layout = layoutParts[1];
    let orientation = getSelectedOrientation();

    let buttonFormat;

    // Handle special cases for d-pad, thumbstick, and screen input
    if (buttonName === 'd-pad') {
        buttonFormat = {
            "inputs": {
                "up": "up",
                "down": "down",
                "left": "left",
                "right": "right"
            },
            "frame": {
                "x": layoutObjectWidth / 2 - 60,
                "y": layoutObjectHeight / 2 - 60,
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
                "x": layoutObjectWidth / 2 - 25,
                "y": layoutObjectHeight / 2 - 25,
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
    } else if (buttonName === 'screenInput') {
        buttonFormat = {
            "inputs": {
                "x": "touchScreenX",
                "y": "touchScreenY"
            },
            "frame": {
                "x": layoutObjectWidth / 2 - 100,
                "y": layoutObjectHeight / 2 - 75,
                "width": 200,
                "height": 150
            },
            "extendedEdges": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            }
        };
    } else {
        // Default format for other buttons
        buttonFormat = {
            "inputs": [buttonName],
            "frame": {
                "x": layoutObjectWidth / 2 - 25,
                "y": layoutObjectHeight / 2 - 25,
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
    buttonDiv.classList.add('unlocked');

    // Append the button div to the layout-object
    layoutObject.appendChild(buttonDiv);

    loadLayout();

    console.log(`${buttonName} added to layout.`);
}

// Add event listener to the new button
document.getElementById('remove-all-buttons').addEventListener('click', restartLayout);

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
        document.getElementById('nameInput').value = jsonContent.name;
        console.log(`Name field set to: ${jsonContent.name}`);
    } else {
        console.log("Name field is missing in the JSON.");
    }
}

function placeGameTypeIdentifierInInput(jsonContent) {
    // Check if the "gameTypeIdentifier" field exists in the JSON
    if (jsonContent.gameTypeIdentifier) {
        document.getElementById('identifierInput').value = jsonContent.gameTypeIdentifier;
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
        if (device !== 'tv') {
            for (let layout in jsonContent.representations[device]) {
                for (let orientation in jsonContent.representations[device][layout]) {
                    jsonContent.representations[device][layout][orientation].items.forEach(item => {
                        addDefaultEdges(item);
                    });
                }
            }
        }
    }

    return jsonContent;
}

function selectConsoleBasedOnIdentifier(jsonContent) {
    const identifierMapping = {
        "com.rileytestut.delta.game.n64": "n64",
        "com.rileytestut.delta.game.gba": "gba",
        "com.rileytestut.delta.game.gbc": "gbc",
        "com.rileytestut.delta.game.nes": "nes",
        "com.rileytestut.delta.game.snes": "snes",
        "com.rileytestut.delta.game.ds": "ds"
    };

    // Check the identifier at the top level of the JSON
    let identifier = jsonContent.gameTypeIdentifier;
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


// Define layoutOptions as a global variable
const layoutOptions = layoutTypes.flatMap(layout => {
    if (layout === "") return []; // Skip empty option
    return orientationTypes.map(orientation => `${layout} - ${orientation}`);
});

// Update the populateImageLayoutSelect function
function populateImageLayoutSelect() {
    const imageLayoutSelect = document.getElementById('imageLayoutSelect');
    
    //const imageLayoutButtons = document.getElementById('image-layout-buttons');

    imageLayoutSelect.innerHTML = '';

    // Populate the select element using the global layoutOptions
    layoutOptions.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option.toUpperCase();
        imageLayoutSelect.appendChild(optionElement);
    });

    // // Populate the select element using the global layoutOptions
    // layoutOptions.forEach(option => {
    //     let optionElement = document.createElement('button');
    //     optionElement.value = option;
    //     optionElement.text = option.toUpperCase();
    //     optionElement.innerHTML = option.toUpperCase();
    //     optionElement.id = option.replace(/\s+/g, '-');
    //     optionElement.classList.add('button', 'button--secondary');
    //     imageLayoutButtons.appendChild(optionElement);
    // });
}

function getFileNameForCurrentLayout() {
    const currentState = getCurrentState();
    return `${currentState.device}_${currentState.layout}_${currentState.orientation}.pdf`;
}

// Add event listener to imageLayoutSelect
document.getElementById('imageLayoutSelect').addEventListener('change', function() {
    const selectedLayout = this.value;
    document.querySelectorAll('#imageContainer .image-wrapper').forEach(wrapper => {
        wrapper.style.display = wrapper.id === `image-${selectedLayout.replace(/\s+/g, '-')}` ? 'flex' : 'none';
    });
});

// Add event listener to layout select
selectLayout.addEventListener('change', function() {
    layoutSelection = selectLayout.value; // Update the layoutSelection value
    document.getElementById('layout-object').style.backgroundImage = 'unset';
    document.querySelector('.item-name').style.display = "none";
    updateLayoutBackground();
});

// Add event listeners to orientation radio buttons
document.querySelectorAll('input[name="orientation"]').forEach((radio) => {
        radio.addEventListener('change', function() {
        document.getElementById('layout-object').style.backgroundImage = 'unset';
        updateLayoutBackground();
    })}
);

// Call these functions to initialize
populateImageLayoutSelect();

// Update the file input to accept PDFs as well
document.getElementById('imageUpload').accept = "image/*,application/pdf";

function updateDefaultJsonOutput(layoutKey, fileName) {
    let [device, layout] = layoutKey.split(/\s|-/).map(s => s.trim());
    
    // Extract orientation from filename
    let orientation = fileName.toLowerCase().includes('landscape') ? 'landscape' : 
                      fileName.toLowerCase().includes('portrait') ? 'portrait' : 
                      null;

    // If orientation wasn't found in filename, use the one from layoutKey
    if (!orientation) {
        orientation = layoutKey.toLowerCase().includes('landscape') ? 'landscape' : 
                      layoutKey.toLowerCase().includes('portrait') ? 'portrait' : 
                      null;
    }

    if (!orientation) {
        console.error(`Could not determine orientation for ${layoutKey} with filename: ${fileName}`);
        return;
    }

    if (defaultJsonOutput.representations[device] &&
        defaultJsonOutput.representations[device][layout] &&
        defaultJsonOutput.representations[device][layout][orientation] &&
        defaultJsonOutput.representations[device][layout][orientation].assets) {
        if (fileName.toLowerCase().includes('.png')) {
            defaultJsonOutput.representations[device][layout][orientation].assets.large = fileName;
            // Remove the 'resizable' key if it exists
            delete defaultJsonOutput.representations[device][layout][orientation].assets.resizable;
        } else {
            defaultJsonOutput.representations[device][layout][orientation].assets.resizable = fileName;
        }
        console.log(`Updated defaultJsonOutput for ${device} ${layout} ${orientation} with filename: ${fileName}`);
    } else {
        console.error(`Could not update defaultJsonOutput for ${device} ${layout} ${orientation}. Path does not exist.`);
    }
}

function getSelectedOrientation() {
    return document.querySelector('input[name="orientation"]:checked').id;
}

// Add a new button for uploading the .zip file
const zipUploadButton = document.createElement('button');
zipUploadButton.id = 'uploadZipButton';
zipUploadButton.innerHTML = '<i class="fa-solid fa-file-import"></i>&nbsp;&nbsp;Import';
zipUploadButton.classList = 'button button--primary';

document.getElementById('file-actions').appendChild(zipUploadButton);

const zipUploadInput = document.createElement('input');
zipUploadInput.type = 'file';
zipUploadInput.id = 'zipUpload';
zipUploadInput.accept = '.zip,.deltaskin';
zipUploadInput.style.display = 'none';
document.body.appendChild(zipUploadInput);

zipUploadButton.addEventListener('click', () => {
    zipUploadInput.click();
});

zipUploadInput.addEventListener('change', handleZipUpload);

function getFileType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension;
}

function displayUploadedImages() {
    const imageContainer = document.getElementById('imageContainer');
    const imageList = document.getElementById('image-list');
    const ul = imageList.querySelector('ul') || document.createElement('ul');

    if (!imageList.contains(ul)) {
        imageList.appendChild(ul);
    }

    for (const [layoutKey, imageUrl] of Object.entries(layoutImages)) {
        // Check if this image is already in the list
        if (!ul.querySelector(`li[data-layout-key="${layoutKey}"]`)) {
            // Create list item
            const listItem = document.createElement('li');
            listItem.setAttribute('data-layout-key', layoutKey);
            
            const imageActionItems = document.createElement('div');
            imageActionItems.className = 'image-action-items';
            
            const listItemDeleteButton = document.createElement('button');
            listItemDeleteButton.className = 'remove-button';
            listItemDeleteButton.classList.add('button', 'button--primary');
            listItemDeleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            
            const listItemViewButton = document.createElement('button');
            listItemViewButton.className = 'view-button';
            listItemViewButton.classList.add('button', 'button--primary');
            listItemViewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
            
            imageActionItems.appendChild(listItemViewButton);
            imageActionItems.appendChild(listItemDeleteButton);
            
            
            listItem.appendChild(document.createTextNode(layoutKey));
            listItem.appendChild(imageActionItems);
            
            ul.insertBefore(listItem, ul.firstChild);

            listItemDeleteButton.onclick = function(event) {
                event.stopPropagation();
                document.getElementById('layout-object').style.backgroundImage = 'unset';
                URL.revokeObjectURL(layoutImages[layoutKey]);
                const currentImageSelection = convertImageLayoutSelectionToJsonKeys();
                defaultJsonOutput.representations[currentImageSelection.device][currentImageSelection.layout][currentImageSelection.orientation].assets.resizable = "";
                
                listItem.remove();
                
                const [device, layout, orientation] = layoutKey.split(' - ');
                if (defaultJsonOutput.representations[device] &&
                    defaultJsonOutput.representations[device][layout] &&
                    defaultJsonOutput.representations[device][layout][orientation]) {
                    delete defaultJsonOutput.representations[device][layout][orientation].assets;
                }
                
                updateJson();
                delete layoutImages[layoutKey];
                
                const imgWrapper = document.getElementById(`image-${layoutKey.replace(/\s+/g, '-')}`);
                if (imgWrapper) {
                    imgWrapper.remove();
                }
            };
            
            listItemViewButton.onclick = function(event) {
                const [device, layout, orientation] = layoutKey.split(/\s+|-/).filter(Boolean).map(word => word.replace(/\s|-/g, ''));
                console.log([device, layout, orientation]);
                
                const layoutSelect = document.getElementById('layoutSelect');
                layoutSelect.value = `${device} ${layout}`;
                
                const orientationRadio = document.getElementById(orientation);
                if (orientationRadio) {
                    orientationRadio.checked = true;
                }
                
                layoutSelect.dispatchEvent(new Event('change'));
                
                if (orientationRadio) {
                    orientationRadio.dispatchEvent(new Event('change'));
                }
                
                updateLayoutBackground();
                loadLayout();
            };

            // Create image wrapper
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'image-wrapper';
            imgWrapper.id = `image-${layoutKey.replace(/\s+/g, '-')}`;
            imgWrapper.style.display = 'none';

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = layoutKey;
            img.style.height = 'auto';

            imgWrapper.appendChild(img);
            imageContainer.appendChild(imgWrapper);

            // Add click event to list item
            listItem.addEventListener('click', function() {
                ul.querySelectorAll('li').forEach(item => item.classList.remove('highlighted'));
                this.classList.add('highlighted');
                imageContainer.querySelectorAll('.image-wrapper').forEach(wrapper => wrapper.style.display = 'none');
                imgWrapper.style.display = 'flex';
            });
        }
    } 

    updateLayoutBackground();
}

function updateLayoutBackground() {
    let currentState = getCurrentState();
    let currentDevice = currentState.device;
    let currentLayout = currentState.layout;
    let currentOrientation = currentState.orientation;

    const layoutObject = document.getElementById('layout-object');
    const layoutKey = `${currentDevice} ${currentLayout} - ${currentOrientation}`;
    if (selectedLayout && layoutImages[layoutKey]) {
        layoutObject.style.backgroundImage = `url(${layoutImages[layoutKey]})`;
        layoutObject.style.backgroundSize = 'contain';
        layoutObject.style.backgroundPosition = 'center';
        layoutObject.style.backgroundRepeat = 'no-repeat';
    }
}

const saveProjectButton = document.createElement('button');
saveProjectButton.id = 'saveProjectButton';
saveProjectButton.classList = 'button button--primary';
saveProjectButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>&nbsp;&nbsp;Save';
document.getElementById('header-actions').appendChild(saveProjectButton);

saveProjectButton.addEventListener('click', saveProjectAsZip);

async function saveProjectAsZip() {
    const zip = new JSZip();

    zip.file("info.json", JSON.stringify(defaultJsonOutput, null, 2));

    function getCorrectFilename(device, layout, orientation) {
        const representation = defaultJsonOutput.representations[device][layout][orientation];
        if (representation && representation.assets) {
            if (representation.assets.resizable) {
                return representation.assets.resizable;
            }
            if (representation.assets.large) {
                return representation.assets.large;
            }
        }
        return null;
    }

    for (const [layoutKey, imageDataUrl] of Object.entries(layoutImages)) {
        const [device, layout] = layoutKey.split(/\s|-/).map(s => s.trim());
        
        let orientation = layoutKey.toLowerCase().includes('landscape') ? 'landscape' : 
                          layoutKey.toLowerCase().includes('portrait') ? 'portrait' : 
                          null;

        if (!orientation) {
            console.error(`Could not determine orientation for ${layoutKey}`);
            continue;
        }

        const correctFilename = getCorrectFilename(device, layout, orientation);

        if (!correctFilename) {
            console.error(`Correct filename not found for ${layoutKey}`);
            continue;
        }

        const img = new Image();
        img.src = imageDataUrl;

        await new Promise((resolve) => {
            img.onload = () => {
                const representation = defaultJsonOutput.representations[device][layout][orientation];
                if (representation.assets.resizable) {
                    const pdf = new jspdf.jsPDF({
                        orientation: img.width > img.height ? 'l' : 'p',
                        unit: 'px',
                        format: [img.width, img.height]
                    });

                    pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
                    
                    zip.file(correctFilename, pdf.output('arraybuffer'));
                } else if (representation.assets.large) {
                    // Convert image data URL to Blob
                    fetch(imageDataUrl)
                        .then(res => res.blob())
                        .then(blob => {
                            zip.file(correctFilename, blob);
                        });
                }

                resolve();
            };
        });

        if (thumbstickImageFile) {
            const thumbstickImg = new Image();
            thumbstickImg.src = URL.createObjectURL(thumbstickImageFile);

            await new Promise((resolve) => {
                thumbstickImg.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = thumbstickImg.width;
                    canvas.height = thumbstickImg.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(thumbstickImg, 0, 0);

                    canvas.toBlob((blob) => {
                        zip.file(thumbstickImageFileName, blob);
                        resolve();
                    }, 'image/png');
                };
            });
        }

    // Change the icon to a "loading" icon
    const saveButton = document.getElementById('saveProjectButton');
    const originalIconClass = saveButton.querySelector('i').className;
    saveButton.querySelector('i').className = 'fa-solid fa-spinner'; // Replace with the actual class for the loading icon
    // Add a CSS class to make the icon rotate
    saveButton.querySelector('i').classList.add('rotate-icon');

    // Generate the zip content
    const content = await zip.generateAsync({type: "blob"});

    // Revert the icon back to the original icon
    saveButton.querySelector('i').className = originalIconClass;
    }

    const content = await zip.generateAsync({type: "blob"});

    let fileName = defaultJsonOutput.name || "delta_skin_project";
    fileName = fileName.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');

    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `${fileName}.deltaskin`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function updateMetadata() {
    const nameInput = document.getElementById('nameInput').value;
    defaultJsonOutput.name = nameInput;

    const formattedName = nameInput.toLowerCase().replace(/\s+/g, '-');
    defaultJsonOutput.identifier = `com.rileytestut.delta.game.${formattedName}`;

    document.getElementById('identifierInput').value = defaultJsonOutput.identifier;

    defaultJsonOutput.debug = document.getElementById('debugCheckbox').checked;

    updateJson();
}


document.getElementById('nameInput').addEventListener('input', updateMetadata);
document.getElementById('debugCheckbox').addEventListener('change', updateMetadata);
document.getElementById('consoleSelect').addEventListener('change', updateMetadata);

document.getElementById('consoleSelect').addEventListener('change', function() {
    const selectedConsole = this.value;
    if (selectedConsole) {
        defaultJsonOutput.gameTypeIdentifier = `com.rileytestut.delta.game.${selectedConsole}`;
        document.querySelector('.item-name').style.display = "none";
        document.getElementById('identifierInput').value = defaultJsonOutput.gameTypeIdentifier;
        updateMetadata();

        loadLayout();
    }
});

document.querySelectorAll('input[name="orientation"]').forEach(radio => {
    radio.addEventListener('change', updateMetadata);
});

updateMetadata();

//transform slider

// Add this to your existing JavaScript code

const scaleSlider = document.getElementById('scaleSlider');
const scaleValue = document.getElementById('scaleValue');
const layoutObject = document.getElementById('layout-object');

scaleSlider.addEventListener('input', function() {
    const scale = this.value / 100;
    scaleValue.textContent = `${this.value}%`;
    layoutObject.style.transform = `scale(${scale})`;
    layoutObject.style.transformOrigin = 'center center';
});

// Function to update layout object size
function updateLayoutObjectSize() {
    const scale = scaleSlider.value / 100;
    const width = layoutObject.offsetWidth;
    const height = layoutObject.offsetHeight;
    layoutObject.style.width = `${width / scale}px`;
    layoutObject.style.height = `${height / scale}px`;
}

// Add this to your window resize event listener if you have one, or create one:
window.addEventListener('resize', updateLayoutObjectSize);

const enableEditingCheckbox = document.getElementById('enableEditing');
const codeElement = document.getElementById('code');
const saveJsonButton = document.getElementById('save-json');

enableEditingCheckbox.addEventListener('change', function() {
    codeElement.contentEditable = this.checked;
    codeElement.style.backgroundColor = this.checked ? 'black' : 'lightgrey';
    codeElement.style.padding = '10px';
    saveJsonButton.disabled = !this.checked;
    saveJsonButton.style.opacity = this.checked ? '1' : '0.5';
});

// Initialize the state
codeElement.contentEditable = enableEditingCheckbox.checked;
codeElement.style.backgroundColor = enableEditingCheckbox.checked ? 'black' : 'lightgrey';
codeElement.style.padding = '10px';
saveJsonButton.disabled = !enableEditingCheckbox.checked;
saveJsonButton.style.opacity = enableEditingCheckbox.checked ? '1' : '0.5';

// Modify the existing save-json event listener
saveJsonButton.addEventListener('click', function() {
    if (!enableEditingCheckbox.checked) {
        alert('Editing is disabled. Enable editing to save changes.');
        return;
    }

    const codeContent = document.getElementById('code').textContent;
    try {
        // Trim whitespace and remove any non-printable characters
        const cleanedContent = codeContent.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
        const newJson = JSON.parse(cleanedContent);
        // Update your defaultJsonOutput variable
        defaultJsonOutput = newJson;
         // Update the displayed JSON
         updateJson();
        // Call your function to update the layout
        if (layoutSelection) {
            loadLayout();
        }
        alert('JSON saved!');
    } catch (error) {
        alert('Error parsing JSON. Please check your syntax.');
        console.error('JSON parse error:', error);
        console.log('Problematic JSON string:', codeContent);
    }
});

function showLoadingModal() {
    document.getElementById('loadingModal').style.display = 'flex';
  }
  
  function hideLoadingModal() {
    document.getElementById('loadingModal').style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            accordion.classList.toggle('active');
        });
    });
});

// Create the "Save Layout PNG" button
const saveLayoutPngButton = document.createElement('button');
saveLayoutPngButton.id = 'saveLayoutPngButton';
saveLayoutPngButton.classList = 'button button--primary';
saveLayoutPngButton.innerHTML = '<i class="fa-solid fa-image"></i>&nbsp;&nbsp;Save Layout PNG';
document.getElementById('saveAsPngContainer').appendChild(saveLayoutPngButton);

// Add event listener to the new button
saveLayoutPngButton.addEventListener('click', saveLayoutAsPng);

function saveLayoutAsPng() {
    console.log("saveLayoutAsPng function called");
    const layoutObject = document.getElementById('layout-object');
    if (!layoutObject) {
        console.error("Layout object not found");
        alert("Error: Layout object not found");
        return;
    }
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match the layout object
    canvas.width = layoutObject.offsetWidth;
    canvas.height = layoutObject.offsetHeight;
    console.log(`Canvas size set to ${canvas.width}x${canvas.height}`);
    
    // Draw white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the background image if it exists
    if (layoutObject.style.backgroundImage) {
        console.log("Background image found, attempting to draw");
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            drawLayoutElements();
        };
        img.onerror = (error) => {
            console.error("Error loading background image:", error);
            drawLayoutElements();
        };
        img.src = layoutObject.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    } else {
        console.log("No background image, drawing layout elements directly");
        drawLayoutElements();
    }
    
    function drawLayoutElements() {
        console.log("Drawing layout elements");
        // Draw all child elements (buttons, screens, etc.)
        layoutObject.querySelectorAll('.layout-item, .screen-item').forEach(item => {
            const computedStyle = window.getComputedStyle(item);
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);
            const paddingTop = parseFloat(computedStyle.paddingTop);
            const paddingBottom = parseFloat(computedStyle.paddingBottom);

            // Draw the padding area
            ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';  // Light gray with 50% opacity
            ctx.fillRect(
                item.offsetLeft,
                item.offsetTop,
                item.offsetWidth,
                item.offsetHeight
            );

            // Draw the main element area
            ctx.fillStyle = computedStyle.backgroundColor || 'rgba(220, 220, 220, 0.8)';
            ctx.fillRect(
                item.offsetLeft + paddingLeft,
                item.offsetTop + paddingTop,
                item.offsetWidth - paddingLeft - paddingRight,
                item.offsetHeight - paddingTop - paddingBottom
            );
            
            // Draw border
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';  // Black with 50% opacity
            ctx.strokeRect(
                item.offsetLeft,
                item.offsetTop,
                item.offsetWidth,
                item.offsetHeight
            );
            
            // Draw text
            ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';  // Black with 70% opacity
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                item.innerText,
                item.offsetLeft + item.offsetWidth / 2,
                item.offsetTop + item.offsetHeight / 2
            );
        });
        
        console.log("Attempting to save canvas as PNG");
        // Convert canvas to PNG and trigger download
        try {
            canvas.toBlob((blob) => {
                if (!blob) {
                    console.error("Failed to create blob from canvas");
                    alert("Error: Failed to create image file");
                    return;
                }
                const link = document.createElement('a');
                // Get the layout name from the selected layout and orientation
                const layoutName = `${layoutSelection}_${document.querySelector('input[name="orientation"]:checked').id}`;
                link.download = `${layoutName}.png`;
                link.href = URL.createObjectURL(blob);
                document.body.appendChild(link);  // Temporarily add to document
                link.click();
                document.body.removeChild(link);  // Remove from document
                URL.revokeObjectURL(link.href);
                console.log(`PNG file "${layoutName}.png" should be downloading now`);
            }, 'image/png');
        } catch (error) {
            console.error("Error saving canvas as PNG:", error);
            alert("Error: Failed to save image");
        }
    }
}

let thumbstickImageFile;

let thumbstickImageFileName;

document.getElementById('thubstickImageUpload').addEventListener('change', function(event) {
    thumbstickImageFile = event.target.files[0];
});

document.getElementById('uploadThumbstickButton').addEventListener('click', function() {
    handleThumbstick();
});

function handleThumbstick(thumbstick) {
    if (thumbstickImageFile) {
        const thumbstickImageContainer = document.getElementById('thumbstickImageContainer');
        thumbstickImageContainer.innerHTML = ''; // Clear any existing content

        const img = document.createElement('img');
        //HERE
        img.src = URL.createObjectURL(thumbstickImageFile);
        img.onload = function() {
            URL.revokeObjectURL(img.src); // Free up memory
        };

        // Set the image inside the padding of #thumbstick
        const thumbstickElement = document.querySelector('#thumbstick .layout-item-inner');
        if (thumbstickElement) {
            

            const thumbstickStyle = window.getComputedStyle(document.getElementById("thumbstick"));
            const paddingTop = thumbstickStyle.getPropertyValue('padding-top');
            const paddingRight = thumbstickStyle.getPropertyValue('padding-right');
            const paddingBottom = thumbstickStyle.getPropertyValue('padding-bottom');
            const paddingLeft = thumbstickStyle.getPropertyValue('padding-left');
            //console.log(`Padding values - Top: ${paddingTop}, Right: ${paddingRight}, Bottom: ${paddingBottom}, Left: ${paddingLeft}`);
            
            const innerImg = document.createElement('img');
            innerImg.src = img.src;
            innerImg.style.position = "absolute";

            getCurrentState();
            // Get the current state
            const { device, layout, orientation } = getCurrentState();
            
            // Find the thumbstick item in the current representation
            const items = defaultJsonOutput.representations[device][layout][orientation].items;
            const thumbstickItem = items.find(item => item.thumbstick);
            
            if (thumbstickItem && thumbstickItem.thumbstick) {
                const { width, height } = thumbstickItem.thumbstick;
                
                // Set the image dimensions to match the thumbstick width and height
                innerImg.style.width = `${width}px`;
                innerImg.style.height = `${height}px`;
                
                console.log(`Thumbstick image dimensions set to ${width}x${height}`);
            } else {
                console.warn('Thumbstick item not found in the current representation');
            }

            //innerImg.style.objectFit = 'contain';
            innerImg.style.backgroundPosition = "center";
            thumbstickElement.innerHTML = ''; // Clear any existing content
            thumbstickElement.appendChild(innerImg);

            // Create a 10px by 10px crosshair in the center of the layout-item
            const crosshair = document.createElement('div');
            crosshair.style.position = 'absolute';
            crosshair.style.width = '10px';
            crosshair.style.height = '10px';
            crosshair.style.top = '50%';
            crosshair.style.left = '50%';
            crosshair.style.transform = 'translate(-50%, -50%)';
            crosshair.style.zIndex = '10';
            crosshair.style.backgroundImage = 'linear-gradient(to bottom, transparent 45%, red 45%, red 55%, transparent 55%), linear-gradient(to right, transparent 45%, red 45%, red 55%, transparent 55%)';
            document.querySelector('#thumbstick .layout-item-inner').appendChild(crosshair);
        }


        thumbstickImageContainer.appendChild(img);
        
        // Store the uploaded image file name
        thumbstickImageFileName = thumbstickImageFile.name;
    } else {
        alert('Please select a thumbstick image file first.');
    }

    let jsonString = defaultJsonOutput;
    
    function updateThumbstickNameInJson(jsonObject, newName) {
        for (const device in jsonObject.representations) {
            for (const layout in jsonObject.representations[device]) {
                for (const orientation in jsonObject.representations[device][layout]) {
                    const items = jsonObject.representations[device][layout][orientation].items;
                    items.forEach(item => {
                        if (item.thumbstick && item.thumbstick.name) {
                            item.thumbstick.name = newName;
                            updateJson();
                        }
                    });
                }
            }
        }
    }

    const newThumbstickName = thumbstickImageFile.name;
    updateThumbstickNameInJson(defaultJsonOutput, newThumbstickName);
    updateJson();
    updateJsonView();
    console.log(`Updated thumbstick.name to ${newThumbstickName} in the JSON.`);
    console.log('thumbstick file name: ' + thumbstickImageFileName);
}

// Function to update the JSON view in #code
function updateJsonView() {
    const jsonString = JSON.stringify(defaultJsonOutput, null, 4);
    document.getElementById('code').textContent = jsonString;
}

function enableKeyboardMovement() {
    document.addEventListener('keydown', function(event) {
        

        const selectedItem = document.querySelector('.layout-item.selected, .screen-item.selected');
        if (!selectedItem || selectedItem.classList.contains('locked')) return;

        let dx = 0, dy = 0;
        switch (event.key) {
            case 'ArrowLeft':
                dx = -1;
                break;
            case 'ArrowRight':
                dx = 1;
                break;
            case 'ArrowUp':
                dy = -1;
                break;
            case 'ArrowDown':
                dy = 1;
                break;
            default:
                return; // Exit if not an arrow key
        }

        event.preventDefault(); // Prevent default scrolling behavior

        // Get current position
        let currentLeft = parseInt(selectedItem.style.left) || 0;
        let currentTop = parseInt(selectedItem.style.top) || 0;

        // Update position
        selectedItem.style.left = (currentLeft + dx) + 'px';
        selectedItem.style.top = (currentTop + dy) + 'px';

        // Update JSON and UI
        if (selectedItem.classList.contains('screen-item')) {
            updateScreenPosition(selectedItem.id, currentLeft + dx, currentTop + dy);
        } else {
            const item = getCurrentElement(selectedItem.id);
            const extendedLeft = item && item.extendedEdges ? item.extendedEdges.left : 0;
            const extendedTop = item && item.extendedEdges ? item.extendedEdges.top : 0;
            updateItemPosition(selectedItem.id, currentLeft + dx + extendedLeft, currentTop + dy + extendedTop);
            
            // Handle thumbstick width and height
            if (item && item.thumbstick) {
                const thumbstickWidth = item.thumbstick.width;
                const thumbstickHeight = item.thumbstick.height;
                //updateThumbstickSize(selectedItem.id, thumbstickWidth, thumbstickHeight);
            }
        }
        updateJson();

        // Update focus item inputs
        const focusItemDiv = document.querySelector('.focus-item');
        const xInput = focusItemDiv.querySelector('#form-x input');
        const yInput = focusItemDiv.querySelector('#form-y input');
        if (xInput) xInput.value = parseInt(xInput.value) + dx;
        if (yInput) yInput.value = parseInt(yInput.value) + dy;
    });
}

// Call this function to enable keyboard movement
enableKeyboardMovement();

// Add this function to your existing JavaScript file
function toggleTransparency() {
    const layoutItems = document.querySelectorAll('.layout-item, .layout-item-inner');
    const button = document.getElementById('toggle-transparency');
    
    layoutItems.forEach(item => {
        if (item.classList.contains('transparent')) {
            item.classList.remove('transparent');
        } else {
            item.classList.add('transparent');
        }
    });
    
    // Update button text
    button.textContent = button.textContent === 'Toggle Transparency' ? 'Restore Opacity' : 'Toggle Transparency';
}

// Add this event listener after your DOM content is loaded
document.getElementById('toggle-transparency').addEventListener('click', toggleTransparency);