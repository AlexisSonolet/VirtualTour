TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "hfovMin": 80,
  "partial": false,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": -77.48,
       "backwardYaw": -140.96,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
          "yaw": -114.52,
          "backwardYaw": -29.85,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
             "yaw": 52.78,
             "backwardYaw": 38.81,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_B7941D9C_A131_1EAE_41D9_1E64FB200548",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959, this.camera_BBC2A8D8_AE89_0B7B_41D7_6F426B82682C); this.mainPlayList.set('selectedIndex', 12)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 7.46,
                 "yaw": 52.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 110,
                    "width": 66,
                    "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_0_HS_0_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.49
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 133,
                    "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.49
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             }
            }
           ],
           "label": "Gymnase-retouche",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_t.jpg",
           "vfov": 180
          },
          "yaw": 38.81,
          "backwardYaw": 52.78,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_B671836D_A12F_6A6E_41CD_7ED62925AA11",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F, this.camera_BA045893_AE89_0BCD_41D1_6798F2425BE3); this.mainPlayList.set('selectedIndex', 11)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 53.54,
              "yaw": 38.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 133,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.66
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 1033,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -16.66
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_B96765F5_A12F_2E7E_41C1_18DD88138489",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_BA0A3889_AE89_0BDD_41E4_D7023CEAB3CE); this.mainPlayList.set('selectedIndex', 10)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 22.47,
              "yaw": -114.52,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 72,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_1_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -11.45
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 406,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -11.45
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_055E452A_0808_EFB1_4162_A737C5D585F1",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 33.19,
              "yaw": 0.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 40,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_2_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 11.07
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 604,
                 "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 11.07
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "label": "Hall gymnase-retouche",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_t.jpg",
        "vfov": 180
       },
       "yaw": -29.85,
       "backwardYaw": -114.52,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
          "yaw": 83.16,
          "backwardYaw": -9.37,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_B921191D_A151_67AE_41B6_B72EA2B0C021",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_BBB18918_AE89_0AFB_41CD_C02DFDA5F2DE); this.mainPlayList.set('selectedIndex', 10)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 9.38,
              "yaw": 83.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 48,
                 "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -9.76
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 167,
                 "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -9.76
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "label": "vesriares-retouche",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_t.jpg",
        "vfov": 180
       },
       "yaw": -9.37,
       "backwardYaw": 83.16,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_B78FC301_A132_EB96_41DA_73FF530E4647",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959, this.camera_BD6C69EF_AE89_0D55_41D6_D1012CD61AB1); this.mainPlayList.set('selectedIndex', 12)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 11.4,
           "yaw": -29.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 40,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -13.64
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 204,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -13.64
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B6205BF9_A132_FA76_41DA_E3B34ACDA630",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7, this.camera_BD61E9FA_AE89_0D3F_41E0_F067BF0105BE); this.mainPlayList.set('selectedIndex', 13)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 19.83,
           "yaw": -9.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 97,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_2_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -9.25
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 357,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -9.25
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_052497AE_0809_2A8F_4190_7D3562CF10B2",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 18.9,
           "yaw": -79.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 30,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_3_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 17.35
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 353,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 17.35
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_0597A983_080B_2776_4195_7EEDF0B279B4",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 22.24,
           "yaw": 12.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 57,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_4_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 7.67
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 401,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 7.67
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_063FD38F_080B_2A8E_4195_581E79BC2582",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 30.51,
           "yaw": 169.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_5_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 27.27
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 613,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 27.27
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_BF530A16_AE87_0EF6_41D5_B90C2F07FD42",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_BD7579E4_AE89_0D4B_41CA_689AE82F2013); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 30.36,
           "yaw": -77.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 146,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_6_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 11.78
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 555,
              "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 11.78
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       }
      }
     ],
     "label": "Escaliers - retouche",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_t.jpg",
     "vfov": 180
    },
    "yaw": -140.96,
    "backwardYaw": -77.48,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 42.98,
       "backwardYaw": -140.78,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
          "yaw": -22.96,
          "backwardYaw": 129.11,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
             "yaw": -72,
             "backwardYaw": 124.06,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_BD086005_A15F_E59E_41E1_9F9FD6E60540",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_BA1AC860_AE89_0B4B_41B4_2F447B030892); this.mainPlayList.set('selectedIndex', 14)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 12.14,
                 "yaw": -72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 58,
                    "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_0_HS_0_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -8.82
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 217,
                    "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -8.82
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             }
            }
           ],
           "label": "Salle r\u00e9union-retouche",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_t.jpg",
           "vfov": 180
          },
          "yaw": 124.06,
          "backwardYaw": -72,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
             "yaw": 117.23,
             "backwardYaw": 87.13,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfovMax": 100,
              "hfovMin": 80,
              "partial": false,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
                "yaw": 106.35,
                "backwardYaw": 31.93,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "id": "panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55",
              "pitch": 0,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_BAD34B23_A15E_FB9A_41D8_F223DB17E83A",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E, this.camera_BA11787B_AE89_0B3D_41E2_50AF6A2FDDA8); this.mainPlayList.set('selectedIndex', 16)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 22.24,
                    "yaw": 106.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 77,
                       "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_0_HS_0_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -13.64
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 402,
                       "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -13.64
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                }
               }
              ],
              "label": "Salle musique-retouche",
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_t.jpg",
              "vfov": 180
             },
             "yaw": 31.93,
             "backwardYaw": 106.35,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_BABA2D0A_A151_1FAA_41B8_16E9209988CA",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_BBA02923_AE89_0ACD_41D1_237435974FDF); this.mainPlayList.set('selectedIndex', 14)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 7.17,
                 "yaw": 117.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 48,
                    "width": 65,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -13.12
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 131,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -13.12
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_05319237_0809_259E_4172_155EA45E0028",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 45.33,
                 "yaw": 33.57,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 71,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_2_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 1.16
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 810,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 1.16
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_BC71A71E_AE8F_06F7_41BA_9DC9DB03C776",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55, this.camera_BDA83958_AE89_0D7A_41AF_643ABE5AEA92); this.mainPlayList.set('selectedIndex', 17)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 65.96,
                 "yaw": 31.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 131,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_3_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -17.87
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "hfov": 65.96,
                 "yaw": 31.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 2027,
                    "width": 1328,
                    "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -17.87
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             }
            }
           ],
           "label": "Porte musique-retouche",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_t.jpg",
           "vfov": 180
          },
          "yaw": 87.13,
          "backwardYaw": 117.23,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_B9603EBD_A151_3AEE_41CD_F1D53D7A64FB",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E, this.camera_BD7A59CC_AE89_0D5B_41E5_C96930A70283); this.mainPlayList.set('selectedIndex', 16)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 10.63,
              "yaw": 87.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 162,
                 "width": 95,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.47
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 190,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.47
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_BBBF992C_A152_E7EE_41E2_A6F88F846DF8",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_BD4FD9B4_AE89_0DCB_41B7_CF2C9062ED66); this.mainPlayList.set('selectedIndex', 15)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 6.43,
              "yaw": -22.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "width": 63,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -24.61
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 126,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -24.61
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_B8865C45_A157_1D9E_41C7_6D8B30D74A23",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E, this.camera_BD45D9BF_AE89_0D35_41E0_19250AA91569); this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 24.9,
              "yaw": 124.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 57,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_2_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.25
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 452,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -16.25
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_053DC43A_0809_2D96_4147_6BA80028CFDC",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 24.44,
              "yaw": 150.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 21,
                 "width": 16,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_3_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 8.21
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 441,
                 "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 8.21
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "label": "Couloir musique-reu-retouche",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_t.jpg",
        "vfov": 180
       },
       "yaw": 129.11,
       "backwardYaw": -22.96,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
          "yaw": 136.6,
          "backwardYaw": 8.48,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_AB3EF947_A0D7_679A_41E2_563F5194658B",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_BD78AEA9_A15E_FA96_41CF_1652837D8A5A",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_BD7039D9_AE89_0D7D_41E2_214CF001F626); this.mainPlayList.set('selectedIndex', 15)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 9.88,
              "yaw": 136.6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 54,
                 "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.68
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 176,
                 "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.68
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "label": "Terrasse-retouche",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_t.jpg",
        "vfov": 180
       },
       "yaw": 8.48,
       "backwardYaw": 136.6,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_B8930210_A157_25B6_41E1_8FEF631587FF",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0, this.camera_BDAF8971_AE89_0D4A_41A2_C8EF9A599DC4); this.mainPlayList.set('selectedIndex', 14)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 6.61,
           "yaw": 129.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 52,
              "width": 67,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -28.13
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 134,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -28.13
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_BBC66501_A156_EF96_41D8_B66FC472D544",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_BDAC4964_AE89_0D4A_41C1_BAEC51B28F4E); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 15.36,
           "yaw": 42.98,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 81,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.42
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 276,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -5.42
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_BB7EE2D6_A151_EABA_41D2_EE444CE561AC",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B, this.camera_BDA5D97B_AE89_0D3E_41DB_09736648527A); this.mainPlayList.set('selectedIndex', 19)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 14.45,
           "yaw": 8.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 79,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_2_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.13
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 259,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -5.13
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_BA68A949_A153_2796_41E3_178E9EA73968",
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 18)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 13.33,
           "yaw": -156.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 83,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_3_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -8.1
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "hfov": 13.33,
           "yaw": -156.83,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 573,
              "width": 239,
              "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.1
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       }
      }
     ],
     "label": "hall terrasse-retouche",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_t.jpg",
     "vfov": 180
    },
    "yaw": -140.78,
    "backwardYaw": 42.98,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 168.67,
       "backwardYaw": 76.25,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_B02DBE55_A136_FDBF_4194_0875C40E0D3E",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_BA74981F_AE89_0AF6_41CC_4C721745C0E7); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 14.92,
           "yaw": 168.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 133,
              "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.49
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 268,
              "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 0.49
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       }
      }
     ],
     "label": "Ext\u00e9rieur",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_t.jpg",
     "vfov": 180
    },
    "yaw": 76.25,
    "backwardYaw": 168.67,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 100,
     "hfovMin": 80,
     "partial": false,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 100,
        "hfovMin": 80,
        "partial": false,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
          "yaw": 63.83,
          "backwardYaw": 23.08,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 100,
           "hfovMin": 80,
           "partial": false,
           "adjacentPanoramas": [
            {
             "panorama": {
              "hfovMax": 100,
              "hfovMin": 80,
              "partial": false,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
                "yaw": -67.05,
                "backwardYaw": 153.13,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 100,
                 "hfovMin": 80,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                      "yaw": -91.58,
                      "backwardYaw": 84.26,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 100,
                       "hfovMin": 80,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                         "yaw": -145.06,
                         "backwardYaw": -159,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
                         "yaw": -66.5,
                         "backwardYaw": -168.91,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "id": "panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
                       "pitch": 0,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_B49FAE22_A133_7D9A_4175_49C46A2237B5",
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B, this.camera_BD235A4A_AE89_0F5E_41C2_AE35BBC08D93); this.mainPlayList.set('selectedIndex', 20)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "useHandCursor": true,
                           "maps": [
                            {
                             "hfov": 6.58,
                             "yaw": -66.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 46,
                                "width": 58,
                                "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -4.24
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
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
                                "width": 117,
                                "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -4.24
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_B7BE6AA2_A131_3A9A_41E1_B3EFE195CB42",
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_BD2A1A3E_AE89_0F36_417E_DACEEB4BA8A8); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "useHandCursor": true,
                           "maps": [
                            {
                             "hfov": 5.06,
                             "yaw": -145.06,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 40,
                                "width": 45,
                                "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -0.98
                            }
                           ],
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
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
                                "width": 90,
                                "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -0.98
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3217,
                            "width": 6434,
                            "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         }
                        }
                       ],
                       "label": "Jardin volley fond",
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_t.jpg",
                       "vfov": 180
                      },
                      "yaw": -168.91,
                      "backwardYaw": -66.5,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "id": "panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
                    "pitch": 0,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_BFAA35F1_AE8B_054A_41E2_2499BC65CAFE",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2, this.camera_BD153A11_AE89_0ECD_41D7_1460AF16482E); this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 5.02,
                          "yaw": -168.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 62,
                             "width": 44,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -3.37
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
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
                             "width": 89,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -3.37
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_BCFED49D_AE89_1BFA_41DC_B96E7495C6EE",
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 4.55,
                          "yaw": -52.43,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 38,
                             "width": 40,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -4.28
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
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
                             "width": 81,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -4.28
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_BC33F663_AE89_074D_41B9_DAE4320FF988",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_BD1B2A06_AE89_0ED7_41DB_E0E70B2277D0); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 4.61,
                          "yaw": -91.58,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 47,
                             "width": 41,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -2.95
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
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
                             "width": 82,
                             "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -2.95
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      }
                     }
                    ],
                    "label": "jardin fond.jpg",
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_t.jpg",
                    "vfov": 180
                   },
                   "yaw": 84.26,
                   "backwardYaw": -91.58,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                   "yaw": -124.51,
                   "backwardYaw": 122.37,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 100,
                    "hfovMin": 80,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                      "yaw": 79.18,
                      "backwardYaw": 1.62,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "id": "panorama_AB276077_A0D7_267A_41CD_45E2B6A89441",
                    "pitch": 0,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_B59E4B06_A13E_FB9A_41D9_458943E1370C",
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_BB85690E_AE89_0AD7_41C2_2794C1858A2F); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "useHandCursor": true,
                        "maps": [
                         {
                          "hfov": 4.22,
                          "yaw": 79.18,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 39,
                             "width": 37,
                             "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -6.56
                         }
                        ],
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
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
                             "width": 75,
                             "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -6.56
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      }
                     }
                    ],
                    "label": "Jardin herbe ",
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_t.jpg",
                    "vfov": 180
                   },
                   "yaw": 1.62,
                   "backwardYaw": 79.18,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "id": "panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
                 "pitch": 0,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_B24FFA0D_A131_25AF_41C5_A8724F33F03A",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_BBDB28C2_AE89_0B4F_41CE_6A51C72D02C1); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 8.4,
                       "yaw": -124.51,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 62,
                          "width": 75,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.98
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
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
                          "width": 150,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -4.98
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_B5F0AC0E_A131_1DAA_41E2_B8AA9CE01446",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441, this.camera_BBD498CD_AE89_0B54_41E0_4CAA8E0DEFF2); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 6.17,
                       "yaw": 1.62,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 51,
                          "width": 55,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.74
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
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
                          "width": 110,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -4.74
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_B5833C53_A13E_FDBA_41E2_AB39C3784A40",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B, this.camera_BA2018B4_AE89_0BCB_41E1_C640CA00A3F9); this.mainPlayList.set('selectedIndex', 20)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 4.66,
                       "yaw": 84.26,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 49,
                          "width": 41,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.34
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
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
                          "width": 83,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -6.34
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_B5D6FD7F_A13F_FE65_41A3_DF7AFC60AC91",
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 5.45,
                       "yaw": 160.43,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 38,
                          "width": 48,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -3.47
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
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
                          "width": 97,
                          "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -3.47
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   }
                  }
                 ],
                 "label": "Jardin milieu",
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_t.jpg",
                 "vfov": 180
                },
                "yaw": 122.37,
                "backwardYaw": -124.51,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 100,
                 "hfovMin": 10,
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
                   "yaw": 31.41,
                   "backwardYaw": 63.51,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "id": "panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333",
                 "pitch": 0,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_B46B51CD_A133_26AE_41B9_E731BBB6CCDF",
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_BD0DBA1E_AE89_0EF7_41DB_8EBBDE0B0AF3); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "useHandCursor": true,
                     "maps": [
                      {
                       "hfov": 3.86,
                       "yaw": 31.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 39,
                          "width": 34,
                          "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -7.92
                      }
                     ],
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
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
                          "width": 69,
                          "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -7.92
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   }
                  }
                 ],
                 "label": "Jardin ping pong",
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_t.jpg",
                 "vfov": 180
                },
                "yaw": 63.51,
                "backwardYaw": 31.41,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "panorama": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
                "yaw": -159,
                "backwardYaw": -145.06,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "id": "panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
              "pitch": 0,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_B0292368_A137_EB96_41CA_3363C5828EB9",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057, this.camera_BBF098E3_AE89_0B4D_41E5_365FA4C2B5E9); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 18.25,
                    "yaw": -67.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 156,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_0_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.66
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 328,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -3.66
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_B2E60001_A131_6596_41C7_DA5A95E57C1B",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2, this.camera_BB970903_AE89_0ACD_41E2_59056B280FDD); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 5.7,
                    "yaw": -159,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 40,
                       "width": 51,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.14
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 102,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.14
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_B378DE1D_A132_FDAE_41E3_32642B40A169",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333, this.camera_BB9B58F9_AE89_0B3C_41E3_EA9ACAADEF8A); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 5.2,
                    "yaw": 63.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 39,
                       "width": 46,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -6.24
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 93,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -6.24
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_B3EDA4B6_A133_2EFA_41D0_D35E5A844CE6",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99, this.camera_BBED48EF_AE89_0B55_41BD_6F234734E720); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 3.75,
                    "yaw": 122.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 29,
                       "width": 33,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.81
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 67,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.81
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_04CD4130_080F_2791_418D_6B9922923DDE",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "useHandCursor": true,
                  "maps": [
                   {
                    "hfov": 31.14,
                    "yaw": -62.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 46,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_4_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 17.33
                   }
                  ],
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
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
                       "width": 583,
                       "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 17.33
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                }
               }
              ],
              "label": "Jardin sortie",
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_t.jpg",
              "vfov": 180
             },
             "yaw": 153.13,
             "backwardYaw": -67.05,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
             "yaw": 49.93,
             "backwardYaw": -116.98,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_B1D8C51D_A132_EFAE_41AD_A9FDE5D61674",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E, this.camera_BA3758A9_AE89_0BDD_41E1_D18C5D0A0067); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 5.44,
                 "yaw": 49.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 51,
                    "width": 52,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -22.31
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 105,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -22.31
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_04AE9DFF_080B_3E8F_4182_47F930E16192",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 19.33,
                 "yaw": 156.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 57,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_2_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 10.03
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 350,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 10.03
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_BEEE0735_AE89_0530_41C4_27797B800512",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6, this.camera_BA3C089F_AE89_0BF5_418B_4CBC0AE13B44); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "useHandCursor": true,
               "maps": [
                {
                 "hfov": 14.93,
                 "yaw": 153.13,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 113,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_3_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -5.32
                }
               ],
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
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
                    "width": 268,
                    "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -5.32
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             }
            }
           ],
           "label": "Cafet fond",
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_t.jpg",
           "vfov": 180
          },
          "yaw": -116.98,
          "backwardYaw": 49.93,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_B35781B0_A131_26F6_41DC_F60F32FC3501",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B, this.camera_BA6C2836_AE89_0B36_41D3_C4B8ED8D89B9); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 7.74,
              "yaw": 63.83,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "width": 71,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.11
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 143,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -15.11
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_B15E519A_A132_E6AA_41D9_B4DBB5ED7F6F",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057, this.camera_BA62984C_AE89_0B5A_41E0_72EC518C7D99); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "useHandCursor": true,
            "maps": [
             {
              "hfov": 5.93,
              "yaw": -116.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "width": 55,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -17.48
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
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
                 "width": 111,
                 "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -17.48
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          }
         }
        ],
        "label": "Cafet milieu",
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_t.jpg",
        "vfov": 180
       },
       "yaw": 23.08,
       "backwardYaw": 63.83,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
       "yaw": 130.54,
       "backwardYaw": 144.47,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_AE500561_A0D1_2F96_41D6_CD0BE9F16292",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199, this.camera_BD301A34_AE89_0ECA_41E1_AB755EE3C690); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 25.29,
           "yaw": 130.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 167,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -8.14
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 459,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -8.14
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_AEF66134_A12F_27FD_41C3_2E8AF9A5D26B",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E, this.camera_BD07AA2A_AE89_0EDE_41E3_7C4C2A8B4D7D); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 5.74,
           "yaw": 23.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "width": 53,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -15.89
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 106,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -15.89
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_04F1FA39_080B_E592_4183_204180767087",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "useHandCursor": true,
         "maps": [
          {
           "hfov": 18.92,
           "yaw": 131.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 46,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_2_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 10.38
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
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
              "width": 343,
              "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 10.38
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       }
      }
     ],
     "label": "Cafet entr\u00e9e",
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_t.jpg",
     "vfov": 180
    },
    "yaw": 144.47,
    "backwardYaw": 130.54,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "id": "panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_AD507D79_A0D1_3E76_41CA_3418B7F9EB27",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA, this.camera_BD5FD992_AE89_0DCE_41BB_F566B9D20C0A); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 35.75,
        "yaw": -140.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 153,
           "width": 200,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.26
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 660,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 3.26
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_AEC57754_A0D3_6BBE_41D8_0E6F04221AE7",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0, this.camera_BD5B1988_AE89_0DDA_41B8_4985917FAD9A); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 34.92,
        "yaw": -140.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 157,
           "width": 199,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.06
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 644,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.06
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_06169020_0817_65B2_419B_6A3D6FADC06E",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B, this.camera_BD49D9A8_AE89_0DDB_41B4_B3FC5DD10572); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 44.73,
        "yaw": 144.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 152,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.63
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 842,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -13.63
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_04C4F715_0817_2B92_4176_0E1922FD02BE",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 23.13,
        "yaw": 134.84,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 78,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 16.01
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 429,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 16.01
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_04F83E88_0809_1D72_4155_459668DCEC04",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 14.29,
        "yaw": 99.1,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 26,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.18
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 257,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 7.18
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_05217733_0809_2B96_4170_9ECA91FED6BE",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 16.85,
        "yaw": -137.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 50,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.79
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 303,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.79
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_0567A456_080B_2D9E_417D_AC65848109CE",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 21.26,
        "yaw": -135.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 65,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.76
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 389,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.76
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A01D33E5_AE99_3D55_41E2_2D2BAA7C1EED",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14, this.camera_BD55299D_AE89_0DFA_41DA_9DA3962BE6A8); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 32.12,
        "yaw": 76.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 127,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.8
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
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
           "width": 589,
           "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.8
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "label": "Entr\u00e9e",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_t.jpg",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B",
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A930560E_A0D1_EDAD_41DF_33A3BAC1B199",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB808C86_A0D3_1E9A_41D0_D7180BF21F9B",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ABB45588_A0D1_6E96_41D3_3BDF918BEE4E",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC5574B2_A0DF_EEFA_41E2_3FB9E89D2057",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC83A239_A0D1_25F6_41D4_2A6A65432D14",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC52E3C3_A0D3_6A9A_41CB_860168A585E6",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ADF043E3_A0D1_2A9A_41A0_C34C7E933D99",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB276077_A0D7_267A_41CD_45E2B6A89441",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC04ED0E_A0D1_7FAA_41D0_AAD073A96333",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ACE30464_A0EF_2D9E_41BF_BAB3ADD658A2",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC82E1F8_A0D1_2676_41E2_7787EAE458F0",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6C4079_A0D1_6676_41D7_AEE7A829803F",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6DD52C_A0D1_2FEE_41CE_3DCE4B5B2959",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB6D8821_A0D1_2596_41DF_E1DC5F0B6AD7",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AC9B9141_A0D6_E796_41D8_4CB235545EA0",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3E64B0_A0D7_2EF6_41E3_F01C762CABBA",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EAD59_A0D7_3FB6_41B4_EF8216669A2E",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3E76A8_A0D7_2A96_41B7_3077A2CDAE55",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EEF61_A0D7_1B96_41CB_7580EDE7435E",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_AB3EF947_A0D7_679A_41E2_563F5194658B",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "camera": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_BE155DFD_AEF9_053A_41C8_C90075A48E0B",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -103.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA74981F_AE89_0AF6_41CC_4C721745C0E7",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -156.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA6C2836_AE89_0B36_41D3_C4B8ED8D89B9",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -130.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA62984C_AE89_0B5A_41E0_72EC518C7D99",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -55.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA1AC860_AE89_0B4B_41B4_2F447B030892",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -148.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA11787B_AE89_0B3D_41E2_50AF6A2FDDA8",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 150.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA0A3889_AE89_0BDD_41E4_D7023CEAB3CE",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -127.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA045893_AE89_0BCD_41D1_6798F2425BE3",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 112.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA3C089F_AE89_0BF5_418B_4CBC0AE13B44",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 63.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA3758A9_AE89_0BDD_41E1_D18C5D0A0067",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 88.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BA2018B4_AE89_0BCB_41E1_C640CA00A3F9",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -57.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBDB28C2_AE89_0B4F_41CE_6A51C72D02C1",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -100.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBD498CD_AE89_0B54_41E0_4CAA8E0DEFF2",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -141.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBC2A8D8_AE89_0B7B_41D7_6F426B82682C",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -26.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBF098E3_AE89_0B4D_41E5_365FA4C2B5E9",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 55.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBED48EF_AE89_0B55_41BD_6F234734E720",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -148.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BB9B58F9_AE89_0B3C_41E3_EA9ACAADEF8A",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 34.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BB970903_AE89_0ACD_41E2_59056B280FDD",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -178.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BB85690E_AE89_0AD7_41C2_2794C1858A2F",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 170.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBB18918_AE89_0AFB_41CD_C02DFDA5F2DE",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -92.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BBA02923_AE89_0ACD_41D1_237435974FDF",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -73.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BDA83958_AE89_0D7A_41AF_643ABE5AEA92",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 39.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BDAC4964_AE89_0D4A_41C1_BAEC51B28F4E",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 157.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BDAF8971_AE89_0D4A_41A2_C8EF9A599DC4",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -43.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BDA5D97B_AE89_0D3E_41DB_09736648527A",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 102.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD5B1988_AE89_0DDA_41B8_4985917FAD9A",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -137.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD5FD992_AE89_0DCE_41BB_F566B9D20C0A",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -11.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD55299D_AE89_0DFA_41DA_9DA3962BE6A8",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -49.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD49D9A8_AE89_0DDB_41B4_B3FC5DD10572",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -50.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD4FD9B4_AE89_0DCB_41B7_CF2C9062ED66",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 108,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD45D9BF_AE89_0D35_41E0_19250AA91569",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -62.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD7A59CC_AE89_0D5B_41E5_C96930A70283",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -171.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD7039D9_AE89_0D7D_41E2_214CF001F626",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 39.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD7579E4_AE89_0D4B_41CA_689AE82F2013",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 65.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD6C69EF_AE89_0D55_41D6_D1012CD61AB1",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -96.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD61E9FA_AE89_0D3F_41E0_F067BF0105BE",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -95.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD1B2A06_AE89_0ED7_41DB_E0E70B2277D0",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": 113.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD153A11_AE89_0ECD_41D7_1460AF16482E",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -116.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD0DBA1E_AE89_0EF7_41DB_8EBBDE0B0AF3",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": -116.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD07AA2A_AE89_0EDE_41E3_7C4C2A8B4D7D",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "hfov": 100,
   "yaw": -35.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD301A34_AE89_0ECA_41E1_AB755EE3C690",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD2A1A3E_AE89_0F36_417E_DACEEB4BA8A8",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "yaw": 11.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_BD235A4A_AE89_0F5E_41C2_AE35BBC08D93",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingRight": 0,
  "toolTipFontFamily": "Arial",
  "minHeight": 50,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderColor": "#000000",
  "progressBarOpacity": 1,
  "class": "ViewerArea",
  "toolTipShadowColor": "#333333",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "toolTipBorderRadius": 3,
  "shadow": false,
  "progressBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "progressBottom": 0,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "playbackBarHeadOpacity": 1,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingTop": 4,
  "progressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowBlurRadius": 3,
  "width": "100%",
  "playbackBarHeadWidth": 6,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "height": "100%",
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "progressBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "id": "MainViewer",
  "playbackBarHeadHeight": 15,
  "playbackBarOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontSize": 12,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6"
 }
], 
 "verticalAlign": "top",
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; }
 },
 "minWidth": 20,
 "paddingRight": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "class": "Player",
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left",
 "gap": 10,
 "overflow": "visible",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "shadow": false,
 "id": "rootPlayer",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true
})