document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const sendToAdmin = document.getElementById("send-to-admin");

    

    // All Products
    const products = [
       
        
        { name: "Panadol Extra Caplet", image: "images/panadol_extra_caplet.jpg" },
        { name: "Panadol Caplet", image: "images/panadol_caplet.jpg" },
        { name: "Unitrim Tablet", image: "images/unitrim_tablet.jpg" },
        { name: "Cenpain Night Tablets", image: "images/cenpain_night_tablets.jpg" },
        { name: "Emzor Paranight Tablet", image: "images/emzor_paranight_tablet.jpg" },
        { name: "Ricam Capsule", image: "images/ricam_capsule.jpg" },
        { name: "Felvin Capsule", image: "images/felvin_capsule.jpg" },
        { name: "Tetrakris Tetracycline Capsule", image: "images/tetrakris_tetracycline_capsule.jpg" },
        { name: "Tanzol Tablets", image: "images/tanzol_tablets.jpg" },
        { name: "Cipronol-TN", image: "images/cipronol_tn.jpg" },
        { name: "Fesulf by 1000", image: "images/fesulf.jpg" },
        { name: "Fesulf by 50", image: "images/fesulf_50.jpg" },
        { name: "Maxiquine Tablets", image: "images/maxiquine_tablets.jpg" },
        { name: "Bonduretic Tablets", image: "images/bonduretic_tablets.jpg" },
        { name: "Aeroline Inhaler", image: "images/aeroline_inhaler.jpg" },
        { name: "Cimetidine Tablets", image: "images/cimetidine_tablets.jpg" },
        { name: "Ampiclox TM Beecham Capsules", image: "images/ampiclox_tm_beecham_capsules.jpg" },
        { name: "Daravit Woman", image: "images/daravit_woman.jpg" },
        { name: "Sogalis Tablets 20mg", image: "images/sogalis_tablets_20mg.jpg" },
        { name: "Andrew’s Liver Salt", image: "images/andrews_liver_salt.jpg" },
        { name: "Karaole Powder", image: "images/karaole_powder.jpg" },
        { name: "Nifecard XL 30mg Tablets", image: "images/nifecard_xl_30mg_tablets.jpg" },
        { name: "Augmentin 625mg", image: "images/augmentin_625mg.jpg" },
        { name: "Emprin 75", image: "images/emprin_75.jpg" },
        { name: "Ciprotab 500 (10)", image: "images/ciprotab_500_10.jpg" },
        { name: "Mega Powa BG", image: "images/mega_powa_bg.jpg" },
        { name: "Suprakid Syrup", image: "images/suprakid_syrup.jpg" },
        { name: "Silver Bird", image: "images/silver_bird.jpg" },
        { name: "Castor Oil", image: "images/castor_oil.jpg" },
        { name: "Gyno-Tiocosid Tioconazole 100mg", image: "images/gyno_tiocosid_tioconazole_100mg.jpg" },
        { name: "Celebrex 200mg", image: "images/celebrex_200mg.jpg" },
        { name: "Fleming 457 Suspension", image: "images/fleming_457_suspension.jpg" },
        { name: "Ventolin Inhaler", image: "images/ventolin_inhaler.jpg" },
        { name: "Wellkid Baby and Infant", image: "images/wellkid_baby_and_infant.jpg" },
        { name: "Anacin Tab", image: "images/anacin_tab.jpg" },
        { name: "Antibiotics", image: "images/antibiotics.jpg" },
        { name: "Pain Reliever", image: "images/pain-reliever.jpg" },
        { name: "Durex", image: "images/durex.jpg" },
        { name: "Shalartem", image: "images/shalartem.jpg" },
        { name: "Bandages", image: "images/bandages.jpg" },
        { name: "Antiseptic", image: "images/antiseptic.jpg" },
        { name: "Kesartem", image: "images/kesartem.jpg" },
        { name: "Amatem", image: "images/amatem-softgel.jpg" },
        { name: "Hand Sanitizer", image: "images/hand-sanitizer.jpg" },
        { name: "Amoxicillin", image: "images/amoxicillin.jpg" },
        { name: "Ciprofloxacin", image: "images/ciprofloxacin.jpg" },
        { name: "Cetirizine", image: "images/cetirizine.jpg" },
        { name: "All Condoms", image: "images/allcondoms.jpg" },
        { name: "Arenax", image: "images/arenax.jpg" },
        { name: "Loratadine", image: "images/loratadine.jpg" },
        { name: "Multivitamins", image: "images/multivitamins.jpg" },
        { name: "Diclomol Gel", image: "images/diclomolgel.jpg" },
        { name: "Omeprazole", image: "images/omeprazole.png" },
        { name: "Loperamide", image: "images/loperamide.jpg" },
        { name: "Metformin", image: "images/metformin.jpg" },
        { name: "Aspirin", image: "images/aspirin.jpg" },
        { name: "Diclofenac", image: "images/diclofenac.jpg" },
        { name: "Losartan", image: "images/losartan.jpg" },
        { name: "Atorvastatin", image: "images/atovastatin.jpg" },
        { name: "Hydrochlorothiazide", image: "images/hydrochlorothiazide.jpg" },
        { name: "Supermag", image: "images/supermag.jpg" },
        { name: "Prednisolone", image: "images/prednisolone.jpg" },
        { name: "Azithromycin", image: "images/azithromycin.jpg" },
        { name: "Doxycycline", image: "images/doxycycline.jpg" },
        { name: "Insulin", image: "images/insulin.jpg" },
        { name: "Gestid", image: "images/gestid.jpg" },
        { name: "Salbutamol Inhaler", image: "images/salbutamol-inhaler.jpg" },
        { name: "Clotrimazole Cream", image: "images/clotrimazole-cream.jpg" },
        { name: "Miconazole", image: "images/miconazole.jpg" },
        { name: "Antacid Tablets", image: "images/antacid-tablets.jpg" },
        { name: "Camosunate", image: "images/camosunate.jpg" },
        { name: "Lonart", image: "images/lonart.jpg" },
        { name: "Ibuprofen Gel", image: "images/ibuprofen-gel.jpg" },
        { name: "Gaviscon", image: "images/gaviscon.jpg" },
        { name: "Exdryl", image: "images/exdryl.jpg" },
        { name: "Folic Acid", image: "images/folic-acid.jpg" },
        { name: "lokmal x6", image: "images/lokmal.jpg" },
        { name: "Calcium Supplements", image: "images/calcium-supplements.jpg" },
        { name: "Benylin child", image: "images/benylin.jpg" },
        { name: "Magnesium Tablets", image: "images/magnesium-tablets.jpg" },
        { name: "Zinc Lozenges", image: "images/zinc-lozenges.jpg" },
        { name: "Antihistamine Tablets", image: "images/antihistamine-tablets.jpg" },
        { name: "Eye Drops", image: "images/eye-drops.jpg" },
        { name: "Ear Drops", image: "images/ear-drops.jpg" },
        { name: "Nasal Spray", image: "images/nasal-spray.jpg" },
        { name: "Hydrocortisone Cream", image: "images/hydrocortisone-cream.jpg" },
        { name: "Sore Throat Lozenges", image: "images/sore-throat-lozenges.jpg" },
        { name: "Shaltoux", image: "images/shaltox.jpg" },
        { name: "Laxative Tablets", image: "images/laxative-tablets.jpg" },
        { name: "Anti-diarrheal Tablets", image: "images/anti-diarrheal-tablets.jpg" },
        { name: "Antifungal Powder", image: "images/antifungal-powder.jpg" },
        { name: "Chemiron tonic", image: "images/chemirontonic.jpg" },
        { name: "Bunto blood tonic", image: "images/bunto.jpg" },
        { name: "Amino Pep", image: "images/aminopep.jpg" },
        { name: "Chemiron capsule", image: "images/chemironcapsule.jpg" },
        { name: "Xasten tab", image: "images/xasten_tab.jpg" },
  { name: "Pyrantrin tablets", image: "images/pyrantrin_tablets.jpg" },
  { name: "Ascorbion by1000 vitamin c", image: "images/ascorbion_by1000.jpg" },
  { name: "Spartan c by 1000", image: "images/spartanc_by1000.jpg" },
  { name: "Bonadol caplets", image: "images/bonadol_caplets.jpg" },
  { name: "Folimop (folic acid syrup)", image: "images/folimop.jpg" },
  { name: "Em-B-Plex syrup", image: "images/em_b_plex_syrup.jpg" },
  { name: "Emzolyn 4-way syrup", image: "images/emzolyn_4way_syrup.jpg" },
  { name: "Moko iodine", image: "images/moko_iodine.jpg" },
  { name: "Novalyn dry cough", image: "images/novalyn_dry_cough.jpg" },
  { name: "KEEP-ON EMULSION", image: "images/keep_on_emulsion.jpg" },
  { name: "Admicin 500 tab", image: "images/admicin_500_tab.jpg" },
  { name: "Emzophage-500", image: "images/emzophage_500.png" },
  { name: "Foliquie +B12 by dr Mayer 100", image: "images/foliquie_b12.jpg" },
  { name: "Nifedipine dexcel 20 retard", image: "images/nifedipine_dexcel.jpg" },
  { name: "RGI loperamide capsules", image: "images/rgi_loperamide.jpg" },
  { name: "Astyfer capsules", image: "images/astyfer_capsules.jpg" },
  { name: "Kacham capsules", image: "images/kacham_capsules.jpg" },
  { name: "Lodium capsules", image: "images/lodium_capsules.jpg" },
  { name: "Amoxil 250mg becheem", image: "images/amoxil_250mg.jpg" },
  { name: "Arthrotec tab", image: "images/arthrotec_tab.jpg" },
  { name: "Menthodex mixture", image: "images/menthodex_mixture.jpg" },
  { name: "Diastop suspension", image: "images/diastop_suspension.jpg" },
  { name: "Novalyn syrup", image: "images/novalyn_syrup.jpg" },
  { name: "Oxynic tab", image: "images/oxynic_tab.jpg" },
  { name: "Moko liquid paraffin", image: "images/moko_liquid_paraffin.jpg" },
  { name: "Tuyil amoxicillin", image: "images/tuyil_amoxicillin.jpg" },
  { name: "Accu-life pregnancy test kit", image: "images/accu_life_test_kit.jpg" },
  { name: "Nifedicure tablet", image: "images/nifedicure_tablet.jpg" },
  { name: "Wormin tab", image: "images/wormin_tab.jpg" },
  { name: "Sudrex tablet", image: "images/sudrex_tablet.jpg" },
  { name: "B-Complex by 100 (dr Mayer)", image: "images/b_complex_dr_mayer.jpg" },
  { name: "Lexical-500 tab", image: "images/lexical_500_tab.jpg" },
  { name: "Camosunate tab junior 7-13yrs", image: "images/camosunate_junior.jpg" },
  { name: "Kesflox tablet", image: "images/kesflox_tablet.jpg" },
  { name: "Monover cap", image: "images/monover_cap.jpg" },
  { name: "Drujela mouth gel", image: "images/drujele_mouth_gel.jpg" },
  { name: "Zorflucan-1 caps (fluconazole 150mg)", image: "images/zorflucan_1_caps.jpg" },
  { name: "Kesflucan capsules (fluconazole 200mg)", image: "images/kesflucan_caps.jpg" },
  { name: "Swider tablets", image: "images/swider_tablets.jpg" },
  { name: "Fesulf by 100 tablets", image: "images/fesulf_100.jpg" },
    { name: "Loxagyl 200 tablets", image: "images/loxagyl_200.jpg" },
    { name: "Loxagyl 400 tablets", image: "images/loxagyl_400.jpg" },
    { name: "Pilex tablets", image: "images/pilex.jpg" },
    { name: "Unicure ciprofloxacin tablets 500mg", image: "images/unicure_ciprofloxacin_500.jpg" },
    { name: "Unicure plumal artemether 20/120", image: "images/unicure_plumal_20_120.jpg" },
    { name: "Lofnac- plus tablets", image: "images/lofnac_plus.jpg" },
    { name: "Lofnac 100 tab", image: "images/lofnac_100.jpg" },
    { name: "Unigyl 200 tab", image: "images/unigyl_200.jpg" },
    { name: "Unigyl 400 tab", image: "images/unigyl_400.jpg" },
    { name: "Exlopine Amlodipine tab 10mg", image: "images/exlopine_amlodipine_10mg.jpg" },
    { name: "Kassington Cod liver oil 1000mg", image: "images/kassington_cod_liver_1000mg.jpg" },
    { name: "Soft health Cod liver oil 300mg", image: "images/soft_health_cod_liver_300mg.jpg" },
    { name: "Ginovera multivitamin", image: "images/ginovera_multivitamin.jpg" },
    { name: "Astarclox", image: "images/astarclox.jpg" },
    { name: "Cypri gold syrup 200ml", image: "images/cypri_gold_200ml.jpg" },
    { name: "Shalina hemoforce forte tonic 200ml", image: "images/shalina_hemoforce_200ml.jpg" },
    { name: "Tuyil bunto tonic 100ml", image: "images/tuyil_bunto_100ml.jpg" },
    { name: "Vamobion children tonic 100ml", image: "images/tuyil_vamobion_100ml.jpg" },
    { name: "Tuyil Monover 100ml", image: "images/tuyil_monover_100ml.jpg" },
    { name: "Skg Rulox suspension 200ml", image: "images/skg_rulox_200ml.jpg" },
    { name: "Supermag 200mg", image: "images/supermag_200mg.jpg" },
    { name: "Supermag 100mg", image: "images/supermag_100mg.jpg" },
    { name: "Panda drop", image: "images/adrian_panda_drop.jpg" },
    { name: "Unitrim suspension", image: "images/unitrim_suspension.jpg" },
    { name: "Osworth vitamin c syrup", image: "images/osworth_vitamin_c.jpg" },
    { name: "Chemiron tonic 100ml", image: "images/chemiron_100ml.jpg" },
    { name: "Chemiron tonic 200ml", image: "images/chemiron_200ml.jpg" },
    { name: "Chemiron tonic 1liter", image: "images/chemiron_1liter.jpg" },
    { name: "Ferotal extra tonic 300ml", image: "images/ferotal_extra_300ml.jpg" },
    { name: "Hemoforce plus tonic 200ml", image: "images/hemoforce_plus_200ml.jpg" },
    { name: "Ferrotogen tonic 200ml", image: "images/ferrotogen_200ml.jpg" },
    { name: "Vami-cee syrup 100ml", image: "images/vami_cee_100ml.jpg" },
    { name: "Chemiron chemadol suspension", image: "images/chemiron_chemadol.jpg" },
    { name: "Chemiron vitamin c syrup", image: "images/chemiron_vitamin_c.jpg" },
    { name: "Ascorbion c300 100ml", image: "images/ascorbion_c300_100ml.jpg" },
    { name: "Becombion syrup 300ml", image: "images/becombion_300ml.jpg" },
    { name: "Calamine lotion 100ml", image: "images/calamine_lotion_100ml.jpg" },
    { name: "Afrab vite drop", image: "images/afrab_vite_drop.jpg" },
    { name: "Ferotal tonic 1liter", image: "images/ferotal_1liter.jpg" },
    { name: "Brustan-N syrup 100ml", image: "images/brustan_n_100ml.jpg" },
    { name: "Grape water Woodward", image: "images/grape_water_woodward.jpg" },
    { name: "Afrab vite multivitamin syrup 100ml", image: "images/afrab_vite_multivitamin_100ml.jpg" },
    { name: "Tuclox drop 90mg", image: "images/tuclox_90mg.jpg" },
    { name: "Emzor paracetamol drop", image: "images/emzor_paracetamol_drop.jpg" },
    { name: "Neofylin syrup 100ml", image: "images/neofylin_100ml.jpg" },
    { name: "Asmalyn syrup 100ml", image: "images/asmalyn_100ml.jpg" },
    { name: "Polygel 200ml", image: "images/polygel_200ml.jpg" },
    { name: "Monover tonic 200ml", image: "images/monover_200ml.jpg" },
    { name: "Mopson multivitamin", image: "images/mopson_multivitamin.jpg" },
    { name: "Emprofen syrup", image: "images/emprofen_syrup.jpg" },
    { name: "Emcap pcm suspension", image: "images/emcap_pcm.jpg" },
    { name: "Nemoxil amoxicillin suspension", image: "images/nemoxil_amoxicillin.jpg" },
    { name: "Monomin with cod liver 200ml", image: "images/monomin_cod_liver_200ml.jpg" },
    { name: "Vamiron tonic 200ml", image: "images/vamiron_200ml.jpg" },
    { name: "Nemeclox ampiclox suspension", image: "images/nemeclox_ampiclox.jpg" },
    { name: "Becomplex syrup", image: "images/becomplex_syrup.jpg" },
    { name: "Emtrim syrup", image: "images/emtrim_syrup.jpg" },
    { name: "Tutolin expectorant 100ml", image: "images/tutolin_expectorant_100ml.jpg" },
    { name: "MIM tonic 300ml", image: "images/mim_tonic_300ml.jpg" },
    { name: "Uniprof ibuprofen", image: "images/uniprof_ibuprofen.jpg" },
    { name: "Nospamin drop", image: "images/nospamin_drop.jpg" },
    { name: "Benzyl benzoate lotion", image: "images/benzyl_benzoate_lotion.jpg" },
    { name: "M&B paracetamol syrup", image: "images/mb_paracetamol_syrup.jpg" },
    { name: "Moko mist pot.cit 200ml", image: "images/moko_mist_pot_cit_200ml.jpg" },
    { name: "Moko gentian violet paint 60ml", image: "images/moko_gentian_violet_60ml.jpg" },
    { name: "Dr nando double 77keys", image: "images/dr_nando_77keys.jpg" },
    { name: "Gesteeze triple action 200ml", image: "images/gesteeze_triple_action_200ml.jpg" },
    { name: "Lorantidine syrup 60ml", image: "images/lorantidine_60ml.jpg" },
    { name: "Fimin syrup", image: "images/fimin_syrup.jpg" },
    { name: "De-Deon’s syrup 280ml", image: "images/dedeons_280ml.jpg" },
    { name: "De-Deon’s syrup 1liter", image: "images/dedeons_1liter.jpg" },
    { name: "Astymin tonic", image: "images/astymin_tonic.jpg" },
    { name: "Tanzol suspension", image: "images/tanzol_suspension.jpg" },
    { name: "Neoxican Tab", image: "images/neoxican_tab.jpg" },
    { name: "Unicure lincomycin tablets", image: "images/unicure_lincomycin_tablets.jpg" },
    { name: "Ytacan cream", image: "images/ytacan_cream.jpg" },
    { name: "Ibuten 200 tablets", image: "images/ibuten_200_tablets.jpg" },
    { name: "Powerheat gel", image: "images/powerheat_gel.jpg" },
    { name: "Befenac xtra gel", image: "images/befenac_xtra_gel.jpg" },
    { name: "Diclomol gel", image: "images/diclomol_gel.jpg" },
    { name: "Emzor paracetamol dispersible tablet", image: "images/emzor_paracetamol_dispersible_tablet.jpg" },
    { name: "G-derm cream", image: "images/g_derm_cream.jpg" },
    { name: "Lofnac gel", image: "images/lofnac_gel.jpg" },
    { name: "Mycoten clotrimazole vaginal tab", image: "images/mycoten_clotrimazole_vaginal_tab.jpg" },
    { name: "Lonart tab", image: "images/lonart_tab.jpg" },
    { name: "Emcap caplet", image: "images/emcap_caplet.jpg" },
    { name: "Calcimax tablets", image: "images/calcimax_tablets.jpg" },
    { name: "Calcitone tablets", image: "images/calcitone_tablets.jpg" },
    { name: "Gecrol 100ml", image: "images/gecrol_100ml.jpg" },
    { name: "Rophegan syrup", image: "images/rophegan_syrup.jpg" },
    { name: "Novavite multivitamin syrup", image: "images/novavite_multivitamin_syrup.jpg" },
    { name: "Vamobion 200ml", image: "images/vamobion_200ml.jpg" },
    { name: "Primpex syrup", image: "images/primpex_syrup.jpg" },
    { name: "Piriton expectorant", image: "images/piriton_expectorant.jpg" },
    { name: "Cypri Gold 100", image: "images/cypri_gold_100.jpg" },
    { name: "Moko mist.Alba", image: "images/moko_mist_alba.jpg" },
    { name: "Kings tonic", image: "images/kings_tonic.jpg" },
    { name: "Piriton linctus", image: "images/piriton_linctus.jpg" },
    { name: "Gold Apeti syrup", image: "images/gold_apeti_syrup.jpg" },
    { name: "Afrab ibuprofen suspension 100ml", image: "images/afrab_ibuprofen_suspension_100ml.jpg" },
    { name: "Ferotal extra tonic 300ml", image: "images/ferotal_extra_tonic_300ml.jpg" },
    { name: "GG cold caplet", image: "images/gg_cold_caplet.jpg" },
    { name: "Epiderm cream", image: "images/epiderm_cream.jpg" },
    { name: "Swifen ibuprofen syrup", image: "images/swifen_ibuprofen_syrup.jpg" },
    { name: "Super Apeti tablet", image: "images/super_apeti_tablet.jpg" },
    { name: "Ibucap tablet", image: "images/ibucap_tablet.jpg" },
    { name: "Ibucap cold and flu", image: "images/ibucap_cold_and_flu.jpg" },
    { name: "Exopril lisinopril 10mg", image: "images/exopril_lisinopril_10mg.jpg" },
    { name: "Amono multivitamin capsules", image: "images/amono_multivitamin_capsules.jpg" },
    { name: "Soft health multivitamin capsules", image: "images/soft_health_multivitamin_capsules.jpg" },
    { name: "YOLO multivitamin", image: "images/yolo_multivitamin.jpg" },
    { name: "Ginoforce multivitamin", image: "images/ginoforce_multivitamin.jpg" },
    { name: "Curefenac 50", image: "images/curefenac_50.jpg" },
    { name: "AvroApetit caplet", image: "images/avroapetit_caplet.jpg" },
    { name: "Ciprofloxacin osworth", image: "images/ciprofloxacin_osworth.jpg" },
    { name: "Painkill caplets", image: "images/painkill_caplets.jpg" },
    { name: "Hemoforce plus capsules", image: "images/hemoforce_plus_capsules.jpg" },
    { name: "Needle size 21Gx1 1/2", image: "images/needle_21Gx1_1_2.jpg" },
    { name: "BNS 500 caplets", image: "images/bns_500_caplets.jpg" },
    { name: "Emzor paediatric tablets", image: "images/emzor_paediatric_tablets.jpg" },
    { name: "Surex night", image: "images/surex_night.jpg" },
    { name: "Combiworme tablets", image: "images/combiworme_tablets.jpg" },
    { name: "Acyor plus tablets", image: "images/acyor_plus_tablets.jpg" },
    { name: "Tumol paracetamol 500", image: "images/tumol_paracetamol_500.jpg" },
    { name: "Procold tablets", image: "images/procold_tablets.jpg" },
    { name: "Diatab tablets", image: "images/diatab_tablets.jpg" },
    { name: "Needle size 23Gx1 1/4", image: "images/needle_23Gx1_1_4.jpg" },
    { name: "Em-vit-c multivitamin", image: "images/em_vit_c_multivitamin.jpg" },
    { name: "Lokmal dispersible", image: "images/lokmal_dispersible.jpg" },
    { name: "Unicid", image: "images/unicid.jpg" },
    { name: "Chemiron blood tonic 1liter", image: "images/chemiron_blood_tonic_1liter.jpg" },
    { name: "Cofex syrup", image: "images/cofex_syrup.jpg" },
    { name: "Gomaxine tablets", image: "images/gomaxine_tablets.jpg" },
    { name: "Emvite multivitamin", image: "images/emvite_multivitamin.jpg" },
    { name: "Super Apetit plus 200ml", image: "images/super_apetit_plus_200ml.jpg" },
    { name: "Monomin tonic 100ml", image: "images/monomin_tonic_100ml.jpg" },
    { name: "NGC expectorant syrup", image: "images/ngc_expectorant_syrup.jpg" },
    { name: "Cencold syrup", image: "images/cencold_syrup.jpg" },
    { name: "Broncholyte syrup 100ml", image: "images/broncholyte_syrup_100ml.jpg" },
    { name: "Chemiron B-Complex vitamin syrup", image: "images/chemiron_b_complex_vitamin_syrup.jpg" },
    { name: "Cyprivit syrup 200ml", image: "images/cyprivit_syrup_200ml.jpg" },
    { name: "Tuclox suspension", image: "images/tuclox_suspension.jpg" },
    { name: "Vamirex syrup", image: "images/vamirex_syrup.jpg" },
    { name: "RGI ibuprofen syrup", image: "images/rgi_ibuprofen_syrup.jpg" },
    { name: "Bunto tonic 1liter", image: "images/bunto_tonic_1liter.jpg" },
    { name: "Bunto tonic 300ml", image: "images/bunto_tonic_300ml.jpg" },
    { name: "Uniplex syrup", image: "images/uniplex_syrup.jpg" },
    { name: "Coflin expectorant syrup", image: "images/coflin_expectorant_syrup.jpg" },
    { name: "Cofmix syrup", image: "images/cofmix_syrup.jpg" },
    { name: "Cyprivit syrup 100ml", image: "images/cyprivit_syrup_100ml.jpg" },
    { name: "Moko Nerve liniment", image: "images/moko_nerve_liniment.jpg" },
    { name: "Citramin vitamin c drop", image: "images/citramin_vitamin_c_drop.jpg" },
    { name: "Codolin expectorant", image: "images/codolin_expectorant.jpg" },
    { name: "AvriApetit syrup", image: "images/avriapetit_syrup.jpg" },
    { name: "Exdryl junior", image: "images/exdryl_junior.jpg" },
    { name: "Exdryl expectorant", image: "images/exdryl_expectorant.jpg" },
    { name: "Vami’s syrup of haemoglobin", image: "images/vamis_syrup_of_haemoglobin.jpg" },
    { name: "Unigyl metronidazole suspension", image: "images/unigyl_metronidazole_suspension.jpg" },
    { name: "Tutolin children", image: "images/tutolin_children.jpg" },
    { name: "Exiplon children", image: "images/exiplon_children.jpg" },
    { name: "Emmox amoxicillin syrup", image: "images/emmox_amoxicillin_syrup.jpg" },
    { name: "Ranferon-12 tonic", image: "images/ranferon_12_tonic.jpg" },
    { name: "Bonababe syrup", image: "images/bonababe_syrup.jpg" },
    { name: "Allergin piriton syrup", image: "images/allergin_piriton_syrup.jpg" },
    { name: "Unicure ibuten 400", image: "images/unicure_ibuten_400.jpg" },
    { name: "Exiplon expectorant", image: "images/exiplon_expectorant.jpg" },
    { name: "M&B paracetamol tablets", image: "images/m_b_paracetamol_tablets.jpg" },
    { name: "Kiss condoms", image: "images/kiss_condoms.jpg" },
    { name: "Diclomol caplets", image: "images/diclomol_caplets.jpg" },
    { name: "Metformin 500mg tablets", image: "images/metformin_500mg_tablets.jpg" },
    { name: "Chlorpheniramine emzor tablets", image: "images/chlorpheniramine_emzor_tablets.jpg" },
    { name: "Zolat 200mg tablets", image: "images/zolat_200mg_tablets.jpg" },
    { name: "Zolat 400mg tablets", image: "images/zolat_400mg_tablets.jpg" },
    { name: "Emzor paracetamol tablets by 96", image: "images/emzor_paracetamol_tablets_96.jpg" },
    { name: "Calcitab caplets", image: "images/calcitab_caplets.jpg" },
    { name: "Osteo tablets", image: "images/osteo_tablets.jpg" },
    { name: "Gentamicin eye/ear drop", image: "images/gentamicin_eye_ear_drop.jpg" },
    { name: "Pedicure tablets", image: "images/pedicure_tablets.jpg" },
    { name: "Shaltoux natural", image: "images/shaltoux_natural.jpg" },
    { name: "Mofson vitamin B-complex by1000", image: "images/mofson_vitamin_b_complex_1000.jpg" },
    { name: "Emcap caplets by 1000", image: "images/emcap_caplets_1000.jpg" },
    { name: "Em-B-Plex emzor by 1000", image: "images/em_b_plex_emzor_1000.jpg" },
    { name: "Yeast by 1000", image: "images/yeast_1000.jpg" },
    { name: "Folic acid by 1000", image: "images/folic_acid_1000.jpg" },
    { name: "Kunimed yeast by 100", image: "images/kunimed_yeast_100.jpg" },
    { name: "Ascomed by 100", image: "images/ascomed_100.jpg" },
    { name: "Spartan-C by 100", image: "images/spartan_c_100.jpg" },
    { name: "Lofnac roll-on", image: "images/lofnac_roll_on.jpg" },
    { name: "Funbact-A cream", image: "images/funbact_a_cream.jpg" },
    { name: "Tydineal cream", image: "images/tydineal_cream.jpg" },
    { name: "Neoskin cream", image: "images/neoskin_cream.jpg" },
    { name: "Ketineal cream", image: "images/ketineal_cream.jpg" },
    { name: "Mycoten cream", image: "images/mycoten_cream.jpg" },
    { name: "Vixaskineal cream", image: "images/vixaskineal_cream.jpg" },
    { name: "Gentamicin ointment", image: "images/gentamicin_ointment.jpg" },
    { name: "Mycoten vaginal cream", image: "images/mycoten_vaginal_cream.jpg" },
    { name: "NeuroGesic Extra greaseless ointment big size", image: "images/neurogesic_extra_greaseless_big.jpg" },
    { name: "NeuroGesic Extra greaseless ointment small size", image: "images/neurogesic_extra_greaseless_small.jpg" },
    { name: "Hydrocortisone cream", image: "images/hydrocortisone_cream.jpg" },
    { name: "Skimate cream", image: "images/skimate_cream.jpg" },
    { name: "Curefenac 100 tablets", image: "images/curefenac_100_tablets.jpg" },
    { name: "Visita plus cream", image: "images/visita_plus_cream.jpg" },
    { name: "Penicillin ointment", image: "images/penicillin_ointment.jpg" },
    { name: "Penicillin ophthalmic ointment", image: "images/penicillin_ophthalmic_ointment.jpg" },
    { name: "Defecto cream", image: "images/defecto_cream.jpg" },
    { name: "Chloramphenicol eye ointment", image: "images/chloramphenicol_eye_ointment.jpg" },
    { name: "Geoderm cream", image: "images/geoderm_cream.jpg" },
    { name: "Mycoten baby care cream", image: "images/mycoten_baby_care_cream.jpg" },
    { name: "Suprafem plus", image: "images/suprafem_plus.jpg" },
    { name: "Suprafem", image: "images/suprafem.jpg" },
    { name: "Wellwoman 70+", image: "images/wellwoman_70_plus.jpg" },
    { name: "Wellwoman 50+", image: "images/wellwoman_50_plus.jpg" },
    { name: "Wellwoman original", image: "images/wellwoman_original.jpg" },
    { name: "Wellwoman max", image: "images/wellwoman_max.jpg" },
    { name: "Feroglobin capsule", image: "images/feroglobin_capsule.jpg" },
    { name: "Pregnacare original", image: "images/pregnacare_original.jpg" },
    { name: "Feroglobin B12", image: "images/feroglobin_b12.jpg" },
    { name: "Wellwoman plus omega 3.6.9", image: "images/wellwoman_plus_omega.jpg" },
    { name: "Pregnacare plus", image: "images/pregnacare_plus.jpg" }
        
        
    ];

    // Display Products on Homepage
    if (productList) {
        products.forEach((product, index) => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });

        // Add to Cart Click Event
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                
                // Check if product already exists in cart
                let existingProduct = cart.find(item => item.name === products[index].name);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    let newProduct = { ...products[index], quantity: 1 };
                    cart.push(newProduct);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
                updateCartCount();
                alert(`${products[index].name} added to cart!`);
            });
        });

        updateCartCount();
    }

    // Display Cart Items
    function updateCartDisplay() {
        if (cartItems) {
            cartItems.innerHTML = ""; // Clear cart display
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                cartItems.innerHTML = "<p>Your cart is empty.</p>";
            } else {
                cart.forEach((product, index) => {
                    let cartDiv = document.createElement("div");
                    cartDiv.classList.add("cart-item");
                    cartDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <div class="quantity-controls">
                            <button class="decrease" data-index="${index}">-</button>
                            <span>${product.quantity}</span>
                            <button class="increase" data-index="${index}">+</button>
                        </div>
                        <button class="remove-from-cart" data-index="${index}">Remove</button>
                    `;
                    cartItems.appendChild(cartDiv);
                });

                // Increase quantity
                document.querySelectorAll(".increase").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        cart[index].quantity += 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });

                // Decrease quantity
                document.querySelectorAll(".decrease").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        if (cart[index].quantity > 1) {
                            cart[index].quantity -= 1;
                        } else {
                            cart.splice(index, 1);
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });

                // Remove from cart
                document.querySelectorAll(".remove-from-cart").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        cart.splice(index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });
            }
        }
    }

    // Update Cart Count
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;
    }

    // Send to Admin (WhatsApp)
    if (sendToAdmin) {
        sendToAdmin.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }
            let message = "Order Details:\n";
            cart.forEach(product => {
                message += `✅ ${product.name} (x${product.quantity})\n`;
            });
            window.location.href = `https://wa.me/2348065892171?text=${encodeURIComponent(message)}`;
        });
    }

    // Initialize Cart Display
    updateCartDisplay();
    updateCartCount();

    // Slideshow
    let index = 0;
    const slides = document.querySelector(".slides");

    function nextSlide() {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(nextSlide, 3000);

    // Search Bar
    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
        searchBar.addEventListener("input", function () {
            const searchTerm = searchBar.value.toLowerCase();
            const productDivs = document.querySelectorAll(".product");
            productDivs.forEach((productDiv) => {
                const productName = productDiv.querySelector("h3").textContent.toLowerCase();
                productDiv.style.display = productName.includes(searchTerm) ? "block" : "none";
            });
        });
    }
});


