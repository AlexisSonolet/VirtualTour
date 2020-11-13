TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "hfovMin": 80,
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 168.67,
       "backwardYaw": 76.25,
       "distance": 1
      }
     ],
     "id": "panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14",
     "pitch": 0,
     "hfov": 360,
     "label": "Ext\u00e9rieur",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_B02DBE55_A136_FDBF_4194_0875C40E0D3E",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 14.92,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 168.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 133,
              "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "pitch": 0.49
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_CC095F36_C29C_30CC_41D3_8F2872DB73D5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 14.92,
           "yaw": 168.67,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 403,
              "class": "ImageResourceLevel",
              "width": 268,
              "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 0.49
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 76.25,
    "backwardYaw": 168.67,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
             "yaw": -72,
             "backwardYaw": 124.06,
             "distance": 1
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "id": "overlay_BD086005_A15F_E59E_41E1_9F9FD6E60540",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 12.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_0_HS_0_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.82
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_D2929E4A_C29C_3144_41C5_2E1A11DFFA01); this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "items": [
                {
                 "hfov": 12.14,
                 "yaw": -72,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 741,
                    "class": "ImageResourceLevel",
                    "width": 217,
                    "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -8.82
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E.jpeg"
               }
              ]
             }
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "id": "panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E",
           "label": "Salle r\u00e9union-retouche",
           "thumbnailUrl": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 124.06,
          "backwardYaw": -72,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 100,
              "hfovMin": 80,
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
                "yaw": 106.35,
                "backwardYaw": 31.92,
                "distance": 1
               }
              ],
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "id": "overlay_BAD34B23_A15E_FB9A_41D8_F223DB17E83A",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 22.24,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 106.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 77,
                       "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_0_HS_0_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.64
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E, this.camera_D2803E3B_C29C_30C4_41CD_306CFF9E8E72); this.mainPlayList.set('selectedIndex', 16)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 22.24,
                    "yaw": 106.35,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1040,
                       "class": "ImageResourceLevel",
                       "width": 402,
                       "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -13.64
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55.jpeg"
                  }
                 ]
                }
               }
              ],
              "pitch": 0,
              "hfov": 360,
              "id": "panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55",
              "label": "Salle musique-retouche",
              "thumbnailUrl": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 31.92,
             "backwardYaw": 106.35,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
             "yaw": 117.23,
             "backwardYaw": 87.13,
             "distance": 1
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "id": "overlay_BABA2D0A_A151_1FAA_41B8_16E9209988CA",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 7.17,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 117.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 48,
                    "class": "ImageResourceLevel",
                    "width": 65,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.12
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_CDC63CC8_C29C_3144_41DF_BC7E39240A13); this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "items": [
                {
                 "hfov": 7.17,
                 "yaw": 117.23,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 131,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -13.12
                }
               ]
              },
              {
               "id": "overlay_05319237_0809_259E_4172_155EA45E0028",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 45.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 33.57,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 71,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_2_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 1.16
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 45.33,
                 "yaw": 33.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 181,
                    "class": "ImageResourceLevel",
                    "width": 810,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": 1.16
                }
               ]
              },
              {
               "id": "overlay_BC71A71E_AE8F_06F7_41BA_9DC9DB03C776",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 65.83,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 31.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 130,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_3_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -17.58
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55, this.camera_CDBADCB3_C29C_31C5_41C5_8101BE32B5CE); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "items": [
                {
                 "hfov": 65.83,
                 "yaw": 31.92,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 2028,
                    "class": "ImageResourceLevel",
                    "width": 1325,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -17.58
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E.jpeg"
               }
              ]
             }
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "id": "panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
           "label": "Porte musique-retouche",
           "thumbnailUrl": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 87.13,
          "backwardYaw": 117.23,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
          "yaw": -22.96,
          "backwardYaw": 129.11,
          "distance": 1
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_B9603EBD_A151_3AEE_41CD_F1D53D7A64FB",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.63,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 87.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 162,
                 "class": "ImageResourceLevel",
                 "width": 95,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "pitch": -3.47
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E, this.camera_CD6D5E1C_C29C_30FC_41D5_C28415A7AF0B); this.mainPlayList.set('selectedIndex', 16)"
             }
            ],
            "items": [
             {
              "hfov": 10.63,
              "yaw": 87.13,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 325,
                 "class": "ImageResourceLevel",
                 "width": 190,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.47
             }
            ]
           },
           {
            "id": "overlay_BBBF992C_A152_E7EE_41E2_A6F88F846DF8",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 6.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -22.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 63,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -24.61
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_CD7EBE2B_C29C_30C4_41E3_187379E17875); this.mainPlayList.set('selectedIndex', 15)"
             }
            ],
            "items": [
             {
              "hfov": 6.43,
              "yaw": -22.96,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 91,
                 "class": "ImageResourceLevel",
                 "width": 126,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -24.61
             }
            ]
           },
           {
            "id": "overlay_B8865C45_A157_1D9E_41C7_6D8B30D74A23",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 24.9,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 124.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 57,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_2_1_0_map.gif"
                }
               ]
              },
              "pitch": -16.25
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E, this.camera_CD5B4E0C_C29C_30DC_41DF_81692A846225); this.mainPlayList.set('selectedIndex', 18)"
             }
            ],
            "items": [
             {
              "hfov": 24.9,
              "yaw": 124.06,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1584,
                 "class": "ImageResourceLevel",
                 "width": 452,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -16.25
             }
            ]
           },
           {
            "id": "overlay_053DC43A_0809_2D96_4147_6BA80028CFDC",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 24.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 150.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 21,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_3_0_map.gif"
                }
               ]
              },
              "pitch": 8.21
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 24.44,
              "yaw": 150.27,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 600,
                 "class": "ImageResourceLevel",
                 "width": 441,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_3_0.png"
                }
               ]
              },
              "pitch": 8.21
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0.jpeg"
            }
           ]
          }
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "id": "panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
        "label": "Couloir musique-reu-retouche",
        "thumbnailUrl": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 129.11,
       "backwardYaw": -22.96,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
          "yaw": 136.6,
          "backwardYaw": 8.48,
          "distance": 1
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_BD78AEA9_A15E_FA96_41CF_1652837D8A5A",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 9.88,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 136.6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 54,
                 "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "pitch": -3.68
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_CC12BF46_C29C_2F4C_41C9_A592CCEE91AB); this.mainPlayList.set('selectedIndex', 15)"
             }
            ],
            "items": [
             {
              "hfov": 9.88,
              "yaw": 136.6,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 651,
                 "class": "ImageResourceLevel",
                 "width": 176,
                 "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -3.68
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B.jpeg"
            }
           ]
          }
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "id": "panorama_AB3EF947_A0D7_679A_41E2_563F5194658B",
        "label": "Terrasse-retouche",
        "thumbnailUrl": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 8.48,
       "backwardYaw": 136.6,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 42.98,
       "backwardYaw": -140.78,
       "distance": 1
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_B8930210_A157_25B6_41E1_8FEF631587FF",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 6.61,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 129.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "class": "ImageResourceLevel",
              "width": 67,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.13
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_D2B86E76_C29C_314C_41DC_4C1D600C21B2); this.mainPlayList.set('selectedIndex', 14)"
          }
         ],
         "items": [
          {
           "hfov": 6.61,
           "yaw": 129.11,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 104,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -28.13
          }
         ]
        },
        {
         "id": "overlay_BBC66501_A156_EF96_41D8_B66FC472D544",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 15.36,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 42.98,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 81,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "pitch": -5.42
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_CCE32EBD_C29C_313C_41E3_EA842341B597); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 15.36,
           "yaw": 42.98,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 679,
              "class": "ImageResourceLevel",
              "width": 276,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -5.42
          }
         ]
        },
        {
         "id": "overlay_BB7EE2D6_A151_EABA_41D2_EE444CE561AC",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 14.45,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 8.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 79,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_2_1_0_map.gif"
             }
            ]
           },
           "pitch": -5.13
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B, this.camera_CCE48EAE_C29C_31DC_41E2_CE8FF0396DDB); this.mainPlayList.set('selectedIndex', 19)"
          }
         ],
         "items": [
          {
           "hfov": 14.45,
           "yaw": 8.48,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 651,
              "class": "ImageResourceLevel",
              "width": 259,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -5.13
          }
         ]
        },
        {
         "id": "overlay_BA68A949_A153_2796_41E3_178E9EA73968",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 13.33,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -156.84,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 83,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_3_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.09
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 18)"
          }
         ],
         "items": [
          {
           "hfov": 13.33,
           "yaw": -156.84,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 573,
              "class": "ImageResourceLevel",
              "width": 239,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -8.09
          }
         ]
        },
        {
         "id": "overlay_CE476F74_C294_6F4C_41D2_4B51A178AC9B",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 12.61,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -156.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 17,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_4_0_map.gif"
             }
            ]
           },
           "pitch": -4.2
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 12.61,
           "yaw": -156.33,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 202,
              "class": "ImageResourceLevel",
              "width": 226,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -4.2
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA.jpeg"
         }
        ]
       }
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "id": "panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
     "label": "hall terrasse-retouche",
     "thumbnailUrl": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -140.78,
    "backwardYaw": 42.98,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
          "yaw": 83.16,
          "backwardYaw": -9.37,
          "distance": 1
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_B921191D_A151_67AE_41B6_B72EA2B0C021",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 9.38,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 83.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 48,
                 "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "pitch": -9.76
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_CD1C0DC1_C29C_3344_41E1_9D2A67C1E9EB); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "items": [
             {
              "hfov": 9.38,
              "yaw": 83.16,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 678,
                 "class": "ImageResourceLevel",
                 "width": 167,
                 "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -9.76
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7.jpeg"
            }
           ]
          }
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "id": "panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7",
        "label": "vesriares-retouche",
        "thumbnailUrl": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -9.37,
       "backwardYaw": 83.16,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": -77.48,
       "backwardYaw": -140.96,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
          "yaw": -114.52,
          "backwardYaw": -29.85,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
             "yaw": 52.78,
             "backwardYaw": 38.81,
             "distance": 1
            }
           ],
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "id": "overlay_B7941D9C_A131_1EAE_41D9_1E64FB200548",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 7.46,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 52.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 66,
                    "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_0_HS_0_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -3.49
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959, this.camera_CDB39CA4_C29C_31C3_41E1_BF4AEB97AF6B); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "items": [
                {
                 "hfov": 7.46,
                 "yaw": 52.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 221,
                    "class": "ImageResourceLevel",
                    "width": 133,
                    "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -3.49
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F.jpeg"
               }
              ]
             }
            }
           ],
           "pitch": 0,
           "hfov": 360,
           "id": "panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F",
           "label": "Gymnase-retouche",
           "thumbnailUrl": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": 38.81,
          "backwardYaw": 52.78,
          "distance": 1
         }
        ],
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_B671836D_A12F_6A6E_41CD_7ED62925AA11",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 53.54,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 38.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 133,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "pitch": -16.66
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F, this.camera_CDF0CD93_C29C_33C5_41CD_B0BD76EB8483); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "items": [
             {
              "hfov": 53.54,
              "yaw": 38.81,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1543,
                 "class": "ImageResourceLevel",
                 "width": 1033,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -16.66
             }
            ]
           },
           {
            "id": "overlay_B96765F5_A12F_2E7E_41C1_18DD88138489",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 22.47,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -114.52,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 72,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_1_1_0_map.gif"
                }
               ]
              },
              "pitch": -11.45
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_CDEB5D7C_C29C_3343_41BF_A7CA2A94CBE2); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "items": [
             {
              "hfov": 22.47,
              "yaw": -114.52,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1116,
                 "class": "ImageResourceLevel",
                 "width": 406,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -11.45
             }
            ]
           },
           {
            "id": "overlay_055E452A_0808_EFB1_4162_A737C5D585F1",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 33.19,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_2_0_map.gif"
                }
               ]
              },
              "pitch": 11.07
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "hfov": 33.19,
              "yaw": 0.02,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 238,
                 "class": "ImageResourceLevel",
                 "width": 604,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 11.07
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959.jpeg"
            }
           ]
          }
         }
        ],
        "pitch": 0,
        "hfov": 360,
        "id": "panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
        "label": "Hall gymnase-retouche",
        "thumbnailUrl": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": -29.85,
       "backwardYaw": -114.52,
       "distance": 1
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_B78FC301_A132_EB96_41DA_73FF530E4647",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 11.4,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -29.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 40,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "pitch": -13.64
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959, this.camera_CD45EDEE_C29C_335C_41DA_6180A8B3E9E9); this.mainPlayList.set('selectedIndex', 12)"
          }
         ],
         "items": [
          {
           "hfov": 11.4,
           "yaw": -29.85,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1002,
              "class": "ImageResourceLevel",
              "width": 204,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -13.64
          }
         ]
        },
        {
         "id": "overlay_B6205BF9_A132_FA76_41DA_E3B34ACDA630",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 19.83,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -9.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 97,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_2_1_0_map.gif"
             }
            ]
           },
           "pitch": -9.25
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7, this.camera_CD2E1DD0_C29C_3344_41AA_62274E37A7F8); this.mainPlayList.set('selectedIndex', 13)"
          }
         ],
         "items": [
          {
           "hfov": 19.83,
           "yaw": -9.37,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 735,
              "class": "ImageResourceLevel",
              "width": 357,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -9.25
          }
         ]
        },
        {
         "id": "overlay_052497AE_0809_2A8F_4190_7D3562CF10B2",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 18.9,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -79.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_3_0_map.gif"
             }
            ]
           },
           "pitch": 17.35
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 18.9,
           "yaw": -79.87,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 184,
              "class": "ImageResourceLevel",
              "width": 353,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_3_0.png"
             }
            ]
           },
           "pitch": 17.35
          }
         ]
        },
        {
         "id": "overlay_0597A983_080B_2776_4195_7EEDF0B279B4",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 22.24,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 12.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 57,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_4_0_map.gif"
             }
            ]
           },
           "pitch": 7.67
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 22.24,
           "yaw": 12.1,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 111,
              "class": "ImageResourceLevel",
              "width": 401,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_4_0.png"
             }
            ]
           },
           "pitch": 7.67
          }
         ]
        },
        {
         "id": "overlay_063FD38F_080B_2A8E_4195_581E79BC2582",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 30.51,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 169.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 16,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_5_0_map.gif"
             }
            ]
           },
           "pitch": 27.27
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 30.51,
           "yaw": 169.36,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 613,
              "class": "ImageResourceLevel",
              "width": 613,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_5_0.png"
             }
            ]
           },
           "pitch": 27.27
          }
         ]
        },
        {
         "id": "overlay_BF530A16_AE87_0EF6_41D5_B90C2F07FD42",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 30.36,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -77.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 146,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_6_1_0_map.gif"
             }
            ]
           },
           "pitch": 11.78
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_CD339DDF_C29C_337C_41B6_87E0CB35CCD2); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 30.36,
           "yaw": -77.48,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 755,
              "class": "ImageResourceLevel",
              "width": 555,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_6_0.png"
             }
            ]
           },
           "pitch": 11.78
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0.jpeg"
         }
        ]
       }
      }
     ],
     "pitch": 0,
     "hfov": 360,
     "id": "panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
     "label": "Escaliers - retouche",
     "thumbnailUrl": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -140.96,
    "backwardYaw": -77.48,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
          "yaw": 63.83,
          "backwardYaw": 23.08,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
             "yaw": 49.93,
             "backwardYaw": -116.98,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 100,
              "hfovMin": 80,
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 100,
                 "hfovMin": 10,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                   "yaw": 31.41,
                   "backwardYaw": 63.51,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "id": "overlay_B46B51CD_A133_26AE_41B9_E731BBB6CCDF",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 3.86,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 31.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 39,
                          "class": "ImageResourceLevel",
                          "width": 34,
                          "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -7.92
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_CCF80F08_C29C_30C4_41D9_CD272B5BDF00); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 3.86,
                       "yaw": 31.41,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 78,
                          "class": "ImageResourceLevel",
                          "width": 69,
                          "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -7.92
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "id": "panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333",
                 "label": "Jardin ping pong",
                 "thumbnailUrl": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_t.jpg",
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 63.51,
                "backwardYaw": 31.41,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 100,
                 "hfovMin": 80,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
                      "yaw": -168.91,
                      "backwardYaw": -66.5,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "hfovMax": 100,
                       "hfovMin": 80,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
                         "yaw": 84.26,
                         "backwardYaw": -91.58,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "hfovMax": 100,
                          "hfovMin": 80,
                          "partial": false,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                            "yaw": 79.18,
                            "backwardYaw": 1.62,
                            "distance": 1
                           }
                          ],
                          "id": "panorama_AB276077_A0D7_267A_41CD_45E2B6A89441",
                          "pitch": 0,
                          "hfov": 360,
                          "label": "Jardin herbe ",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "id": "overlay_B59E4B06_A13E_FB9A_41D9_458943E1370C",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "hfov": 4.22,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 79.18,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 39,
                                   "class": "ImageResourceLevel",
                                   "width": 37,
                                   "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -6.56
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_CD491DFD_C29C_333C_41D5_ABFDA010A061); this.mainPlayList.set('selectedIndex', 6)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 4.22,
                                "yaw": 79.18,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 78,
                                   "class": "ImageResourceLevel",
                                   "width": 75,
                                   "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -6.56
                               }
                              ]
                             }
                            ],
                            "thumbnailUrl": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3217,
                               "class": "ImageResourceLevel",
                               "width": 6434,
                               "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "thumbnailUrl": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_t.jpg",
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": 1.62,
                         "backwardYaw": 79.18,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                         "yaw": -124.51,
                         "backwardYaw": 122.37,
                         "distance": 1
                        }
                       ],
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "id": "overlay_B24FFA0D_A131_25AF_41C5_A8724F33F03A",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 8.4,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -124.51,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 62,
                                "class": "ImageResourceLevel",
                                "width": 75,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -4.98
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_CDD22D21_C29C_30C4_41DA_9C20C609A2B5); this.mainPlayList.set('selectedIndex', 5)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.4,
                             "yaw": -124.51,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 125,
                                "class": "ImageResourceLevel",
                                "width": 150,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -4.98
                            }
                           ]
                          },
                          {
                           "id": "overlay_B5F0AC0E_A131_1DAA_41E2_B8AA9CE01446",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 6.17,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 1.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 51,
                                "class": "ImageResourceLevel",
                                "width": 55,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -4.74
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441, this.camera_CDC9DD02_C29C_30C4_41B5_EAB6BBF13ABA); this.mainPlayList.set('selectedIndex', 7)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.17,
                             "yaw": 1.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 103,
                                "class": "ImageResourceLevel",
                                "width": 110,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -4.74
                            }
                           ]
                          },
                          {
                           "id": "overlay_B5833C53_A13E_FDBA_41E2_AB39C3784A40",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 4.66,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 84.26,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 49,
                                "class": "ImageResourceLevel",
                                "width": 41,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -6.34
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B, this.camera_CDC17CE7_C29C_314C_41E3_85735DF6C774); this.mainPlayList.set('selectedIndex', 20)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 4.66,
                             "yaw": 84.26,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 98,
                                "class": "ImageResourceLevel",
                                "width": 83,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -6.34
                            }
                           ]
                          },
                          {
                           "id": "overlay_B5D6FD7F_A13F_FE65_41A3_DF7AFC60AC91",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 5.45,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 160.43,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 38,
                                "class": "ImageResourceLevel",
                                "width": 48,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.47
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 5.45,
                             "yaw": 160.43,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 77,
                                "class": "ImageResourceLevel",
                                "width": 97,
                                "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -3.47
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3217,
                            "class": "ImageResourceLevel",
                            "width": 6434,
                            "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "pitch": 0,
                       "hfov": 360,
                       "id": "panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                       "label": "Jardin milieu",
                       "thumbnailUrl": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_t.jpg",
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -91.58,
                      "backwardYaw": 84.26,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
                    "pitch": 0,
                    "hfov": 360,
                    "label": "jardin fond.jpg",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "id": "overlay_BFAA35F1_AE8B_054A_41E2_2499BC65CAFE",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 5.02,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -168.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 62,
                             "class": "ImageResourceLevel",
                             "width": 44,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.37
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2, this.camera_CD07DDA3_C29C_33C4_41E1_9B7C3DF44308); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 5.02,
                          "yaw": -168.91,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 124,
                             "class": "ImageResourceLevel",
                             "width": 89,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -3.37
                         }
                        ]
                       },
                       {
                        "id": "overlay_BCFED49D_AE89_1BFA_41DC_B96E7495C6EE",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 4.55,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -52.43,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 38,
                             "class": "ImageResourceLevel",
                             "width": 40,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.28
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.55,
                          "yaw": -52.43,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 77,
                             "class": "ImageResourceLevel",
                             "width": 81,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -4.28
                         }
                        ]
                       },
                       {
                        "id": "overlay_BC33F663_AE89_074D_41B9_DAE4320FF988",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 4.61,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -91.58,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 47,
                             "class": "ImageResourceLevel",
                             "width": 41,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -2.95
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_CD08ADB2_C29C_33C4_41E6_CF47DF9CBA9C); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.61,
                          "yaw": -91.58,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 95,
                             "class": "ImageResourceLevel",
                             "width": 82,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -2.95
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "class": "ImageResourceLevel",
                         "width": 6434,
                         "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_t.jpg",
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": -66.5,
                   "backwardYaw": -168.91,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                   "yaw": -145.06,
                   "backwardYaw": -159,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "id": "overlay_B49FAE22_A133_7D9A_4175_49C46A2237B5",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 6.58,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -66.5,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 46,
                          "class": "ImageResourceLevel",
                          "width": 58,
                          "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.24
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B, this.camera_CC020F17_C29C_30CC_41E4_A7298E6555BA); this.mainPlayList.set('selectedIndex', 20)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.58,
                       "yaw": -66.5,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 117,
                          "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -4.24
                      }
                     ]
                    },
                    {
                     "id": "overlay_B7BE6AA2_A131_3A9A_41E1_B3EFE195CB42",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 5.06,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -145.06,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 40,
                          "class": "ImageResourceLevel",
                          "width": 45,
                          "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -0.98
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_CC0F7F27_C29C_30CC_41E5_7E6AE062FEEE); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 5.06,
                       "yaw": -145.06,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 80,
                          "class": "ImageResourceLevel",
                          "width": 90,
                          "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -0.98
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "class": "ImageResourceLevel",
                      "width": 6434,
                      "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "pitch": 0,
                 "hfov": 360,
                 "id": "panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
                 "label": "Jardin volley fond",
                 "thumbnailUrl": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_t.jpg",
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": -159,
                "backwardYaw": -145.06,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
                "yaw": -67.05,
                "backwardYaw": 153.13,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                "yaw": 122.37,
                "backwardYaw": -124.51,
                "distance": 1
               }
              ],
              "id": "panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
              "pitch": 0,
              "hfov": 360,
              "label": "Jardin sortie",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "id": "overlay_B0292368_A137_EB96_41CA_3363C5828EB9",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 18.25,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -67.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 156,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_0_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -3.66
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057, this.camera_CC2F6F73_C29C_2F44_41DE_2A0EDF355759); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 18.25,
                    "yaw": -67.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 421,
                       "class": "ImageResourceLevel",
                       "width": 328,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -3.66
                   }
                  ]
                 },
                 {
                  "id": "overlay_B2E60001_A131_6596_41C7_DA5A95E57C1B",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -159,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 40,
                       "class": "ImageResourceLevel",
                       "width": 51,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.14
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2, this.camera_CC25AF64_C29C_2F4C_416A_FA68727E3F46); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.7,
                    "yaw": -159,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 81,
                       "class": "ImageResourceLevel",
                       "width": 102,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -5.14
                   }
                  ]
                 },
                 {
                  "id": "overlay_B378DE1D_A132_FDAE_41E3_32642B40A169",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.2,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 63.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 39,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -6.24
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333, this.camera_CC1DAF55_C29C_2F4C_41C7_625DEDB26D41); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.2,
                    "yaw": 63.51,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 79,
                       "class": "ImageResourceLevel",
                       "width": 93,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -6.24
                   }
                  ]
                 },
                 {
                  "id": "overlay_B3EDA4B6_A133_2EFA_41D0_D35E5A844CE6",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 3.75,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 122.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 29,
                       "class": "ImageResourceLevel",
                       "width": 33,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.81
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_CC374F82_C29C_2FC7_4195_82BC2BA182B5); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 3.75,
                    "yaw": 122.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 67,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -5.81
                   }
                  ]
                 },
                 {
                  "id": "overlay_04CD4130_080F_2791_418D_6B9922923DDE",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 31.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -62.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 46,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_4_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 17.33
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 31.14,
                    "yaw": -62.5,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 201,
                       "class": "ImageResourceLevel",
                       "width": 583,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": 17.33
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "class": "ImageResourceLevel",
                   "width": 6434,
                   "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_t.jpg",
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 153.13,
             "backwardYaw": -67.05,
             "distance": 1
            }
           ],
           "id": "panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
           "pitch": 0,
           "hfov": 360,
           "label": "Cafet fond",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "id": "overlay_B1D8C51D_A132_EFAE_41AD_A9FDE5D61674",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.44,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 49.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 51,
                    "class": "ImageResourceLevel",
                    "width": 52,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -22.31
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E, this.camera_D2A41E59_C29C_3144_41CE_2957B3F2C17A); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "hfov": 5.44,
                 "yaw": 49.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 102,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -22.31
                }
               ]
              },
              {
               "id": "overlay_04AE9DFF_080B_3E8F_4182_47F930E16192",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 19.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 156.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 57,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_2_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 10.03
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "hfov": 19.33,
                 "yaw": 156.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 350,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": 10.03
                }
               ]
              },
              {
               "id": "overlay_BEEE0735_AE89_0530_41C4_27797B800512",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 14.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 153.13,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 113,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_3_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -5.32
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_D2B7AE68_C29C_3144_41CC_F8241B402621); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "items": [
                {
                 "hfov": 14.93,
                 "yaw": 153.13,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 472,
                    "class": "ImageResourceLevel",
                    "width": 268,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -5.32
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_t.jpg",
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -116.98,
          "backwardYaw": 49.93,
          "distance": 1
         }
        ],
        "id": "panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
        "pitch": 0,
        "hfov": 360,
        "label": "Cafet milieu",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_B35781B0_A131_26F6_41DC_F60F32FC3501",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 7.74,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 63.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "class": "ImageResourceLevel",
                 "width": 71,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -15.11
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B, this.camera_CDAC4C84_C29C_31C3_41E1_F38D9F10BB3E); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "hfov": 7.74,
              "yaw": 63.83,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 104,
                 "class": "ImageResourceLevel",
                 "width": 143,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -15.11
             }
            ]
           },
           {
            "id": "overlay_B15E519A_A132_E6AA_41D9_B4DBB5ED7F6F",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -116.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 55,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -17.48
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057, this.camera_CDB6AC95_C29C_31CD_41D4_7837414F5DC0); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "hfov": 5.93,
              "yaw": -116.98,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 90,
                 "class": "ImageResourceLevel",
                 "width": 111,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -17.48
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_t.jpg",
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 23.08,
       "backwardYaw": 63.83,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 130.54,
       "backwardYaw": 144.47,
       "distance": 1
      }
     ],
     "id": "panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
     "pitch": 0,
     "hfov": 360,
     "label": "Cafet entr\u00e9e",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_AE500561_A0D1_2F96_41D6_CD0BE9F16292",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 25.29,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 130.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 167,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.14
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_CDE2AD61_C29C_3345_41D6_2C730D5F7F5A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 25.29,
           "yaw": 130.54,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 546,
              "class": "ImageResourceLevel",
              "width": 459,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -8.14
          }
         ]
        },
        {
         "id": "overlay_AEF66134_A12F_27FD_41C3_2E8AF9A5D26B",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 5.74,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 23.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 53,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.89
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E, this.camera_CDDBBD41_C29C_3345_41E2_DB7E355BA2EB); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "hfov": 5.74,
           "yaw": 23.08,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 121,
              "class": "ImageResourceLevel",
              "width": 106,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -15.89
          }
         ]
        },
        {
         "id": "overlay_04F1FA39_080B_E592_4183_204180767087",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 18.92,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 131.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_2_0_map.gif"
             }
            ]
           },
           "pitch": 10.38
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 18.92,
           "yaw": 131.22,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 117,
              "class": "ImageResourceLevel",
              "width": 343,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 10.38
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_t.jpg",
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 144.47,
    "backwardYaw": 130.54,
    "distance": 1
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "overlay_AD507D79_A0D1_3E76_41CA_3418B7F9EB27",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 35.75,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -140.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 153,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": 3.26
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_CCE9EEDB_C29C_3145_41D1_D44C141A33A8); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "items": [
       {
        "hfov": 35.75,
        "yaw": -140.78,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 508,
           "class": "ImageResourceLevel",
           "width": 660,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 3.26
       }
      ]
     },
     {
      "id": "overlay_AEC57754_A0D3_6BBE_41D8_0E6F04221AE7",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 34.92,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -140.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 157,
           "class": "ImageResourceLevel",
           "width": 199,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": -22.06
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_CCF23EEA_C29C_3147_41CA_EEE70BCA0C8B); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "hfov": 34.92,
        "yaw": -140.96,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 508,
           "class": "ImageResourceLevel",
           "width": 644,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -22.06
       }
      ]
     },
     {
      "id": "overlay_06169020_0817_65B2_419B_6A3D6FADC06E",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 44.73,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 144.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 152,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": -13.63
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B, this.camera_CCFFCEF9_C29C_3144_41C9_5D539C934452); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 44.73,
        "yaw": 144.47,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1106,
           "class": "ImageResourceLevel",
           "width": 842,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -13.63
       }
      ]
     },
     {
      "id": "overlay_04C4F715_0817_2B92_4176_0E1922FD02BE",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 23.13,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 134.84,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 78,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_4_0_map.gif"
          }
         ]
        },
        "pitch": 16.01
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 23.13,
        "yaw": 134.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 429,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 16.01
       }
      ]
     },
     {
      "id": "overlay_04F83E88_0809_1D72_4155_459668DCEC04",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 14.29,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 99.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": 7.18
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 14.29,
        "yaw": 99.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 156,
           "class": "ImageResourceLevel",
           "width": 257,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 7.18
       }
      ]
     },
     {
      "id": "overlay_05217733_0809_2B96_4170_9ECA91FED6BE",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 16.85,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -137.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_6_0_map.gif"
          }
         ]
        },
        "pitch": -6.79
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 16.85,
        "yaw": -137.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 303,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -6.79
       }
      ]
     },
     {
      "id": "overlay_0567A456_080B_2D9E_417D_AC65848109CE",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 21.26,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -135.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 65,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_7_0_map.gif"
          }
         ]
        },
        "pitch": -12.76
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 21.26,
        "yaw": -135.36,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "class": "ImageResourceLevel",
           "width": 389,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_7_0.png"
          }
         ]
        },
        "pitch": -12.76
       }
      ]
     },
     {
      "id": "overlay_A01D33E5_AE99_3D55_41E2_2D2BAA7C1EED",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 32.12,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 76.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_8_1_0_map.gif"
          }
         ]
        },
        "pitch": -11.8
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14, this.camera_CCEDFECD_C29C_315D_41D9_A845417166F5); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "hfov": 32.12,
        "yaw": 76.25,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 921,
           "class": "ImageResourceLevel",
           "width": 589,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -11.8
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199.jpeg"
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "hfov": 360,
  "id": "panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
  "label": "Entr\u00e9e",
  "thumbnailUrl": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B",
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "camera": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.92,
   "pitch": 0
  },
  "id": "camera_CDAC4C84_C29C_31C3_41E1_F38D9F10BB3E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -130.07,
   "pitch": 0
  },
  "id": "camera_CDB6AC95_C29C_31CD_41D4_7837414F5DC0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -141.19,
   "pitch": 0
  },
  "id": "camera_CDB39CA4_C29C_31C3_41E1_BF4AEB97AF6B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -73.65,
   "pitch": 0
  },
  "id": "camera_CDBADCB3_C29C_31C5_41C5_8101BE32B5CE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -92.87,
   "pitch": 0
  },
  "id": "camera_CDC63CC8_C29C_3144_41DF_BC7E39240A13",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.42,
   "pitch": 0
  },
  "id": "camera_CDC17CE7_C29C_314C_41E3_85735DF6C774",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.82,
   "pitch": 0
  },
  "id": "camera_CDC9DD02_C29C_30C4_41B5_EAB6BBF13ABA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -57.63,
   "pitch": 0
  },
  "id": "camera_CDD22D21_C29C_30C4_41DA_9C20C609A2B5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -116.17,
   "pitch": 0
  },
  "id": "camera_CDDBBD41_C29C_3345_41E2_DB7E355BA2EB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -35.53,
   "pitch": 0
  },
  "id": "camera_CDE2AD61_C29C_3345_41D6_2C730D5F7F5A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 150.15,
   "pitch": 0
  },
  "id": "camera_CDEB5D7C_C29C_3343_41BF_A7CA2A94CBE2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -127.22,
   "pitch": 0
  },
  "id": "camera_CDF0CD93_C29C_33C5_41CD_B0BD76EB8483",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 113.5,
   "pitch": 0
  },
  "id": "camera_CD07DDA3_C29C_33C4_41E1_9B7C3DF44308",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -95.74,
   "pitch": 0
  },
  "id": "camera_CD08ADB2_C29C_33C4_41E6_CF47DF9CBA9C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 170.63,
   "pitch": 0
  },
  "id": "camera_CD1C0DC1_C29C_3344_41E1_9D2A67C1E9EB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -96.84,
   "pitch": 0
  },
  "id": "camera_CD2E1DD0_C29C_3344_41AA_62274E37A7F8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "id": "camera_CD339DDF_C29C_337C_41B6_87E0CB35CCD2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 65.48,
   "pitch": 0
  },
  "id": "camera_CD45EDEE_C29C_335C_41DA_6180A8B3E9E9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -178.38,
   "pitch": 0
  },
  "id": "camera_CD491DFD_C29C_333C_41D5_ABFDA010A061",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 108,
   "pitch": 0
  },
  "id": "camera_CD5B4E0C_C29C_30DC_41DF_81692A846225",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -62.77,
   "pitch": 0
  },
  "id": "camera_CD6D5E1C_C29C_30FC_41D5_C28415A7AF0B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -50.89,
   "pitch": 0
  },
  "id": "camera_CD7EBE2B_C29C_30C4_41E3_187379E17875",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -148.08,
   "pitch": 0
  },
  "id": "camera_D2803E3B_C29C_30C4_41CD_306CFF9E8E72",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -55.94,
   "pitch": 0
  },
  "id": "camera_D2929E4A_C29C_3144_41C5_2E1A11DFFA01",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 63.02,
   "pitch": 0
  },
  "id": "camera_D2A41E59_C29C_3144_41CE_2957B3F2C17A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 112.95,
   "pitch": 0
  },
  "id": "camera_D2B7AE68_C29C_3144_41CC_F8241B402621",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 157.04,
   "pitch": 0
  },
  "id": "camera_D2B86E76_C29C_314C_41DC_4C1D600C21B2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -43.4,
   "pitch": 0
  },
  "id": "camera_CCE48EAE_C29C_31DC_41E2_CE8FF0396DDB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 39.22,
   "pitch": 0
  },
  "id": "camera_CCE32EBD_C29C_313C_41E3_EA842341B597",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.33,
   "pitch": 0
  },
  "id": "camera_CCEDFECD_C29C_315D_41D9_A845417166F5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -137.02,
   "pitch": 0
  },
  "id": "camera_CCE9EEDB_C29C_3145_41D1_D44C141A33A8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 102.52,
   "pitch": 0
  },
  "id": "camera_CCF23EEA_C29C_3147_41CA_EEE70BCA0C8B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.46,
   "pitch": 0
  },
  "id": "camera_CCFFCEF9_C29C_3144_41C9_5D539C934452",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -116.49,
   "pitch": 0
  },
  "id": "camera_CCF80F08_C29C_30C4_41D9_CD272B5BDF00",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.09,
   "pitch": 0
  },
  "id": "camera_CC020F17_C29C_30CC_41E4_A7298E6555BA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 21,
   "pitch": 0
  },
  "id": "camera_CC0F7F27_C29C_30CC_41E5_7E6AE062FEEE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -103.75,
   "pitch": 0
  },
  "id": "camera_CC095F36_C29C_30CC_41D3_8F2872DB73D5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -171.52,
   "pitch": 0
  },
  "id": "camera_CC12BF46_C29C_2F4C_41C9_A592CCEE91AB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -148.59,
   "pitch": 0
  },
  "id": "camera_CC1DAF55_C29C_2F4C_41C7_625DEDB26D41",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 34.94,
   "pitch": 0
  },
  "id": "camera_CC25AF64_C29C_2F4C_416A_FA68727E3F46",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.87,
   "pitch": 0
  },
  "id": "camera_CC2F6F73_C29C_2F44_41DE_2A0EDF355759",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 55.49,
   "pitch": 0
  },
  "id": "camera_CC374F82_C29C_2FC7_4195_82BC2BA182B5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "playbackBarHeadOpacity": 1,
  "paddingRight": 0,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "toolTipPaddingRight": 6,
  "progressBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingBottom": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "progressBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "paddingTop": 0,
  "progressOpacity": 1,
  "minHeight": 50,
  "progressBarBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "paddingLeft": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "progressBarBorderColor": "#000000",
  "toolTipOpacity": 1,
  "playbackBarBottom": 5,
  "height": "100%",
  "progressBottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowSpread": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "id": "MainViewer",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "progressHeight": 10,
  "playbackBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipFontColor": "#606060",
  "playbackBarRight": 0,
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorRatios": [
   0
  ]
 }
], 
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "height": "100%",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "shadow": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scripts": {
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 }
})