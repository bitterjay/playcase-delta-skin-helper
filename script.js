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
    "name" : "Standard NES",
    "identifier" : "com.delta.nes.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.nes",
    "debug" : false,
    "representations" : {
      "iphone" : {
        "standard" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_portrait.pdf"
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
                  "x" : 22,
                  "y" : 44,
                  "width" : 120,
                  "height" : 120
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 242,
                  "y" : 73,
                  "width" : 55,
                  "height" : 55
                },
                "extendedEdges" : {
                  "right" : 23
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 171,
                  "y" : 73,
                  "width" : 55,
                  "height" : 55
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 247,
                  "y" : 172,
                  "width" : 35,
                  "height" : 14
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 186,
                  "y" : 172,
                  "width" : 35,
                  "height" : 14
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 22,
                  "y" : 201,
                  "width" : 17,
                  "height" : 16
                },
                "extendedEdges" : {
                  "left" : 22,
                  "bottom" : 23
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 240
            },
            "extendedEdges" : {
              "top" : 7,
              "bottom" : 7,
              "left" : 7,
              "right" : 7
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
                  "x": 15,
                  "y": 207,
                  "width": 153,
                  "height": 153
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 578,
                  "y": 221,
                  "width": 74,
                  "height": 74
                },
                "extendedEdges": {
                  "left": 0,
                  "down": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 513,
                  "y": 286,
                  "width": 74,
                  "height": 74
                },
                "extendedEdges": {
                  "up": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 343,
                  "y": 334,
                  "width": 73,
                  "height": 26
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 250,
                  "y": 334,
                  "width": 73,
                  "height": 26
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 297,
                  "y": 15,
                  "width": 73,
                  "height": 26
                }
              }
            ],
            "mappingSize": {
              "width": 667,
              "height": 375
            },
            "extendedEdges": {
              "top": 15,
              "bottom": 15,
              "left": 15,
              "right": 15
            },
            "translucent": true
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
                  "x" : 22,
                  "y" : 55,
                  "width" : 121,
                  "height" : 121
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 22,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 242,
                  "y" : 84,
                  "width" : 56,
                  "height" : 56
                },
                "extendedEdges" : {
                  "right" : 23
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 171,
                  "y" : 84,
                  "width" : 56,
                  "height" : 56
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 174,
                  "y" : 204,
                  "width" : 37,
                  "height" : 13
                },
                "extendedEdges": {
                  "top": 15,
                  "bottom": 15,
                  "left": 15,
                  "right": 15
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 109,
                  "y" : 204,
                  "width" : 37,
                  "height" : 13
                },
                "extendedEdges": {
                  "top": 15,
                  "bottom": 15,
                  "left": 15,
                  "right": 15
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 280,
                  "y" : 44,
                  "width" : 18,
                  "height" : 18
                },
                "extendedEdges": {
                  "top": 30,
                  "left": 15,
                  "right": 22
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 274
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
                  "x" : 30,
                  "y" : 207,
                  "width" : 153,
                  "height" : 153
                },
                "extendedEdges" : {
                  "left" : 30
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 708,
                  "y" : 221,
                  "width" : 74,
                  "height" : 74
                },
                "extendedEdges" : {
                  "bottom": 0,
                  "left": 0,
                  "right" : 30
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 643,
                  "y" : 286,
                  "width" : 74,
                  "height" : 74
                },
                "extendedEdges" : {
                  "top": 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 416,
                  "y" : 334,
                  "width" : 73,
                  "height" : 26
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 323,
                  "y" : 334,
                  "width" : 73,
                  "height" : 26
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 370,
                  "y" : 15,
                  "width" : 73,
                  "height" : 26
                }
              }
            ],
            "mappingSize" : {
              "width" : 812,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            },
            "translucent" : true
          }
        }
      }
    ,
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
                  "x": 58,
                  "y": 140,
                  "width": 151,
                  "height": 151
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 64,
                  "left": 58,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 608,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70,
                  "right": 100
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 507,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 376,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 274,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 36,
                  "y": 61,
                  "width": 23,
                  "height": 23
                },
                "extendedEdges": {
                  "top": 30,
                  "left": 36
                }
              }
            ],
            "mappingSize": {
              "width": 768,
              "height": 355
            },
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
                  "x": 18,
                  "y": 556,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 917,
                  "y": 592,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 10,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 827,
                  "y": 661,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 524,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 412,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 471,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
            },
            "extendedEdges": {
              "top": 20,
              "bottom": 20,
              "left": 20,
              "right": 20
            },
            "translucent": true
          }
        }
      ,
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
                  "x": 58,
                  "y": 140,
                  "width": 151,
                  "height": 151
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 64,
                  "left": 58,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 608,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70,
                  "right": 100
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 507,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 376,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 274,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 36,
                  "y": 61,
                  "width": 23,
                  "height": 23
                },
                "extendedEdges": {
                  "top": 30,
                  "left": 36
                }
              }
            ],
            "mappingSize": {
              "width": 768,
              "height": 355
            },
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
                  "x": 93,
                  "y": 140,
                  "width": 151,
                  "height": 151
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 64,
                  "left": 93,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 863,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70,
                  "right": 101
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 763,
                  "y": 225,
                  "width": 60,
                  "height": 60
                },
                "extendedEdges": {
                  "bottom": 70
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 504,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 402,
                  "y": 242,
                  "width": 59,
                  "height": 25
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 36,
                  "y": 61,
                  "width": 23,
                  "height": 23
                },
                "extendedEdges": {
                  "top": 30,
                  "left": 36
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 355
            },
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
    "name" : "Standard SNES",
    "identifier" : "com.delta.snes.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.snes",
    "debug" : false,
    "representations" : {
      "iphone" : {
        "standard" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_portrait.pdf"
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 250,
                  "y" : 96,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 19
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 205,
                  "y" : 141,
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
                  "x" : 0,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 224,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 124,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 8,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14,
                  "left" : 8
                }
              },
              {
                "inputs" : [
                  "y"
                ],
                "frame" : {
                  "x" : 159,
                  "y" : 96,
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
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 203,
                  "y" : 50,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 240
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
            "items" : [
              {
                "inputs" : {
                  "up" : "up",
                  "down" : "down",
                  "left" : "left",
                  "right" : "right"
                },
                "frame" : {
                  "x" : 15,
                  "y" : 199,
                  "width" : 161,
                  "height" : 161
                },
                "extendedEdges" : {
                  "left" : 20,
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
                  "x" : 578,
                  "y" : 238,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 36
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 530,
                  "y" : 287,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 35,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 15,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 552,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 344,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "left" : 10
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 251,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "right" : 10
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 299,
                  "y" : 15,
                  "width" : 73,
                  "height" : 26
                }
              },
              {
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 528,
                  "y" : 188,
                  "width" : 53,
                  "height" : 53
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
                  "x" : 480,
                  "y" : 238,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "right" : 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 667,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            },
            "translucent" : true
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 250,
                  "y" : 96,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 19
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 205,
                  "y" : 141,
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
                  "x" : 0,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 224,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 124,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 8,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 14,
                  "left" : 8
                }
              },
              {
                "inputs" : [
                  "y"
                ],
                "frame" : {
                  "x" : 159,
                  "y" : 96,
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
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 203,
                  "y" : 50,
                  "width" : 51,
                  "height" : 51
                },
                "extendedEdges" : {
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 274
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
                  "x" : 30,
                  "y" : 199,
                  "width" : 161,
                  "height" : 161
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
                  "x" : 708,
                  "y" : 238,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 51
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 660,
                  "y" : 287,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 35,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 15,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 697,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 416,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "left" : 10
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 323,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "right" : 10
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 371,
                  "y" : 15,
                  "width" : 73,
                  "height" : 26
                }
              },
              {
                "inputs" : [
                  "x"
                ],
                "frame" : {
                  "x" : 658,
                  "y" : 188,
                  "width" : 53,
                  "height" : 53
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
                  "x" : 610,
                  "y" : 238,
                  "width" : 53,
                  "height" : 53
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "right" : 0
                }
              }
            ],
            "mappingSize" : {
              "width" : 812,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            },
            "translucent" : true
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
                  "x": 56,
                  "y": 106,
                  "width": 156,
                  "height": 156
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 73,
                  "left": 60,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 700,
                  "y": 157,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "left": 0,
                  "right": 45
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 635,
                  "y": 207,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 73,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 0,
                  "y": 0,
                  "width": 167,
                  "height": 45
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 633,
                  "y": 0,
                  "width": 167,
                  "height": 45
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 442,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "left": 8
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 366,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "left": 8,
                  "right": 8
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 290,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "right": 8
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 570,
                  "y": 156,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 635,
                  "y": 106,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 10,
                  "right": 10
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 335
            },
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
                  "x": 18,
                  "y": 556,
                  "width": 194,
                  "height": 194
                },
                "extendedEdges": {
                  "left": 30,
                  "top": 30,
                  "right": 30,
                  "bottom": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 918,
                  "y": 603,
                  "width": 64,
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
                  "x": 860,
                  "y": 663,
                  "width": 64,
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
                  "l"
                ],
                "frame": {
                  "x": 18,
                  "y": 420,
                  "width": 120,
                  "height": 48
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 887,
                  "y": 420,
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
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 413,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 11
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 472,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 857,
                  "y": 544,
                  "width": 64,
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
                  "x": 799,
                  "y": 604,
                  "width": 64,
                  "height": 64
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 0,
                  "right": 0
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
            },
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
                  "x": 56,
                  "y": 106,
                  "width": 156,
                  "height": 156
                },
                "extendedEdges": {
                  "top": 30,
                  "bottom": 73,
                  "left": 60,
                  "right": 30
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 700,
                  "y": 157,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "left": 0,
                  "right": 45
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 635,
                  "y": 207,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 0,
                  "bottom": 73,
                  "left": 10,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 0,
                  "y": 0,
                  "width": 167,
                  "height": 45
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 633,
                  "y": 0,
                  "width": 167,
                  "height": 45
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 442,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "left": 8
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 366,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "left": 8,
                  "right": 8
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 290,
                  "y": 218,
                  "width": 60,
                  "height": 53
                },
                "extendedEdges": {
                  "right": 8
                }
              },
              {
                "inputs": [
                  "y"
                ],
                "frame": {
                  "x": 570,
                  "y": 156,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "top": 10,
                  "bottom": 10,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "x"
                ],
                "frame": {
                  "x": 635,
                  "y": 106,
                  "width": 55,
                  "height": 55
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 10,
                  "right": 10
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 335
            },
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
                  "right": 11
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
                  "bottom": 30,
                  "left": 60,
                  "right": 30
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 384
            },
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
    "name" : "Standard N64",
    "identifier" : "com.delta.n64.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.n64",
    "debug" : false,
    "representations" : {
      "iphone" : {
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
                  "width": 71,
                  "height": 71
                },
                "extendedEdges": {
                  "top": 20,
                  "bottom": 20,
                  "left": 20,
                  "right": 20
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
                  "top": 15,
                  "bottom": 15,
                  "left": 17,
                  "right": 7
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
                  "right": 17,
                  "top": 15
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
                  "bottom": 15
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
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 225,
                  "y": 0,
                  "width": 95,
                  "height": 30
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 144,
                  "y": 179,
                  "width": 32,
                  "height": 32
                },
                "extendedEdges": {
                  "left": 0
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
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 23
                }
              }
            ],
            "mappingSize": {
              "width": 320,
              "height": 328
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
                  "x": 575,
                  "y": 320,
                  "width": 40,
                  "height": 40
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0,
                  "right": 0
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
                  "top": 0,
                  "bottom": 0,
                  "right": 0
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
                  "top": 0,
                  "bottom": 0,
                  "left": 0
                }
              }
            ],
            "mappingSize": {
              "width": 667,
              "height": 375
            },
            "extendedEdges": {
              "top": 15,
              "bottom": 15,
              "left": 15,
              "right": 15
            },
            "translucent": true
          }
        },
        "edgeToEdge" : {
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
                  "x": 39,
                  "y": 77,
                  "width": 71,
                  "height": 71
                },
                "extendedEdges": {
                  "top": 20,
                  "bottom": 20,
                  "left": 20,
                  "right": 20
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
                  "top": 15,
                  "bottom": 15,
                  "left": 17,
                  "right": 7
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
                  "right": 17,
                  "top": 15
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
                  "bottom": 15
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
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 225,
                  "y": 0,
                  "width": 95,
                  "height": 30
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 144,
                  "y": 179,
                  "width": 32,
                  "height": 32
                },
                "extendedEdges": {
                  "left": 0
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
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 23
                }
              }
            ],
            "mappingSize": {
              "width": 320,
              "height": 362
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
                  "left": 30
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
                  "right": 30
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
                  "right": 46
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
                  "right": 30
                }
              }
            ],
            "mappingSize": {
              "width": 812,
              "height": 375
            },
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
                  "top": 10
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
                  "top": 10,
                  "left": 10
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
                  "top": 10,
                  "right": 10
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
                  "bottom": 10,
                  "left": 10
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
                  "bottom": 10
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
                  "bottom": 0,
                  "left": 10,
                  "right": 10
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
                  "left": 10,
                  "right": 10
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
                  "top": 10,
                  "bottom": 10,
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
                  "top": 10,
                  "bottom": 10,
                  "left": 0
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "top": 10
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
                  "top": 10,
                  "left": 10
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
                  "top": 10,
                  "right": 10
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
                  "bottom": 10,
                  "left": 10
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
                  "bottom": 10
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
                  "bottom": 10
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
                  "bottom": 0,
                  "left": 10,
                  "right": 10
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
                  "left": 10,
                  "right": 10
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
                  "top": 10,
                  "bottom": 10,
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
                  "top": 10,
                  "bottom": 10,
                  "left": 0
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
            },
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
                  "top": 10
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
                  "top": 10,
                  "left": 10
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
                  "top": 10,
                  "right": 10
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
                  "bottom": 10,
                  "left": 10
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
                  "bottom": 10
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
                  "bottom": 0,
                  "left": 10,
                  "right": 10
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
                  "left": 10,
                  "right": 10
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
                  "top": 10,
                  "bottom": 10,
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
                  "top": 10,
                  "bottom": 10,
                  "left": 0
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "top": 10
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
                  "top": 10,
                  "left": 10
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
                  "top": 10,
                  "right": 10
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
                  "bottom": 10,
                  "left": 10
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
                  "bottom": 10
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
                  "bottom": 10
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
                  "bottom": 0,
                  "left": 10,
                  "right": 10
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
                  "top": 0,
                  "left": 10,
                  "right": 10
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
                  "top": 10,
                  "bottom": 10,
                  "right": 0
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
                  "top": 10,
                  "bottom": 10,
                  "left": 0
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 450
            },
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
    "name" : "Standard GBC",
    "identifier" : "com.delta.gbc.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.gbc",
    "debug" : false,
    "representations" : {
      "iphone" : {
        "standard" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_portrait.pdf"
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 241,
                  "y" : 62,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 121,
                  "width" : 64,
                  "height" : 64
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 173,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 113,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 7,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "left" : 7,
                  "bottom" : 13
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 240
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
            "items" : [
              {
                "inputs" : {
                  "up" : "up",
                  "down" : "down",
                  "left" : "left",
                  "right" : "right"
                },
                "frame" : {
                  "x" : 8,
                  "y" : 231,
                  "width" : 131,
                  "height" : 131
                },
                "extendedEdges" : {
                  "left" : 15,
                  "top" : 15,
                  "right" : 15,
                  "bottom" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 587,
                  "y" : 242,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 16
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 521,
                  "y" : 295,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "bottom" : 16
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 356,
                  "y" : 334,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "bottom" : 18
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 260,
                  "y" : 334,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "bottom" : 18
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 13,
                  "y" : 18,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "left" : 13,
                  "top" : 18
                }
              }
            ],
            "gameScreenFrame" : {
              "x" : 183,
              "y" : 0,
              "width" : 300,
              "height" : 270
            },
            "mappingSize" : {
              "width" : 667,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 7,
              "bottom" : 7,
              "left" : 7,
              "right" : 7
            },
            "translucent" : false
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 241,
                  "y" : 62,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 121,
                  "width" : 64,
                  "height" : 64
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 173,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 113,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 7,
                  "y" : 211,
                  "width" : 33,
                  "height" : 16
                },
                "extendedEdges" : {
                  "left" : 7,
                  "bottom" : 13
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 274
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
                  "x" : 60,
                  "y" : 231,
                  "width" : 131,
                  "height" : 131
                },
                "extendedEdges" : {
                  "left" : 15,
                  "top" : 15,
                  "right" : 15,
                  "bottom" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 670,
                  "y" : 242,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 16
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 604,
                  "y" : 295,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "bottom" : 16
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 428,
                  "y" : 334,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "bottom" : 18
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 332,
                  "y" : 334,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "bottom" : 18
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 60,
                  "y" : 18,
                  "width" : 49,
                  "height" : 23
                },
                "extendedEdges" : {
                  "left" : 13,
                  "top" : 18
                }
              }
            ],
            "gameScreenFrame" : {
              "x" : 255,
              "y" : 0,
              "width" : 300,
              "height" : 270
            },
            "mappingSize" : {
              "width" : 812,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 7,
              "bottom" : 7,
              "left" : 7,
              "right" : 7
            },
            "translucent" : false
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
                  "x": 18,
                  "y": 238,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 693,
                  "y": 274,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "left": 0,
                  "bottom": 10
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 603,
                  "y": 343,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 412,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 300,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 359,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "x": 18,
                  "y": 556,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 917,
                  "y": 592,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 10,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 827,
                  "y": 661,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 524,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 412,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 471,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
            },
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
                  "x": 18,
                  "y": 238,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 693,
                  "y": 274,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "left": 0,
                  "bottom": 10
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 603,
                  "y": 343,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 10
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 412,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 300,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 359,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "x": 18,
                  "y": 172,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 918,
                  "y": 208,
                  "width": 87,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 828,
                  "y": 277,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 525,
                  "y": 336,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 413,
                  "y": 336,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 470,
                  "y": 18,
                  "width": 86,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 384
            },
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
    "name" : "Standard GBA",
    "identifier" : "com.delta.gba.standard",
    "gameTypeIdentifier" : "com.rileytestut.delta.game.gba",
    "debug" : false,
    "representations" : {
      "iphone" : {
        "standard" : {
          "portrait" : {
            "assets" : {
              "resizable" : "iphone_portrait.pdf"
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 241,
                  "y" : 62,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 121,
                  "width" : 64,
                  "height" : 64
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 0,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 224,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 124,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 8,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "left" : 8,
                  "bottom" : 13
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 240
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
            "items" : [
              {
                "inputs" : {
                  "up" : "up",
                  "down" : "down",
                  "left" : "left",
                  "right" : "right"
                },
                "frame" : {
                  "x" : 15,
                  "y" : 199,
                  "width" : 161,
                  "height" : 161
                },
                "extendedEdges" : {
                  "left" : 20,
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
                  "x" : 577,
                  "y" : 228,
                  "width" : 75,
                  "height" : 75
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 0,
                  "left" : 0,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 502,
                  "y" : 285,
                  "width" : 75,
                  "height" : 75
                },
                "extendedEdges" : {
                  "top" : 0,
                  "bottom" : 15,
                  "left" : 0,
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "a",
                  "b"
                ],
                "frame" : {
                  "x" : 577,
                  "y" : 303,
                  "width" : 75,
                  "height" : 57
                },
                "extendedEdges" : {
                  "top" : 0,
                  "left" : 0,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 15,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 552,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 344,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "left" : 10
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 251,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "right" : 10
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 299,
                  "y" : 15,
                  "width" : 73,
                  "height" : 26
                }
              }
            ],
            "mappingSize" : {
              "width" : 667,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            },
            "translucent" : true
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
                  "x" : 6,
                  "y" : 56,
                  "width" : 132,
                  "height" : 132
                },
                "extendedEdges" : {
                  "top" : 15,
                  "bottom" : 15,
                  "left" : 15,
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "a"
                ],
                "frame" : {
                  "x" : 241,
                  "y" : 62,
                  "width" : 64,
                  "height" : 64
                },
                "extendedEdges" : {
                  "right" : 15
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 121,
                  "width" : 64,
                  "height" : 64
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 0,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 224,
                  "y" : 0,
                  "width" : 97,
                  "height" : 29
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 176,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 124,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "bottom" : 13
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 8,
                  "y" : 205,
                  "width" : 21,
                  "height" : 21
                },
                "extendedEdges" : {
                  "left" : 8,
                  "bottom" : 13
                }
              }
            ],
            "mappingSize" : {
              "width" : 320,
              "height" : 274
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
                  "x" : 30,
                  "y" : 199,
                  "width" : 161,
                  "height" : 161
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
                  "x" : 707,
                  "y" : 228,
                  "width" : 75,
                  "height" : 75
                },
                "extendedEdges" : {
                  "bottom" : 0,
                  "right" : 30
                }
              },
              {
                "inputs" : [
                  "b"
                ],
                "frame" : {
                  "x" : 632,
                  "y" : 285,
                  "width" : 75,
                  "height" : 75
                },
                "extendedEdges" : {
                  "right" : 0
                }
              },
              {
                "inputs" : [
                  "a",
                  "b"
                ],
                "frame" : {
                  "x" : 707,
                  "y" : 303,
                  "width" : 75,
                  "height" : 57
                },
                "extendedEdges" : {
                  "top" : 0,
                  "left" : 0,
                  "right" : 30
                }
              },
              {
                "inputs" : [
                  "l"
                ],
                "frame" : {
                  "x" : 15,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "r"
                ],
                "frame" : {
                  "x" : 697,
                  "y" : 15,
                  "width" : 100,
                  "height" : 40
                }
              },
              {
                "inputs" : [
                  "start"
                ],
                "frame" : {
                  "x" : 416,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "left" : 10
                }
              },
              {
                "inputs" : [
                  "select"
                ],
                "frame" : {
                  "x" : 323,
                  "y" : 335,
                  "width" : 73,
                  "height" : 26
                },
                "extendedEdges" : {
                  "right" : 10
                }
              },
              {
                "inputs" : [
                  "menu"
                ],
                "frame" : {
                  "x" : 371,
                  "y" : 15,
                  "width" : 73,
                  "height" : 26
                }
              }
            ],
            "mappingSize" : {
              "width" : 812,
              "height" : 375
            },
            "extendedEdges" : {
              "top" : 15,
              "bottom" : 15,
              "left" : 15,
              "right" : 15
            },
            "translucent" : true
          }
        }
      }
    ,
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
                  "x": 18,
                  "y": 238,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 693,
                  "y": 274,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 603,
                  "y": 343,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "a",
                  "b"
                ],
                "frame": {
                  "x": 692,
                  "y": 363,
                  "width": 90,
                  "height": 69
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0
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
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 412,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 300,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 359,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "x": 18,
                  "y": 556,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 917,
                  "y": 592,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 827,
                  "y": 661,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "a",
                  "b"
                ],
                "frame": {
                  "x": 916,
                  "y": 681,
                  "width": 90,
                  "height": 69
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "l"
                ],
                "frame": {
                  "x": 18,
                  "y": 445,
                  "width": 120,
                  "height": 48
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 887,
                  "y": 445,
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
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 412,
                  "y": 719,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 471,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 768
            },
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
                  "x": 18,
                  "y": 238,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 693,
                  "y": 274,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 603,
                  "y": 343,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "a",
                  "b"
                ],
                "frame": {
                  "x": 692,
                  "y": 363,
                  "width": 90,
                  "height": 69
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0
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
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 412,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 300,
                  "y": 402,
                  "width": 88,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 359,
                  "y": 18,
                  "width": 88,
                  "height": 31
                }
              }
            ],
            "mappingSize": {
              "width": 800,
              "height": 550
            },
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
                  "x": 18,
                  "y": 172,
                  "width": 194,
                  "height": 194
                }
              },
              {
                "inputs": [
                  "a"
                ],
                "frame": {
                  "x": 918,
                  "y": 208,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "bottom": 0,
                  "left": 0
                }
              },
              {
                "inputs": [
                  "b"
                ],
                "frame": {
                  "x": 828,
                  "y": 277,
                  "width": 89,
                  "height": 89
                },
                "extendedEdges": {
                  "top": 0,
                  "right": 0
                }
              },
              {
                "inputs": [
                  "a",
                  "b"
                ],
                "frame": {
                  "x": 915,
                  "y": 297,
                  "width": 92,
                  "height": 69
                },
                "extendedEdges": {
                  "top": 0,
                  "left": 0
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
                }
              },
              {
                "inputs": [
                  "r"
                ],
                "frame": {
                  "x": 887,
                  "y": 18,
                  "width": 120,
                  "height": 48
                }
              },
              {
                "inputs": [
                  "start"
                ],
                "frame": {
                  "x": 525,
                  "y": 336,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "left": 12
                }
              },
              {
                "inputs": [
                  "select"
                ],
                "frame": {
                  "x": 413,
                  "y": 336,
                  "width": 86,
                  "height": 31
                },
                "extendedEdges": {
                  "right": 12
                }
              },
              {
                "inputs": [
                  "menu"
                ],
                "frame": {
                  "x": 470,
                  "y": 18,
                  "width": 86,
                  "height": 30
                }
              }
            ],
            "mappingSize": {
              "width": 1024,
              "height": 384
            },
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
    "ds" : {
        "inputFrame": { "x": 0, "y": 0, "width": 240, "height": 160
        }
    }
};

let devices = [
    "iphone",
    "ipad",
    "tv"
]

let layoutTypes = [
        "",
        "iphone standard",
        "iphone edgeToEdge",
        "ipad standard",
        "ipad splitView"
    ];

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
 layoutTypes.forEach(function(layoutType) {
    let option = document.createElement('option');
    option.value = layoutType;
    option.text = layoutType; // Optional: Display as uppercase
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
                div.innerHTML = "<p class='item-text'>D-Pad</p>";
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
                screenText.textContent = `Game Screen ${index + 1}`;
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
            // Proceed with operations on screenArray
            //console.log("Screen array exists:", screenArray);
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

    function updateScreenPosition(screenId, newScreenX, newScreenY) {
        // Split the selected layout into an array of individual words
        let parts = layoutSelection.split(" ");
        let device = parts[0].toString();
        let layout = parts[1].toString();
        let orientation = document.querySelector('input[name="orientation"]:checked').id;

        // Get the items array from the selected layout
        let currentItemArray = defaultJsonOutput["representations"][device][layout][orientation]["screens"];
        console.log(currentItemArray[0]["outputFrame"]);

        if (device === "tv") {
            currentItemArray[0]["outputFrame"]["x"] = newScreenX / layoutObject.clientWidth;
            currentItemArray[0]["outputFrame"]["y"] = newScreenY / layoutObject.clientHeight;
        } else {
            currentItemArray[0]["outputFrame"]["x"] = newScreenX;
            currentItemArray[0]["outputFrame"]["y"] = newScreenY;
        }

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

// Add this to your existing global variables
let isItemLocked = false;

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

    // Get the selected item ID
    const itemId = event.currentTarget.id;

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = itemId === 'touch-screen' ? 'Touch Screen' : itemId;
    
    document.querySelector('.item-name').style.display = "block";

    // Show or hide the delete button based on whether the selected item is a game screen
    const deleteButton = document.getElementById('delete-button');
    if (deleteButton) {
        if (event.currentTarget.classList.contains('screen-item')) {
            deleteButton.style.display = 'none';
        } else {
            deleteButton.style.display = 'block';
        }
    }

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
    document.querySelectorAll('.layout-item').forEach(screen => {
        screen.classList.remove('selected');
    });

    const deleteButton = document.getElementById('delete-button');
    if (deleteButton) {
        deleteButton.style.display = 'none';
    }

    // Add the highlight to the clicked element
    event.currentTarget.classList.add('selected');

    // Get the selected item ID
    const screenId = event.currentTarget.id;

    // Update lock button state
    const lockButton = document.getElementById('lock-button');
    isItemLocked = event.currentTarget.classList.contains('locked');
    lockButton.innerHTML = isItemLocked ? '<i class="fa-solid fa-lock">' : '<i class="fa-solid fa-unlock">';
    lockButton.classList.toggle('locked', isItemLocked);
    lockButton.style.display = 'inline-block'; // Show the lock button

    // Update the item name in the .item-name div
    document.querySelector('.item-name').innerText = screenId === 'game-screen-0' ? 'Game Screen 1' : 'Game Screen 2';
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
                document.getElementById('identifierInput').value = jsonContent.gameTypeIdentifier || '';
                
                selectConsoleBasedOnIdentifier(jsonContent);
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

document.getElementById('delete-button').addEventListener('click', function() {
    let currentItemName = document.querySelector(".item-name").innerHTML;
    document.querySelector('.item-name').style.display = "none";
    document.getElementById('lock-button').style.display = "none";
    document.querySelector('#focus > .container:first-child').style.gap = "0"

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

        // Check if the current item is "Touch Screen" and change it to "touch-screen"
        if (currentItemName === "Touch Screen") {
            currentItemName = "touch-screen";
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
    let consoleTypes = ["", "nes", "snes", "n64", "gbc", "gba", "ds"];

    const buttonConfigs = {
        gbc: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        gba: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'start', 'select', 'l', 'r', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward'],
        ds: ['menu', 'd-pad', 'thumbstick', 'a', 'b', 'x', 'y', 'start', 'select', 'l', 'r', 'menu', 'quickSave', 'quickLoad', 'fastForward', 'toggleFastForward', 'screenInput'],
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

    // Function to update the JSON view in #code
    function updateJsonView() {
        const jsonString = JSON.stringify(defaultJsonOutput, null, 4);
        document.getElementById('code').textContent = jsonString;
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
        "com.delta.n64.standard": "n64",
        "com.delta.gba.standard": "gba",
        "com.delta.gbc.standard": "gbc",
        "com.delta.nes.standard": "nes",
        "com.delta.snes.standard": "snes",
        "com.delta.ds.standard": "ds"
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
        defaultJsonOutput.representations[device][layout][orientation].assets.resizable = fileName;
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
        if (representation && representation.assets && representation.assets.resizable) {
            return representation.assets.resizable;
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
                const pdf = new jspdf.jsPDF({
                    orientation: img.width > img.height ? 'l' : 'p',
                    unit: 'px',
                    format: [img.width, img.height]
                });

                pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
                
                zip.file(correctFilename, pdf.output('arraybuffer'));

                resolve();
            };
        });
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