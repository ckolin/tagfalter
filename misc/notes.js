const notes = [
    [
        {
            "img": "Papilio machaon_45378W.JPG"
        },
        {
            "name": "Papilio machaon (Schwalbenschwanz)"
        },
        {
            "img": "paste-c562662b3a07a5ea620ba6972073395ea2bb9c11.jpg"
        }
    ],
    [
        {
            "img": "Iphiclides podalirius_17051W.JPG"
        },
        {
            "name": "Iphiclides podalirius (Segelfalter)"
        },
        {
            "img": "paste-e1d6b1431d65350e73b0e751622944fd455c3f65.jpg"
        }
    ],
    [
        {
            "img": "apollo26.jpg"
        },
        {
            "name": "Parnassius apollo (Apollo)"
        },
        {
            "img": "paste-454e7566b2486181ac8a58cd015d1cdd6a1a79e8.jpg"
        }
    ],
    [
        {
            "img": "Parnassius_phoebus_m_OS.jpg"
        },
        {
            "name": "Parnassius phoebus (Alpenapollo)"
        },
        {
            "img": "paste-31b300157e172de9afe4fe66684e47d9dc83e998.jpg"
        }
    ],
    [
        {
            "img": "Parnassius mnemosyne_52154W.JPG"
        },
        {
            "name": "Parnassius mnemosyne (Schwarzer Apollo)"
        },
        {
            "img": "paste-1ddcae868d91f849bcd35df7f67a49ec9fd463a6.jpg"
        }
    ],
    [
        {
            "img": "Apatura iris_38763W.JPG"
        },
        {
            "img": "Apatura iris_18593W.JPG"
        },
        {
            "img": "th-294f226d6f43d1df03df5e0e35308010dc72a54a.jpg"
        },
        {
            "name": "Apatura iris (Grosser Schillerfalter)"
        },
        {
            "img": "paste-22a2f53c2fceb271c25ccaa2b9ae9fd2715cc318.jpg"
        }
    ],
    [
        {
            "img": "Apatura ilia_22563W.JPG"
        },
        {
            "img": "Apatura ilia_17889W.JPG"
        },
        {
            "img": "Apatura ilia_22756W.JPG"
        },
        {
            "name": "Apatura ilia (Kleiner Schillerfalter)"
        },
        {
            "img": "paste-1799267fa8bb991890dc5c9043e4dd8db26ebcba.jpg"
        }
    ],
    [
        {
            "img": "Limenitis camilla_45408W.JPG"
        },
        {
            "img": "Limenitis camilla_45414W.JPG"
        },
        {
            "name": "Limenitis camilla (Kleiner Eisvogel)"
        },
        {
            "img": "paste-61942a3204814a8267337f94f1eadadba13c3473.jpg"
        }
    ],
    [
        {
            "img": "Limenitis populi_22650W.JPG"
        },
        {
            "img": "Limenitis populi_22706W.JPG"
        },
        {
            "name": "Limenitis populi (Grosser Eisvogel)"
        },
        {
            "img": "paste-c2dfa363268080033c3bb1d9ba6e960c8ab83512.jpg"
        }
    ],
    [
        {
            "img": "Limenitis reducta_37087W.JPG"
        },
        {
            "img": "Limenitis reducta_31512W.JPG"
        },
        {
            "name": "Limenitis reducta (Blauschwarzer Eisvogel)"
        },
        {
            "img": "paste-0922322b7db587c56b6427331e6cc40a74a68672.jpg"
        }
    ],
    [
        {
            "img": "PB_rivularis_Neptis_KR7291_2004-06-04_aoGz.jpg"
        },
        {
            "img": "PB_rivularis_Neptis_KR7291_2004-06-04_basGz.jpg"
        },
        {
            "name": "Neptis rivularis (Schwarzer Trauerfalter)"
        },
        {
            "img": "paste-f10c4c2c6e54e750f6471bfefaf80f94d561e64f.jpg"
        }
    ],
    [
        {
            "img": "Anthocharis cardamines_45881W.JPG"
        },
        {
            "img": "Anthocharis cardamines_46948W.JPG"
        },
        {
            "name": "Anthocharis cardamines (Aurorafalter)"
        },
        {
            "img": "paste-60a738a7f4f407ac1ae16ae81497b2bd32391349.jpg"
        }
    ],
    [
        {
            "img": "Aporia crataegi_43064W.JPG"
        },
        {
            "img": "Aporia crataegi_05859W.JPG"
        },
        {
            "name": "Aporia crataegi (Baumweissling)"
        },
        {
            "img": "paste-9f691f73461d3a8c4581dfe135bdda542a27f473.jpg"
        }
    ],
    [
        {
            "img": "sinapis17.jpg"
        },
        {
            "img": "6292_1.jpg"
        },
        {
            "name": "Leptidea sinapis / L. juvernica (Tintenfleck)"
        },
        {
            "img": "paste-c71328d532a9c82e65b1ba957160393ab7575ce2.jpg"
        }
    ],
    [
        {
            "img": "brassicae12.jpg"
        },
        {
            "img": "Pieris brassicae_52145W.JPG"
        },
        {
            "img": "Pieris brassicae_52908W.JPG"
        },
        {
            "name": "Pieris brassicae (Grosser Kohlweissling)"
        },
        {
            "img": "paste-5cbc6d6606446cf8261dc17499870b129ceaa3e3.jpg"
        }
    ],
    [
        {
            "img": "bryoniae57.jpg"
        },
        {
            "img": "Pieris bryoniae_45572W.JPG"
        },
        {
            "name": "Pieris bryoniae (Bergweissling)"
        },
        {
            "img": "paste-d2aa19f77e90d23390cf9bac6d61c01a97ca242b.jpg"
        }
    ],
    [
        {
            "img": "mannii54.jpg"
        },
        {
            "img": "Pieris mannii_46578W.JPG"
        },
        {
            "name": "Pieris mannii (Karst-Weissling)"
        },
        {
            "img": "paste-e65030b5bb3565e1b210d7d08f9ec0c11c788d34.jpg"
        }
    ],
    [
        {
            "img": "Pieris napi_37577W.JPG"
        },
        {
            "img": "Pieris napi_16184W.JPG"
        },
        {
            "img": "Pieris napi_47922W.JPG"
        },
        {
            "name": "Pieris napi (Grünader-Weissling)"
        },
        {
            "img": "paste-015f946f78f1c447ba9554cd655f194ac9d8780d.jpg"
        }
    ],
    [
        {
            "img": "Pieris rapae_17219W.JPG"
        },
        {
            "img": "Pieris rapae_51585W.JPG"
        },
        {
            "img": "Pieris rapae_40696W.JPG"
        },
        {
            "name": "Pieris rapae (Kleiner Kohlweissling)"
        },
        {
            "img": "paste-ae5287647c86fef5196d4b6f8bcd140d3eda3b26.jpg"
        }
    ],
    [
        {
            "img": "Pontia callidice_22980W.JPG"
        },
        {
            "img": "Pontia callidice_53112W.JPG"
        },
        {
            "img": "Pontia callidice_30705W.JPG"
        },
        {
            "name": "Pontia callidice (Alpenweissling)"
        },
        {
            "img": "paste-b4532e97adae362800f6abef63e453b90ad280b8.jpg"
        }
    ],
    [
        {
            "img": "croceus30.jpg"
        },
        {
            "img": "croceus38.jpg"
        },
        {
            "img": "dark-clouded-yellow-butterfly-colias-croceus-isolated-white-background-35609438.jpg"
        },
        {
            "name": "Colias croceus (Postillion, Wandergelbling)"
        },
        {
            "img": "paste-2ba11d4e76d5d3efcf5c51ed22a43689c8f5d827.jpg"
        }
    ],
    [
        {
            "img": "Colias hyale_50342W.JPG"
        },
        {
            "img": "Colias hyale_50294W.JPG"
        },
        {
            "img": "12159921.jpg"
        },
        {
            "name": "Colias hyale (Goldene Acht) / C. alfacariensis (Hufeisenklee-Gelbling)"
        },
        {
            "img": "paste-229a4aa31ec7655eca381bb7b79bb8bd1c004eb1.jpg"
        }
    ],
    [
        {
            "img": "Colias palaeno_31316W.JPG"
        },
        {
            "img": "Colias.palaeno.mounted.jpg"
        },
        {
            "img": "colias_palaeno_ra6550.jpg"
        },
        {
            "name": "Colias palaeno (Hochmoor-Gelbling)"
        },
        {
            "img": "paste-57c92db8550b855df58c2c503e0321adacb4e38c.jpg"
        }
    ],
    [
        {
            "img": "Colias phicomone_13416W.JPG"
        },
        {
            "img": "Colias phicomone_23037W.JPG"
        },
        {
            "img": "01.jpg"
        },
        {
            "name": "Colias phicomone (Alpengelbling)"
        },
        {
            "img": "paste-d70ee2ed851793fa1e12d228aef24894f26593ce.jpg"
        }
    ],
    [
        {
            "img": "Gonepteryx rhamni_18902W.JPG"
        },
        {
            "name": "Gonepteryx rhamni (Zitronenfalter)"
        },
        {
            "img": "paste-2731552162886ed1555709c330a33e18688f7eee.jpg"
        }
    ],
    [
        {
            "img": "Thecla betulae_36479W.JPG"
        },
        {
            "img": "Thecla betulae_51831W.JPG"
        },
        {
            "img": "Thecla betulae_14398W.JPG"
        },
        {
            "name": "Thecla betulae (Nierenfleck)"
        },
        {
            "img": "paste-dae11a28767a9b31c76d60b5f5a36b9ef82c5c29.jpg"
        }
    ],
    [
        {
            "img": "Satyrium pruni_47002W.JPG"
        },
        {
            "img": "uIqbm2XwRi92eQU.jpeg"
        },
        {
            "name": "Satyrium pruni (Pflaumen-Zipfelfalter)"
        },
        {
            "img": "paste-256315e2060aff68839448fec4f2cf4dc2f65b0f.jpg"
        }
    ],
    [
        {
            "img": "Satyrium spini_10799W.JPG"
        },
        {
            "img": "39633.jpg"
        },
        {
            "name": "Satyrium spini (Kreuzdorn-Zipfelfalter)"
        },
        {
            "img": "paste-6d33ef387a6d3626d5685cc40909e356f6a849ed.jpg"
        }
    ],
    [
        {
            "img": "Satyrium w-album_10550W.JPG"
        },
        {
            "img": "Bji61tA9DwUdpqe.jpeg"
        },
        {
            "name": "Satyrium w-album (Ulmen-Zipfelfalter)"
        },
        {
            "img": "paste-e61345e62084b6c0d0e05b83d977e62e5da06a9f.jpg"
        }
    ],
    [
        {
            "img": "Favonius quercus_25946W.JPG"
        },
        {
            "img": "Favonius quercus_49879W.JPG"
        },
        {
            "img": "thecla_quercus19.jpg"
        },
        {
            "name": "Favonius quercus (Blauer Eichenzipfelfalter)"
        },
        {
            "img": "paste-fe615e7711190b368960aaf559206ef639be3399.jpg"
        }
    ],
    [
        {
            "img": "Callophrys rubi_09718W.JPG"
        },
        {
            "name": "Callophrys rubi (Brombeer-Zipfelfalter)"
        },
        {
            "img": "paste-98c69fe2e85e5e965ea1e2e2aa9bd62f5d6d1768.jpg"
        }
    ],
    [
        {
            "img": "Hamearis lucina_32486W.JPG"
        },
        {
            "img": "Hamearis lucina_37230W.JPG"
        },
        {
            "name": "Hamearis lucina (Brauner Würfelfalter, Frühlings-Scheckenfalter)"
        },
        {
            "img": "paste-6a04882fb76474cacee4fa964a5f252d9938685e.jpg"
        }
    ],
    [
        {
            "img": "Lycaena tityrus_33277W.JPG"
        },
        {
            "img": "lycaena tityrus_17207W.JPG"
        },
        {
            "img": "Lycaena tityrus_36805W.JPG"
        },
        {
            "name": "Lycaena tityrus (Brauner Feuerfalter)"
        },
        {
            "img": "paste-4e802edc85cc06e7ae19ed3f503502ffa0d4243a.jpg"
        }
    ],
    [
        {
            "img": "Lycaena hippothoe_30363W.JPG"
        },
        {
            "img": "Lycaena hippothoe_38617W.JPG"
        },
        {
            "img": "Lycaena hippothoe_17227W.JPG"
        },
        {
            "name": "Lycaena hippothoe (Kleiner Ampfer-Feuerfalter)&nbsp;"
        },
        {
            "img": "paste-084608d853f297f9bcf897a4ca7a349854346a10.jpg"
        }
    ],
    [
        {
            "img": "Lycaena phlaeas_25404W.JPG"
        },
        {
            "img": "Lycaena phlaeas_25402W.JPG"
        },
        {
            "name": "Lycaena phlaeas (Kleiner Feuerfalter)"
        },
        {
            "img": "paste-ad5fe6de137232bb7897e2422598b6609ba1cc07.jpg"
        }
    ],
    [
        {
            "img": "Lycaena alciphron_46353W.JPG"
        },
        {
            "img": "Lycaena alciphron_51614W.JPG"
        },
        {
            "name": "Lycaena alciphron (Violetter Feuerfalter)"
        },
        {
            "img": "paste-34ea43649c73df85d8c7719b71386ad5ee3e3cae.jpg"
        }
    ],
    [
        {
            "img": "Lycaena virgaureae_44550W.JPG"
        },
        {
            "img": "Lycaena virgaureae_18613W.JPG"
        },
        {
            "img": "Lycaena virgaureae_26603W.JPG"
        },
        {
            "name": "Lycaena virgaureae (Dukatenfalter)"
        },
        {
            "img": "paste-b18c4cb081b5ab67144735c49b609c5d33d9f991.jpg"
        }
    ],
    [
        {
            "img": "Cupido minimus_33461W.JPG"
        },
        {
            "img": "Cupido minimus_53020W.JPG"
        },
        {
            "name": "Cupido minimus (Zwergbläuling)"
        },
        {
            "img": "paste-c2a7dcdef1bc3c07af6f051fa67570f72203b3a2.jpg"
        }
    ],
    [
        {
            "img": "Cupido argiades_37503W.JPG"
        },
        {
            "img": "Cupido argiades_45654W.JPG"
        },
        {
            "name": "Cupido argiades (Kurzschwänziger Bläuling)"
        },
        {
            "img": "paste-273bc605f477b6082c0609ee6b67a735f0f2414b.jpg"
        }
    ],
    [
        {
            "img": "Celastrina argiolus_31730W.JPG"
        },
        {
            "img": "Celastrina argiolus_52184W.JPG"
        },
        {
            "name": "Celastrina argiolus (Faulbaum-Bläuling)"
        },
        {
            "img": "paste-505dec843dc1af57c950ef00f2fb8ab38c7cba2c.jpg"
        }
    ],
    [
        {
            "img": "Phengaris arion_46402W.JPG"
        },
        {
            "img": "Phengaris arion_48111W.JPG"
        },
        {
            "name": "Phengaris arion (Schwarzfleckiger Ameisenbläuling)"
        },
        {
            "img": "paste-e62deb52743a494e6dc1654119d696b14e683d69.jpg"
        }
    ],
    [
        {
            "img": "alcon-blue-alcon-large-blue-phengaris-alcon-maculinea-alcon-glaucopsyche-alcon-female-underside-cut-out-2RBKNG4.jpg"
        },
        {
            "img": "Phengaris alcon_13479W.JPG"
        },
        {
            "img": "Phengaris alcon (rebeli)_52825W.JPG"
        },
        {
            "img": "Phengaris alcon (rebeli)_12120W.JPG"
        },
        {
            "img": "paste-0226fa8f3111e5239a07e019378f9b5e2914b260.jpg"
        },
        {
            "name": "Phengaris alcon alcon/rebeli (Kreuzenzian-Ameisenbläuling)"
        },
        {
            "img": "paste-7cde3301750b8f059ad6d929e40320b977b499b1.jpg"
        }
    ],
    [
        {
            "img": "th-f0ca7100b7676b7e069ce863ac9a729b2646a56d.jpg"
        },
        {
            "img": "Phengaris nausithous_30986W.JPG"
        },
        {
            "name": "Phengaris nausithous (Dunkler Moorbläuling)"
        },
        {
            "img": "paste-195e7935f1cb1baf3522730df597767812f87e2c.jpg"
        }
    ],
    [
        {
            "img": "Phengaris teleius_44940W.JPG"
        },
        {
            "img": "Phengaris teleius_12909W.JPG"
        },
        {
            "name": "Phengaris teleius (Heller Wiesenknopf-Bläuling)"
        },
        {
            "img": "paste-75103bbf88935389cc28bdb609e2b942bdb059eb.jpg"
        }
    ],
    [
        {
            "img": "Plebejus argus_48782W.JPG"
        },
        {
            "img": "Plebejus argus_16859W.JPG"
        },
        {
            "img": "Plebejus argus_30203W.JPG"
        },
        {
            "name": "Plebejus argus (Argus-Bläuling)"
        },
        {
            "img": "paste-8b25f0bb097380738b8c2881beff2acfd321b377.jpg"
        }
    ],
    [
        {
            "img": "Plebejus idas_12735W.JPG"
        },
        {
            "img": "idas102.jpg"
        },
        {
            "name": "Plebejus idas (Idas-Bläuling)"
        },
        {
            "img": "paste-5de078932808a389b17d00490a2d0c625205c864.jpg"
        }
    ],
    [
        {
            "img": "Glaucopsyche alexis_45894W.JPG"
        },
        {
            "img": "Glaucopsyche alexis_40410W.JPG"
        },
        {
            "name": "Glaucopsyche alexis (Himmelblauer Steinklee-Bläuling)"
        },
        {
            "img": "paste-d151ce0760a556f509028bb480564b614ff429a7.jpg"
        }
    ],
    [
        {
            "img": "Aricia agestis_07704W.JPG"
        },
        {
            "img": "Aricia agestis_07696W.JPG"
        },
        {
            "name": "Aricia agestis (Kleiner Sonnenröschen-Bläuling)"
        },
        {
            "img": "paste-058bb2b8614cc6b83b3b36c98e84828fe420a6c0.jpg"
        }
    ],
    [
        {
            "img": "Aricia artaxerxes_22903W.JPG"
        },
        {
            "img": "Aricia artaxerxes_22527W.JPG"
        },
        {
            "name": "Aricia artaxerxes (Grosser Sonnenröschen-Bläuling)"
        },
        {
            "img": "paste-dafabef7ca5fa0fdc843dfab889c48ee4dfef4de.jpg"
        }
    ],
    [
        {
            "img": "Aricia eumedon_30367W.JPG"
        },
        {
            "img": "Aricia eumedon_36370W.JPG"
        },
        {
            "name": "Eumedonia eumedon (Storchschnabel-Bläuling)"
        },
        {
            "img": "paste-473deb45c13a97effbd8a2c25a42cfff0d4786bf.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus icarus_34490W.JPG"
        },
        {
            "img": "Polyommatus icarus_17004W.JPG"
        },
        {
            "name": "Polyommatus icarus (Hauhechel-Bläuling)"
        },
        {
            "img": "paste-7a476299110743228ac814db664e204e11c049f7.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus eros_22201W.JPG"
        },
        {
            "img": "Polyommatus eros_13216W.JPG"
        },
        {
            "name": "Polyommatus eros (Eros-Bläuling)"
        },
        {
            "img": "paste-ea124c136c20a8e97e737c3592378da162fd4d1f.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus thersites_45857W.JPG"
        },
        {
            "img": "Polyommatus thersites_24670W.JPG"
        },
        {
            "name": "Polyommatus thersites (Esparsetten-Bläuling)"
        },
        {
            "img": "paste-bd984179bd8a91acea4016a760e659cd1586e038.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus bellargus_35486W.JPG"
        },
        {
            "img": "Polyommatus bellargus_42180W.JPG"
        },
        {
            "name": "Lysandra bellargus (Himmelblauer Bläuling)"
        },
        {
            "img": "paste-4c862a7628a44ebfbdd7bf5fd28db897b528d9f7.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus coridon_22951W.JPG"
        },
        {
            "img": "Polyommatus coridon_08599W.JPG"
        },
        {
            "img": "Polyommatus coridon_23424W.JPG"
        },
        {
            "name": "Lysandra coridon (Silbergrüner Bläuling)"
        },
        {
            "img": "paste-6cc9fc847fd11e25e57c54cecbddfac86da7c4a1.jpg"
        }
    ],
    [
        {
            "img": "Cyaniris semiargus_25642W.JPG"
        },
        {
            "img": "Cyaniris semiargus_32600W.JPG"
        },
        {
            "name": "Cyaniris semiargus (Violetter Waldbläuling)"
        },
        {
            "img": "paste-fbfd7a227ba4b810b88f93e74f152cd005960241.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus damon_17648W.JPG"
        },
        {
            "img": "Polyommatus damon_03707W.JPG"
        },
        {
            "name": "Polyommatus damon (Grünblauer Bläuling)"
        },
        {
            "img": "paste-9d627adffe7c9100771e24e4c393e14103a2ff4c.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus amandus_10978W.JPG"
        },
        {
            "img": "Polyommatus amandus_01187W.JPG"
        },
        {
            "name": "Polyommatus amandus (Prächtiger Bläuling)"
        },
        {
            "img": "paste-77c288e6784824b5c76215643b60fc5bcffd6d5f.jpg"
        }
    ],
    [
        {
            "img": "Polyommatus dorylas_39167W.JPG"
        },
        {
            "img": "Polyommatus dorylas_48324W.JPG"
        },
        {
            "img": "Polyommatus dorylas_17995W.JPG"
        },
        {
            "name": "Polyommatus dorylas (Wundklee-Bläuling)"
        },
        {
            "img": "paste-bb8213bb80f00123e74c2cea8d74d32dcbb10e1e.jpg"
        }
    ],
    [
        {
            "img": "Pseudophilotes baton_28794W.JPG"
        },
        {
            "img": "Pseudophilotes baton_04962W.JPG"
        },
        {
            "img": "Pseudophilotes baton_18172W.JPG"
        },
        {
            "name": "Pseudophilotes baton (Graublauer Bläuling)"
        },
        {
            "img": "paste-eaed4eeb01cc9a691132df5fffd95d3702e35ddf.jpg"
        }
    ]
];

const res = {};
for (let note of notes) {
    let name = null;
    let images = [];
    for (let el of note) {
        if (el.img) {
            images.push(el.img);
        }
        if (el.name) {
            if (name != null) {
                console.log(`dup name ${name}`);
            }
            name = el.name;
        }
    }
    res[name] = images;
}
console.log(JSON.stringify(res));