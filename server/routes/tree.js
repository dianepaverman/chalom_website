var express = require('express');  
var router = express.Router();

/* GET family tree members listing. */
router.get('/', function(req, res, next) {  
  res.json({
    tree: [
      {
    "name": "Ralph Chalom & Canden Contente",
    "kids": [
        {
        "name": "Benjamin & Clara Chalom",
        "kids": [
                 {"name": "Dorothy & Morris Chalom",
                 "kids": [
                          {"name": "Susan"},
                          {"name": "Mark & Betty Chalom",
                           "kids": [
                                   {"name": "Matt"}
                                   ]
                              },
                          {"name": "Russel & Barbara Chalom"}
                     ]
                    },
                 {"name": "Selma & Irving \"Cliff\" Paverman",
                 "kids": [
                          {"name": "Randi & Earl Rust",
                          "kids": [
                                   {"name": "Brian & Maria Rust",
                                   "kids": [
                                            {"name":"Isabella"},
                                            {"name":"Penelope"}
                                            ]
                                   },
                                   {"name": "Sarah & Nicholas Pylant"}
                                   ]
                          },
                          {"name": "Steven & Veronica Paverman",
                          "kids": [
                                   {"name": "Lauren"},
                                   {"name": "Diane"}
                                   ]
                          },
                          {"name": "Alan & Stacey Paverman",
                          "kids": [
                                   {"name": "Rebecca"},
                                   {"name": "Rachel"}
                                   ]
                          },
                          {"name": "Robert & Adriana Paverman",
                          "kids": [
                                   {"name": "Alyssa"}
                                   ]
                          }
                      ]
                 },
                 {"name": "Catherine & Jimmy Peloso",
                 "kids": [
                          {"name": "Don & Adrienne Peloso",
                          "kids": [
                                   {"name": "Brooke & Will Horowitz",
		                          	"kids": [
		                                   {"name": "Mack"}
		                                   ]
                               		},
                                   {"name": "Jason"}
                                   ]
                          },
                          {"name": "Ed & Marie Peloso",
                          "kids": [
                                   {"name": "Jessica"},
                                   {"name": "Elana"}
                                   ]
                          },
                          {"name": "Jon & Rose Marie Peloso",
                          "kids": [
                                   {"name": "Dana"}
                                   ]
                          }
                          ]
                 },
                 {"name": "Viola & Sonny Halper",
                 "kids": [
                          {"name": "Caren & Jon Matzkin",
                          "kids": [
                                   {"name": "Vita Marie"},
                                   {"name": "Paulina"}
                                   ]
                          },
                          {"name": "Bruce & Jackie Halper",
                          "kids": [
                                   {"name": "Justin"},
                                   {"name": "Kristen"}
                                   ]
                          },
                          {"name": "Michael & Clare, Carol",
                          "kids": [
                                   {"name": "Benjamin"},
                                   {"name": "Sandra"}
                                   ]
                          },
                          {"name": "Neal & Debbie Halper",
                          "kids": [
                                   {"name": "Susan"},
                                   {"name": "Alyssa"},
                                   {"name": "Erin"}
                                   ]
                          }
                          ]
                 }
            ]
        },
        {
        "name": "Aron & Ester Pichon",
        "kids": [
                {"name": "Keti"}
            ]
        },
         {
         "name": "Ester & Campeas Chalom",
         "kids": [
                  {"name": "Violet"},
                  {"name": "Eli",
                  "kids": [
                           {"name": "Orly"},
                           {"name": "Eti"}
                           ]
                  }
                  ]
         },
         {
         "name": "Vida Chalom",
         "kids": []
         },
         {
         "name": "Coya & Abraham Tovi",
         "kids": [
                  {"name": "Viktor"},
                  {"name": "Joseph"},
                  {"name": "Abraham"},
                  {"name": "Rebecca"}
                  ]
         },
        {
            "name": "Alegra & Victor Tobi",
            "kids": [
                     {"name": "Alberto"},
                     {"name": "David"},
                     {"name": "Violeta"},
                     {"name": "Markus"},
                     {"name": "Mozes"},
                     {"name": "Izak"},
                     {"name": "Eliza"},
                     {"name": "Samuel"}
                     ]
        },
        {
            "name": "Joseph & Zimbul Chalom",
             "kids": [
                      {"name": "Eli & Ester",
                      "kids": [
                               {"name": "Vi"},
                               {"name": "Silvia & George Bolsom",
                               "kids": [
                                        {"name": "Alex"},
                                        {"name": "Jessica"}
                                        ]
                               }
                               ]
                      },
                      {"name": "Mo",
                      "kids": [
                               {"name": "Scott"},
                               {"name": "Valarie Chalom Sapiro"},
                               {"name": "Kara Mia Chalom"}
                               ]
                      },
                      {"name": "Ralph & Joyce Chalom",
                      "kids": [
                               {"name": "Joseph"}
                               ]
                      },
                      {"name": "Hannah & ? Lesser",
                      "kids": [
                               {"name": "Joel"},
                               {"name": "Nathan Shalom & Kathleen Alazraki",
                               "kids": [
                                        {"name": "Riki"},
                                        {"name": "Shay"},
                                        {"name": "Miki"},
                                        {"name": "Ruti & Edmon Keudi",
                                        "kids": [
                                                 {"name": "Mia"},
                                                 {"name": "Asaf"}
                                                 ]
                                        }
                                        ]
                               }
                               ]
                      },
                      {"name": "Chelebi Hayim & Ruti Asael",
                      "kids": [
                               {"name": "Baruh & Sara Hananya",
                               "kids": [
                                        {"name": "Ruti"},
                                        {"name": "Inci"}
                                        ]
                               }
                               ]
                      },
                      {"name": "Renee & Baruh Coh",
                      "kids": [
                               {"name": "Dina & Gideon Givony"},
                               {"name": "David & Michaela Savich",
                               "kids": [
                                        {"name": "Elad"},
                                        {"name": "Idan"},
                                        {"name": "Ofek"},
                                        {"name": "Yaniv"}
                                        ]
                               }
                               ]
                      }
                      ]
        },
        {
            "name": "Nathan & Miriam (Meri) Shalom",
            "kids": [
                     {"name": "Jacques & Ester Hason",
                     "kids": [
                              {"name": "Marie & Daniel Ruben",
                              "kids": [
                                       {"name": "Marc"},
                                       {"name": "Victoria & Jacob Norden",
                                       "kids": [
                                                {"name": "Nathan"},
                                                {"name": "Sacha"}
                                                ]
                                       },
                                       {"name": "Albert & Brigitte",
                                       "kids": [
                                                {"name": "Martin"},
                                                {"name": "Alice"}
                                                ]
                                       },
                                       {"name": "Pascale"},
                                       {"name": "Jaques & Nathalie",
                                       "kids": [
                                                {"name": "Margot"}
                                                ]
                                       }
                                       ]
                              }
                              ]
                     },
                     {"name": "Selma & Leon Aaladjem",
                     "kids": [
                              {"name": "Nathan & Shirley Sevits",
                              "kids": [
                                       {"name": "Tania & Meir Michaelian",
                                       "kids": [
                                                {"name": "Neomi"},
                                                {"name": "Danielle"},
                                                {"name": "Sivan"}
                                                ]
                                       },
                                       {"name": "Renee & Danny Kingsley",
                                       "kids": [
                                                {"name": "Adir"}
                                                ]
                                       },
                                       {"name": "Jaques"}
                                       ]
                              },
                              {"name": "Rozet"}
                              ]
                     },
                     {"name": "Estrea & Mai Benaderet",
                     "kids": [
                              {"name": "Meri & Efraim Menashe",
                              "kids": [
                                       {"name": "Itsik & Hagit Turjeman"},
                                       {"name": "Yael & Yuval Rafael"}
                                       ]
                              },
                              {"name": "Lina & Rifat Alfan",
                              "kids": [
                                       {"name": "Eli"}
                                       ]
                              },
                              {"name": "Moshe & Miriam Attias",
                              "kids": [
                                       {"name": "Nati"},
                                       {"name": "Adi"}
                                       ]
                              }
                              ]
                     }
                     ]
        }

    ]
}

    ]
  })
});

module.exports = router;  