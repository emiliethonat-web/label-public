/* ============================================================
   Label Worklife Top Avantages — Loader v2.2 (cleaned)
   Single-file : CSS + HTML + JS
   Hébergé sur GitHub (public) + jsDelivr
   Intégration Webflow :
   1. Embed          -> <div id="wl-form-mount"></div>
   2. Footer Code    -> script src cdn.jsdelivr.net/gh/emiliethonat-web/label-public@main/label-loader.js
   3. Head Code      -> window.WL_CONFIG (webhooks)
   Mise à jour : label-push-public dans le terminal
   v2.2 : suppression du code mort de scoring/benchmark (résultats envoyés par email via Make/HubSpot)
   ============================================================ */
(function() {
  // ── 0. Exposition globale immédiate ─────────────────────────
  window.nextStep      = function(){ nextStep(); };
  window.prevStep      = function(){ prevStep(); };
  window.adjustCounter = function(id,d,mn,mx){ adjustCounter(id,d,mn,mx); };
  // ── 1. CSS ──────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `:root{
  --white:#FFFFFF;
  --platine:#F8F8F7;
  --cream:#F2EEEA;
  --cream-dark:#E8E2DA;
  --near-black:#101010;
  --muted:#706F6A;
  --border:#E5E0D6;
  --card:rgba(255,255,255,0.78);
  --teal:#284848;
  --teal-light:#76B2A7;
  --teal-pale:#C3E2DB;
  --cuivre-light:#F7E5D9;
  --caramel:#B57052;
  --blue:#B57052;
  --red:#C65B4B;
  --green:#284848;
}#formulaire *{margin:0;padding:0;box-sizing:border-box;}#formulaire .logo{display:flex;flex-direction:column;text-decoration:none;color:var(--near-black);}#formulaire .logo-main{font-size:20px;font-weight:800;letter-spacing:-0.5px;line-height:1.1;}#formulaire .logo-main em{font-style:normal;color:var(--teal-light);}#formulaire .logo-sub{font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);}#formulaire .nav-links{display:flex;gap:28px;list-style:none;}#formulaire .nav-links a{text-decoration:none;color:var(--near-black);font-size:14px;font-weight:500;opacity:.75;}#formulaire .nav-links a:hover{opacity:1;}#formulaire .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 22px;border-radius:100px;font-family:inherit;font-size:14px;font-weight:600;text-decoration:none;cursor:pointer;border:none;transition:all .2s;letter-spacing:-.1px;}#formulaire .btn-dark{background:var(--near-black);color:var(--white);}#formulaire .btn-dark:hover{background:#2a2a2a;}#formulaire .btn-outline{background:transparent;color:var(--near-black);border:1.5px solid var(--near-black);}#formulaire .btn-outline:hover{background:var(--near-black);color:var(--white);}#formulaire .btn-white{background:var(--white);color:var(--near-black);}#formulaire .btn-white:hover{background:var(--cream);}#formulaire .btn-lg{padding:16px 32px;font-size:16px;}#formulaire .btn-teal{background:var(--teal);color:var(--white);}#formulaire .btn-teal:hover{background:var(--teal-light);}#formulaire .btn:disabled{opacity:.4;cursor:not-allowed;}#formulaire .form-section{padding:88px 48px;background:transparent;}#formulaire .form-inner{max-width:880px !important;margin:0 auto;text-align:left !important;}#formulaire .progress-bar-outer{background:var(--cream-dark);border-radius:100px;height:8px !important;margin-bottom:12px;overflow:hidden;}#formulaire .progress-bar-inner{background:var(--teal);height:100%;border-radius:100px;transition:width .4s ease;}#formulaire .progress-label{font-size:12px;font-weight:600;color:var(--muted);letter-spacing:.3px;text-align:center;margin-bottom:36px;}#formulaire .progress-label b{color:var(--teal);font-weight:700;}#formulaire .form-card{background:#FFFFFF !important;border-radius:28px;padding:44px;border:1.5px solid var(--border) !important;}#formulaire .step{display:none;}#formulaire .step.active{display:block;}#formulaire .step-title{font-size:26px;font-weight:800;letter-spacing:-.8px;margin-bottom:8px;text-align:left !important;}#formulaire .step-desc{font-size:14px;color:var(--muted);margin-bottom:26px;line-height:1.6;}#formulaire .step-section{margin-top:26px;padding-top:22px;border-top:1px dashed var(--border);}#formulaire .step-section:first-of-type{margin-top:0;padding-top:0;border:none;}#formulaire .subtitle{font-size:16px;font-weight:700;letter-spacing:-.3px;margin-bottom:16px;display:flex;align-items:center;gap:8px;color:var(--teal);}#formulaire .subtitle .g-icon{font-size:20px;}#formulaire .q-block{margin-bottom:20px;}#formulaire .q-label{font-size:14px;font-weight:600;margin-bottom:10px;line-height:1.45;}#formulaire .q-label .q-optional{color:var(--muted);font-weight:400;font-style:italic;font-size:12px;}#formulaire .field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px;}#formulaire .field-row.full{grid-template-columns:1fr;}#formulaire .field{display:flex;flex-direction:column;gap:6px;}#formulaire label.field-label{font-size:13px;font-weight:600;color:var(--near-black);text-align:left !important;}#formulaire label.field-label span{color:var(--muted);font-weight:400;}#formulaire .field-error{display:none;color:var(--red);font-size:12px;margin-top:6px;font-weight:500;line-height:1.4;}#formulaire .field-error.show{display:block;}#formulaire .field-invalid{border-color:var(--red) !important;border-width:1.5px !important;border-style:solid !important;}#formulaire input[type=text], #formulaire input[type=email], #formulaire input[type=tel], #formulaire input[type=number], #formulaire select, #formulaire textarea{width:100%;padding:11px 14px;border:1.5px solid var(--border) !important;border-radius:12px;font-family:inherit;font-size:14px;color:var(--near-black);background:#FFFFFF;outline:none;text-align:left !important;}#formulaire input:focus, #formulaire select:focus, #formulaire textarea:focus{border-color:var(--near-black) !important;outline:none !important;}#formulaire select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23706F6A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:40px;appearance:none;}#formulaire textarea{resize:vertical;min-height:80px;}#formulaire .check-item, #formulaire .radio-item{display:flex;align-items:flex-start;gap:11px;padding:10px 13px;border-radius:12px;cursor:pointer;transition:background .15s;margin-bottom:5px;border:1.5px solid transparent;background:var(--white);}#formulaire .check-item:hover, #formulaire .radio-item:hover{background:var(--cream-dark);}#formulaire .check-item.selected, #formulaire .radio-item.selected{background:#DED4CA;border-color:rgba(40,72,72,.2);}#formulaire .check-item input, #formulaire .radio-item input{width:16px;height:16px;min-width:16px;max-width:16px;flex-shrink:0;flex-grow:0;margin-top:2px;cursor:pointer;appearance:none;-webkit-appearance:none;border:1.5px solid #BBBBBB;border-radius:50%;background:var(--white);position:relative;transition:border-color .15s,background .15s;}#formulaire .check-item input:checked, #formulaire .radio-item input:checked{background:var(--teal);border-color:var(--teal);}#formulaire .check-item input:checked::after, #formulaire .radio-item input:checked::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;border-radius:50%;background:var(--white);}#formulaire .check-item input:focus, #formulaire .radio-item input:focus{outline:none;border-color:var(--teal);}#formulaire .check-item-text, #formulaire .radio-item-text{font-size:14px;font-weight:500;line-height:1.4;flex:1;}#formulaire .check-item-sub, #formulaire .radio-item-sub{display:block;font-size:12px;color:var(--muted);font-weight:400;margin-top:2px;}#formulaire .conditional{display:none;padding:16px 18px;background:var(--cream);border-radius:12px;margin:4px 0 12px 28px;}#formulaire .conditional.show{display:block;}#formulaire .conditional .q-block{margin-bottom:14px;}#formulaire .conditional .q-block:last-child{margin-bottom:0;}#formulaire .form-nav{display:flex;justify-content:space-between;align-items:center;margin-top:34px;gap:16px;}#formulaire .form-nav-info{font-size:13px;color:var(--muted);}
#formulaire .wl-hidden{ display:none; }#formulaire .wl-trap{ position:absolute; left:-9000px; top:-9000px; width:1px; height:1px; overflow:hidden; opacity:0; pointer-events:none; }#formulaire .wl-counter-row{ display:flex; align-items:center; gap:14px; }#formulaire .wl-num-btn{ padding:6px 14px; font-size:18px; font-weight:700; }#formulaire #formulaire input[type=number].wl-num-input{ width:56px; max-width:56px; text-align:center !important; font-size:18px; font-weight:700; padding-left:6px; padding-right:6px; }#formulaire .wl-hint{ font-size:13px; color:var(--muted); }#formulaire .wl-info-box{ background:var(--cream); border-radius:14px; padding:16px 20px; font-size:13px; color:var(--muted); line-height:1.55; margin-top:22px; }#formulaire .wl-thanks-card{ background:var(--white); border-radius:28px; padding:48px; border:1px solid var(--border); text-align:center; }#formulaire .wl-thanks-icon{ width:80px; height:80px; border-radius:50%; background:var(--teal); display:flex; align-items:center; justify-content:center; margin:0 auto 24px; font-size:38px; color:var(--white); }#formulaire .wl-thanks-title{ font-size:28px; font-weight:800; letter-spacing:-1px; margin-bottom:18px; }#formulaire .wl-thanks-body{ font-size:16px; color:var(--near-black); line-height:1.75; max-width:580px; margin:0 auto 18px; }#formulaire .wl-teal-bold{ color:var(--teal); font-weight:700; }#formulaire .wl-teal-semi{ color:var(--teal); font-weight:600; }#formulaire .wl-notice-box{ font-size:15px; color:var(--near-black); line-height:1.7; max-width:580px; margin:0 auto 18px; background:var(--cream); border-radius:16px; padding:18px 22px; }#formulaire .wl-thanks-note{ font-size:13px; color:var(--muted); line-height:1.6; max-width:520px; margin:14px auto 0; }#formulaire .wl-spinner{
  width:36px; height:36px; border-radius:50%;
  border:3px solid var(--border);
  border-top-color:var(--teal);
  animation:wl-spin .8s linear infinite;
  margin:0 auto;
}
@keyframes wl-spin { to { transform:rotate(360deg); } }
#formulaire .wl-step-merci{text-align:center;font-size:clamp(22px,3vw,32px);font-weight:700;margin-bottom:24px;color:var(--dark);}
@media(max-width:768px){#formulaire .nav-links{display:none;}#formulaire .form-section{padding-left:20px;padding-right:20px;}#formulaire .field-row{grid-template-columns:1fr;}#formulaire .form-card{padding:26px 20px;}
}
  body .w-pagination-previous{display:none!important;}`;
  document.head.appendChild(style);
  // ── 2. HTML ─────────────────────────────────────────────────
  var _wlCfg = window.WL_CONFIG || {};
  var _preFill = false;
  var _v = _preFill ? {
    prenom:'Marie', nom:'Martin', email:'marie.martin@techcorp.fr',
    tel:'+33 6 12 34 56 78', entreprise:'TechCorp SAS', siren:'732829320',
    fonction:'DRH', salaries:'350', cp:'75009'
  } : {};
  var html = `<section id="formulaire" class="form-section"><div class="form-inner"><div class="progress-bar-outer" id="progressBarOuter"><div class="progress-bar-inner" id="progressBar" style="width:12%"></div></div><div class="progress-label" id="progressLabel">Étape <b id="stepNum">1</b> sur <b id="stepTotal">8</b> : <b id="stepName">Vos informations</b></div><div class="form-card"><div class="step active" id="step-1"><label class="wl-trap" aria-hidden="true">Laissez ce champ vide<input type="text" name="website_url" id="website_url" autocomplete="off" tabindex="-1" value=""></label><div class="step-title">Vos informations</div><div class="step-desc">Ces informations nous permettent de personnaliser votre rapport, de vous envoyer votre benchmark par email et votre badge en cas de labellisation.</div><div class="field-row"><div class="field"><label class="field-label">Prénom *</label><input type="text" id="f_prenom" placeholder="Marie"${_v.prenom ? ' value="'+_v.prenom+'"' : ''}><div class="field-error" id="f_prenom_error"></div></div><div class="field"><label class="field-label">Nom *</label><input type="text" id="f_nom" placeholder="Dupont"${_v.nom ? ' value="'+_v.nom+'"' : ''}><div class="field-error" id="f_nom_error"></div></div></div><div class="field-row"><div class="field"><label class="field-label">Email professionnel *</label><input type="email" id="f_email" placeholder="marie@entreprise.fr"${_v.email ? ' value="'+_v.email+'"' : ''}><div class="field-error" id="f_email_error"></div></div><div class="field"><label class="field-label">Téléphone professionnel <span>(optionnel)</span></label><input type="tel" id="f_tel" placeholder="+33 6 XX XX XX XX"${_v.tel ? ' value="'+_v.tel+'"' : ''}></div></div><div class="field-row"><div class="field"><label class="field-label">Nom de l'entreprise *</label><input type="text" id="f_entreprise" placeholder="Acme SAS"${_v.entreprise ? ' value="'+_v.entreprise+'"' : ''}><div class="field-error" id="f_entreprise_error"></div></div><div class="field"><label class="field-label">SIRET *</label><input type="text" id="f_siren" placeholder="12345678901234"${_v.siren ? ' value="'+_v.siren+'"' : ''} maxlength="14" inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,'')"><div class="wl-hint" style="margin-top:4px;">14 chiffres attendus — 1 soumission par SIRET et par an autorisée</div><div class="field-error" id="f_siren_error"></div></div></div><div class="field-row full"><div class="field"><label class="field-label">Votre fonction *</label><input type="text" id="f_fonction" placeholder="DRH, Responsable RH…"${_v.fonction ? ' value="'+_v.fonction+'"' : ''}><div class="field-error" id="f_fonction_error"></div></div></div><div class="field-row"><div class="field"><label class="field-label">Nombre de salariés en France *</label><input type="number" id="f_salaries" placeholder="Ex : 350" min="1" step="1"${_v.salaries ? ' value="'+_v.salaries+'"' : ''}><div class="field-error" id="f_salaries_error"></div></div><div class="field"><label class="field-label">Code postal du siège *</label><input type="text" id="f_cp" placeholder="75001"${_v.cp ? ' value="'+_v.cp+'"' : ''} maxlength="5" inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,'')"><div class="field-error" id="f_cp_error"></div></div></div><div class="field-row full"><div class="field"><label class="field-label">Secteur d'activité *</label><select id="f_secteur"><option value="">Sélectionner…</option><option>Finance, assurance et immobilier</option><option>Distribution</option><option>Énergie</option><option>Commerce</option><option>Hébergement & restauration</option><option>Industrie</option><option>Luxe</option><option>Santé</option><option>Secteur public</option><option>Services</option><option>Technologie, média & télécommunications</option><option>Transport & BTP</option><option>Autre</option></select><div class="field-error" id="f_secteur_error"></div></div></div></div><div class="step" id="step-2"><div class="step-title">Mieux vivre au quotidien</div><div class="step-desc">Restauration, mobilité et logement : les avantages qui améliorent concrètement le quotidien de vos collaborateurs.</div><div class="step-section"><div class="subtitle">Restauration</div><div class="q-block"><div class="q-label">Quel avantage de restauration proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_tr"><div class="check-item-text">Titres-restaurant</div></label><div class="conditional" id="cond_tr"><div class="q-block"><label class="field-label">Valeur faciale du titre (€)</label><input type="number" id="tr_vf" value="" placeholder="10" min="4" max="20" step="0.5"></div><div class="q-block"><label class="field-label">Part du repas prise en charge par l'employeur (%)</label><input type="number" id="tr_pec" value="" placeholder="55" min="50" max="60" step="1"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_cantine"><div class="check-item-text">Restaurant d'entreprise / Cantine</div></label><div class="conditional" id="cond_cantine"><div class="q-block"><label class="field-label">Part du repas prise en charge par l'employeur (%)</label><input type="number" id="cantine_pec" value="" placeholder="60" min="0" max="100" step="5"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_resto_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_resto_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="resto_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_resto_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Mobilité</div><div class="q-block"><div class="q-label">Quels dispositifs de mobilité proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_tc"><div class="check-item-text">Transports publics prise en charge >50%</div></label><div class="conditional" id="cond_tc"><div class="q-block"><label class="field-label">Taux total de prise en charge (%)</label><input type="number" id="tc_pec" value="" placeholder="75" min="50" max="100" step="5"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_fmd"><div class="check-item-text">Forfait Mobilités Durables</div></label><div class="conditional" id="cond_fmd"><div class="q-block"><label class="field-label">Montant maximum/salarié/an (€) — si cumulé avec TC, indiquer le global</label><input type="number" id="fmd_montant" value="" placeholder="400" min="0" max="900" step="25"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_prime_tr"><div class="check-item-text">Prime transport (carburant/recharge)</div></label><div class="conditional" id="cond_prime_tr"><div class="q-block"><label class="field-label">Montant maximum par salarié et par an (€)</label><input type="number" id="prime_tr_montant" value="" placeholder="300" min="0" max="1000" step="25"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_km"><div class="check-item-text">Indemnités kilométriques domicile-travail</div></label><label class="check-item"><input type="checkbox" class="c" id="c_credit_mob"><div class="check-item-text">Crédit mobilité</div></label><label class="check-item"><input type="checkbox" class="c" id="c_vehicule"><div class="check-item-text">Véhicule de fonction ou de service</div></label><label class="check-item"><input type="checkbox" class="c" id="c_velos"><div class="check-item-text">Flotte de vélos d'entreprise</div></label><label class="check-item"><input type="checkbox" class="c" id="c_navettes"><div class="check-item-text">Navettes</div></label><label class="check-item"><input type="checkbox" class="c" id="c_mob_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_mob_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="mob_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_mob_aucun"><div class="check-item-text">Aucun dispositif</div></label></div></div><div class="step-section"><div class="subtitle">Logement</div><div class="q-block"><div class="q-label">Quels dispositifs d'aide au logement proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_log_pret_subv"><div class="check-item-text">Prêt subventionné pour l'accès à la propriété</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_pret_dir"><div class="check-item-text">Prêt direct employeur pour l'accès à la propriété</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_caution"><div class="check-item-text">Aide à la caution / garantie locative</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_loyer"><div class="check-item-text">Prise en charge de tout ou partie du loyer</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_fonction"><div class="check-item-text">Logement de fonction</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_demenag"><div class="check-item-text">Aide au déménagement</div></label><label class="check-item"><input type="checkbox" class="c" id="c_log_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_log_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="log_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_log_aucun"><div class="check-item-text">Aucun dispositif</div></label></div></div><div class="step-section"><div class="subtitle">Vente au personnel</div><div class="q-block"><div class="q-label">Proposez-vous à vos salariés des remises sur vos produits ou services ?</div><label class="radio-item"><input type="radio" name="vente_personnel" value="legal"><div class="radio-item-text">Oui, dans la limite légale exonérée (30 % sur produits courants et/ou 50 % sur invendus)</div></label><label class="radio-item"><input type="radio" name="vente_personnel" value="partiel"><div class="radio-item-text">Oui, remise inférieure aux plafonds légaux</div></label><label class="radio-item"><input type="radio" name="vente_personnel" value="autre"><div class="radio-item-text">Autre</div></label><label class="radio-item"><input type="radio" name="vente_personnel" value="non"><div class="radio-item-text">Aucune remise sur les produits ou services de l'entreprise</div></label><div class="conditional" id="cond_vente_personnel"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="vente_personnel_txt" placeholder="Précisez le dispositif…"></div></div></div></div><div class="step-section"><div class="subtitle">Conciergerie</div><div class="q-block"><div class="q-label">Proposez-vous à vos salariés un service de conciergerie ?</div><label class="radio-item"><input type="radio" name="conciergerie" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="conciergerie" value="non"><div class="radio-item-text">Non</div></label></div></div></div><div class="step" id="step-3"><div class="step-title">Sérénité financière</div><div class="step-desc">Mutuelle, épargne salariale, primes, prévoyance, IFC, actionnariat, bien-être financier: les dispositifs qui sécurisent et valorisent vos collaborateurs.</div><div class="step-section"><div class="subtitle">Mutuelle d'entreprise</div><div class="q-block"><div class="q-label">Prenez-vous en charge la cotisation mutuelle de vos collaborateurs au-delà des 50% obligatoires?</div><label class="radio-item"><input type="radio" name="mut" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="mut" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_mut"><div class="q-block"><label class="field-label">Votre taux total de prise en charge (%)</label><input type="number" id="mut_taux" value="" placeholder="75" min="50" max="100" step="5"></div></div></div><div class="q-block"><div class="q-label">Quelle couverture proposez-vous pour les ayants-droit?</div><label class="radio-item"><input type="radio" name="mut_fam" value="salarie"><div class="radio-item-text">Salarié seul uniquement</div></label><label class="radio-item"><input type="radio" name="mut_fam" value="enfants"><div class="radio-item-text">Salarié + enfant(s)</div></label><label class="radio-item"><input type="radio" name="mut_fam" value="conjoint"><div class="radio-item-text">Salarié + conjoint</div></label><label class="radio-item"><input type="radio" name="mut_fam" value="famille"><div class="radio-item-text">Famille complète</div></label><label class="radio-item"><input type="radio" name="mut_fam" value="choix"><div class="radio-item-text">Au choix du salarié</div></label></div></div><div class="step-section"><div class="subtitle">Épargne salariale &amp; retraite</div><div class="q-block"><div class="q-label">Avez-vous mis en place un <b>Plan d'Épargne Entreprise (PEE)</b>?</div><label class="radio-item"><input type="radio" name="pee" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="pee" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block"><div class="q-label">Avez-vous mis en place un <b>Plan d'Épargne Retraite</b>?</div><label class="check-item"><input type="checkbox" class="c" id="c_pereco"><div class="check-item-text">PERCOL (ex PERCO)</div></label><label class="check-item"><input type="checkbox" class="c" id="c_pero"><div class="check-item-text">Oui un PER obligatoire (PERO)</div></label><label class="check-item"><input type="checkbox" class="c" id="c_per_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_per_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="per_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_per_no"><div class="check-item-text">Non</div></label></div><div class="q-block"><div class="q-label">Proposez-vous un abondement employeur sur les plans d'épargne?</div><label class="radio-item"><input type="radio" name="abond" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="abond" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_abond"><div class="q-block"><div class="q-label">Sur quel(s) plan(s)?</div><label class="check-item"><input type="checkbox" id="abond_pee"><div class="check-item-text">PEE uniquement</div></label><label class="check-item"><input type="checkbox" id="abond_pereco"><div class="check-item-text">PERCOL uniquement</div></label><label class="check-item"><input type="checkbox" id="abond_both"><div class="check-item-text">Les deux</div></label></div><div class="q-block"><label class="field-label">Plafond annuel d'abondement par salarié (€) <span>(optionnel)</span></label><input type="number" id="abond_plafond" value="" placeholder="500" min="0" step="100"></div></div></div></div><div class="step-section"><div class="subtitle">Primes</div><div class="q-block"><div class="q-label">Proposez-vous un dispositif d'intéressement (hors obligation légale)?</div><label class="radio-item"><input type="radio" name="int" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="int" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_int"><div class="q-block"><label class="field-label">Montant moyen/salarié bénéficiaire (€, dernier exercice)</label><input type="number" id="int_montant" value="" placeholder="1800" min="0" step="100"></div></div></div><div class="q-block"><div class="q-label">Proposez-vous un dispositif de participation (hors obligation légale)?</div><label class="radio-item"><input type="radio" name="part" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="part" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_part"><div class="q-block"><label class="field-label">Montant moyen/salarié bénéficiaire (€, dernier exercice)</label><input type="number" id="part_montant" value="" placeholder="1500" min="0" step="100"></div></div></div><div class="q-block"><div class="q-label">Versez-vous une Prime de Partage de la Valeur (hors obligation légale)?</div><label class="radio-item"><input type="radio" name="ppv" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="ppv" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_ppv"><div class="q-block"><label class="field-label">Montant moyen/salarié bénéficiaire (€, dernier exercice)</label><input type="number" id="ppv_montant" value="" placeholder="800" min="0" step="100"></div></div></div><div class="q-block"><div class="q-label">Quelles autres primes proposez-vous? (plusieurs choix possibles)</div><label class="check-item"><input type="checkbox" class="c" id="c_prime_perf"><div class="check-item-text">Prime de performance individuelle</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prime_collec"><div class="check-item-text">Prime liée aux résultats collectifs / groupe</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prime_anc"><div class="check-item-text">Prime d'ancienneté</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prime_coopt"><div class="check-item-text">Prime de cooptation</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prime_13"><div class="check-item-text">Prime de 13e mois</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prime_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_prime_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="prime_autres_txt" placeholder="Précisez la prime…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_prime_aucune"><div class="check-item-text">Aucune</div></label></div></div><div class="step-section"><div class="subtitle">Maintien de salaire</div><div class="q-block"><div class="q-label">En cas d'arrêt maladie, quelle est votre politique de maintien de salaire ?</div><label class="radio-item"><input type="radio" name="maintien_salaire" value="j1_100"><div class="radio-item-text">Maintien à 100 % du salaire net dès le 1er jour, sans condition d'ancienneté</div></label><label class="radio-item"><input type="radio" name="maintien_salaire" value="j4_100"><div class="radio-item-text">Maintien à 100 % du salaire net à partir du 4e jour, sans condition d'ancienneté</div></label><label class="radio-item"><input type="radio" name="maintien_salaire" value="partiel"><div class="radio-item-text">Complément partiel des indemnités journalières, ou maintien à 100 % sous condition d'ancienneté</div></label><label class="radio-item"><input type="radio" name="maintien_salaire" value="legal"><div class="radio-item-text">Application du minimum légal ou conventionnel uniquement</div></label></div></div><div class="step-section"><div class="subtitle">Prévoyance</div><div class="q-block"><div class="q-label">Proposez-vous un contrat de prévoyance pour les salariés non-cadres et/ou une couverture complémentaire pour les cadres?</div><label class="radio-item"><input type="radio" name="prev" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="prev" value="non"><div class="radio-item-text">Non</div></label></div></div><div class="step-section"><div class="subtitle">Indemnité de Fin de Carrière (IFC)</div><div class="q-block"><div class="q-label">Offrez-vous une Indemnité de Fin de Carrière?</div><label class="radio-item"><input type="radio" name="ifc" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="ifc" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block conditional" id="cond_ifc_forme"><div class="q-label">Sous quelle forme proposez-vous une IFC?</div><label class="radio-item"><input type="radio" name="ifc_forme" value="pct"><div class="radio-item-text">Un pourcentage du salaire de référence</div></label><div class="conditional" id="cond_ifc_pct"><div class="q-block"><label class="field-label">Montant moyen de l'IFC (€)</label><input type="number" id="ifc_pct_montant" value="0" min="0" step="500"></div></div><label class="radio-item"><input type="radio" name="ifc_forme" value="forfvar"><div class="radio-item-text">Forfait variable (selon séniorité, ancienneté…)</div></label><div class="conditional" id="cond_ifc_forfvar"><div class="q-block"><label class="field-label">Montant moyen de l'IFC (€)</label><input type="number" id="ifc_forfvar_montant" value="0" min="0" step="500"></div></div><label class="radio-item"><input type="radio" name="ifc_forme" value="forfid"><div class="radio-item-text">Un montant forfaitaire identique</div></label><div class="conditional" id="cond_ifc_forfid"><div class="q-block"><label class="field-label">Montant de l'IFC (€)</label><input type="number" id="ifc_forfid_montant" value="0" min="0" step="500"></div></div></div></div><div class="step-section"><div class="subtitle">Actionnariat salarié</div><div class="q-block"><div class="q-label">Quels dispositifs d'actionnariat proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_act_aga"><div class="check-item-text">Actions gratuites (AGA)</div></label><label class="check-item"><input type="checkbox" class="c" id="c_act_stock"><div class="check-item-text">Stock-options</div></label><label class="check-item"><input type="checkbox" class="c" id="c_act_bspce"><div class="check-item-text">BSPCE</div></label><label class="check-item"><input type="checkbox" class="c" id="c_act_pea"><div class="check-item-text">PEA-PME</div></label><label class="check-item"><input type="checkbox" class="c" id="c_act_acrs"><div class="check-item-text">ACRS</div></label><label class="check-item"><input type="checkbox" class="c" id="c_act_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_act_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="act_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_act_aucune"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Bien-être financier</div><div class="q-block"><div class="q-label">Quels dispositifs proposez-vous pour améliorer le bien-être financier de vos collaborateurs?</div><label class="check-item"><input type="checkbox" class="c" id="c_bef_acompte"><div class="check-item-text">Acompte sur salaire</div></label><label class="check-item"><input type="checkbox" class="c" id="c_bef_coach"><div class="check-item-text">Coaching financier individuel</div></label><label class="check-item"><input type="checkbox" class="c" id="c_bef_prog"><div class="check-item-text">Programme collectif d'éducation financière</div></label><label class="check-item"><input type="checkbox" class="c" id="c_bef_conseiller"><div class="check-item-text">Accès à un conseiller financier</div></label><label class="check-item"><input type="checkbox" class="c" id="c_bef_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_bef_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="bef_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_bef_aucun"><div class="check-item-text">Aucun dispositif</div></label></div></div></div><div class="step" id="step-4"><div class="step-title">Équilibre de vie</div><div class="step-desc">Télétravail, flexibilité, congés, CET, parentalité, services à la personne.</div><div class="step-section"><div class="subtitle">Télétravail</div><div class="q-block"><div class="q-label">Avez-vous formalisé une politique de télétravail dans votre entreprise?</div><label class="radio-item"><input type="radio" name="tt" value="accord"><div class="radio-item-text">Oui, via un accord d'entreprise</div></label><label class="radio-item"><input type="radio" name="tt" value="charte"><div class="radio-item-text">Oui, via une charte</div></label><label class="radio-item"><input type="radio" name="tt" value="informel"><div class="radio-item-text">Non, arrangement informel</div></label><label class="radio-item"><input type="radio" name="tt" value="non"><div class="radio-item-text">Pas de télétravail</div></label></div><div class="q-block conditional" id="cond_tt_jours"><div class="q-label">Jours de télétravail accordés par semaine en moyenne</div><div class="counter-wrap wl-counter-row"><button type="button" class="btn btn-outline wl-num-btn" id="tt_jours_minus" onclick="adjustCounter('tt_jours_val',-1,1,5)">−</button><input type="number" id="tt_jours_val" value="" placeholder="2" min="1" max="5" step="1" class="wl-num-input"><button type="button" class="btn btn-outline wl-num-btn" id="tt_jours_plus" onclick="adjustCounter('tt_jours_val',1,1,5)">+</button><span class="wl-hint">jour(s) / semaine</span></div></div><div class="q-block"><div class="q-label">Versez-vous une indemnité de télétravail?</div><label class="radio-item"><input type="radio" name="tt_indem" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="tt_indem" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block conditional" id="cond_tt_indem_base"><div class="q-label">Si oui, sur quelle base est-elle calculée?</div><label class="radio-item"><input type="radio" name="tt_indem_base" value="forfait"><div class="radio-item-text">Forfait fixe (mensuel, journalier)</div></label><div class="conditional" id="cond_tt_indem_forfait"><div class="q-block"><label class="field-label">Montant mensuel moyen (€)</label><input type="number" id="tt_indem_forfait_montant" value="0" min="0" step="5"></div></div><label class="radio-item"><input type="radio" name="tt_indem_base" value="reels"><div class="radio-item-text">Remboursement des frais réels sur justificatifs</div></label></div></div><div class="step-section"><div class="subtitle">Flexibilité du travail</div><div class="q-block"><div class="q-label">Quel dispositif de flexibilité du travail proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_flex_plage"><div class="check-item-text">Plages horaires flexibles</div></label><label class="check-item"><input type="checkbox" class="c" id="c_flex_4j"><div class="check-item-text">Semaine de 4 jours</div></label><label class="check-item"><input type="checkbox" class="c" id="c_flex_tp"><div class="check-item-text">Temps partiel choisi</div></label><label class="check-item"><input type="checkbox" class="c" id="c_flex_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_flex_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="flex_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_flex_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Congés &amp; CET</div><div class="q-block"><div class="q-label">Accordez-vous des jours de congés payés supplémentaires au-delà des 25 jours légaux?</div><label class="radio-item"><input type="radio" name="conges" value="illimite"><div class="radio-item-text">Oui, congés illimités</div></label><label class="radio-item"><input type="radio" name="conges" value="supp"><div class="radio-item-text">Oui, congés supplémentaires</div></label><label class="radio-item"><input type="radio" name="conges" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_conges_nb"><div class="q-block"><label class="field-label">Nombre de jours supplémentaires accordés en moyenne</label><input type="number" id="conges_nb" value="" placeholder="5" min="0" max="30" step="1"></div></div></div><div class="q-block"><div class="q-label">Avez-vous mis en place un Compte Épargne Temps (CET)?</div><label class="radio-item"><input type="radio" name="cet" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="cet" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block conditional" id="cond_cet_usage"><div class="q-label">Si oui, sous quelle forme les jours épargnés peuvent-ils être utilisés?</div><label class="check-item"><input type="checkbox" class="c" id="c_cet_conges"><div class="check-item-text">Prise de congés supplémentaires</div></label><label class="check-item"><input type="checkbox" class="c" id="c_cet_monet"><div class="check-item-text">Monétisation (versement sur le salaire)</div></label><label class="check-item"><input type="checkbox" class="c" id="c_cet_pereco"><div class="check-item-text">Alimentation du PERCOL / PEE</div></label><label class="check-item"><input type="checkbox" class="c" id="c_cet_don"><div class="check-item-text">Don de jours à un collègue aidant</div></label><label class="check-item"><input type="checkbox" class="c" id="c_cet_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_cet_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="cet_autres_txt" placeholder="Précisez l'usage…"></div></div></div></div><div class="step-section"><div class="subtitle">Parentalité</div><div class="q-block"><div class="q-label">Proposez-vous un congé maternité supérieur au minimum légal (16 semaines)?</div><label class="radio-item"><input type="radio" name="mat" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="mat" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_mat"><div class="q-block"><label class="field-label">Semaines supplémentaires accordées</label><input type="number" id="mat_semaines" value="0" min="0" max="52" step="1"></div></div></div><div class="q-block"><div class="q-label">Maintenez-vous le salaire à 100&nbsp;% pendant ce congé (au-delà des indemnités CPAM)?</div><label class="radio-item"><input type="radio" name="mat_100" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="mat_100" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block"><div class="q-label">Proposez-vous un congé second parent supérieur au minimum légal (25 jours)?</div><label class="radio-item"><input type="radio" name="sp" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="sp" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_sp"><div class="q-block"><label class="field-label">Jours supplémentaires accordés</label><input type="number" id="sp_jours" value="0" min="0" max="365" step="1"></div></div></div><div class="q-block"><div class="q-label">Maintenez-vous le salaire à 100&nbsp;% pendant ce congé (au-delà des indemnités CPAM)?</div><label class="radio-item"><input type="radio" name="sp_100" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="sp_100" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block"><div class="q-label">Quels autres dispositifs liés à la parentalité proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_par_creche"><div class="check-item-text">Crèche d'entreprise ou places en crèche réservées</div></label><label class="check-item"><input type="checkbox" class="c" id="c_par_retour"><div class="check-item-text">Retour progressif après congé maternité/parental</div></label><label class="check-item"><input type="checkbox" class="c" id="c_par_horaires"><div class="check-item-text">Aménagement des horaires pour les parents</div></label><label class="check-item"><input type="checkbox" class="c" id="c_par_handicap"><div class="check-item-text">Soutien parents enfant en situation de handicap</div></label><label class="check-item"><input type="checkbox" class="c" id="c_par_autre"><div class="check-item-text">Autre</div></label><div class="conditional" id="cond_par_autre"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="par_autre_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_par_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Services à la personne</div><div class="q-block"><div class="q-label">Quel dispositif d'aide au financement des services à la personne avez-vous mis en place?</div><label class="check-item"><input type="checkbox" class="c" id="c_cesu"><div class="check-item-text">Chèques Emploi Service Universel (CESU) préfinancés</div></label><div class="conditional" id="cond_cesu"><div class="q-block"><label class="field-label">Montant annuel moyen par salarié (€)</label><input type="number" id="cesu_montant" value="" placeholder="800" min="0" step="50"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_sap_aide"><div class="check-item-text">Allocation directement versée au salarié</div></label><div class="conditional" id="cond_sap_aide"><div class="q-block"><label class="field-label">Montant annuel moyen par salarié (€)</label><input type="number" id="sap_aide_montant" value="" placeholder="600" min="0" step="50"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_sap_aucun"><div class="check-item-text">Aucun</div></label></div></div></div>
<div class="step" id="step-5"><div class="step-title">Plaisir & bien-être</div><div class="step-desc">Les petits plus qui apportent beaucoup aux salariés.</div><div class="step-section"><div class="subtitle">Budget ASC</div><div class="q-block"><div class="q-label">Quel est le budget ASC annuel alloué par l'entreprise au CSE (% masse salariale brute)?</div><label class="radio-item"><input type="radio" name="asc" value="none"><div class="radio-item-text">Pas de budget ASC</div></label><label class="radio-item"><input type="radio" name="asc" value="legal"><div class="radio-item-text">Montant légal (0,20% ou 0,22%)</div></label><label class="radio-item"><input type="radio" name="asc" value="<1"><div class="radio-item-text">Entre 0,20-0,22% et 1%</div></label><label class="radio-item"><input type="radio" name="asc" value="1-2"><div class="radio-item-text">Entre 1% et 2%</div></label><label class="radio-item"><input type="radio" name="asc" value=">2"><div class="radio-item-text">Supérieur à 2%</div></label></div></div><div class="step-section"><div class="subtitle">Cadeaux</div><div class="q-block"><div class="q-label">Le CSE ou l'entreprise propose-t-il des bons cadeaux aux collaborateurs?</div><label class="radio-item"><input type="radio" name="cadeaux" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="cadeaux" value="non"><div class="radio-item-text">Non</div></label><div class="conditional" id="cond_cadeaux"><div class="q-block"><label class="field-label">Budget moyen par collaborateur par an (€)</label><input type="number" id="cadeaux_montant" value="" placeholder="200" min="0" step="25"></div></div></div></div><div class="step-section"><div class="subtitle">Culture</div><div class="q-block"><div class="q-label">Quels avantages culturels l'entreprise ou le CSE propose-t-il?</div><label class="check-item"><input type="checkbox" class="c" id="c_cult_billet"><div class="check-item-text">Billetterie à tarif préférentiel</div></label><label class="check-item"><input type="checkbox" class="c" id="c_cult_cheques"><div class="check-item-text">Chèque/allocation culture</div></label><div class="conditional" id="cond_cult_cheques"><div class="q-block"><label class="field-label">Budget moyen par collaborateur par an (€)</label><input type="number" id="cult_cheques_montant" value="" placeholder="120" min="0" step="10"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_cult_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_cult_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="cult_autres_txt" placeholder="Précisez l'avantage…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_cult_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Sport</div><div class="q-block"><div class="q-label">Quels dispositifs liés au sport l'entreprise ou le CSE propose-t-il?</div><label class="check-item"><input type="checkbox" class="c" id="c_sport_salle"><div class="check-item-text">Salle de sport sur site</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sport_abo"><div class="check-item-text">Abonnement salle de sport</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sport_cours"><div class="check-item-text">Cours collectifs sur site</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sport_remb"><div class="check-item-text">Remboursement licence sportive</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sport_alloc"><div class="check-item-text">Allocation directement versée au salarié</div></label><div class="conditional" id="cond_sport_alloc"><div class="q-block"><label class="field-label">Montant mensuel moyen de l'allocation (€)</label><input type="number" id="sport_alloc_montant" value="0" min="0" step="5"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_sport_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_sport_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="sport_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_sport_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Vacances</div><div class="q-block"><div class="q-label">Quels dispositifs de soutien aux vacances l'entreprise ou le CSE propose-t-il?</div><label class="check-item"><input type="checkbox" class="c" id="c_vac_ancv"><div class="check-item-text">Chèques-Vacances ANCV</div></label><div class="conditional" id="cond_vac_ancv"><div class="q-block"><label class="field-label">Montant annuel moyen par collaborateur (€)</label><input type="number" id="vac_ancv_montant" value="0" min="0" step="25"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_vac_aide"><div class="check-item-text">Subvention vacances</div></label><div class="conditional" id="cond_vac_aide"><div class="q-block"><label class="field-label">Montant annuel moyen par collaborateur (€)</label><input type="number" id="vac_aide_montant" value="0" min="0" step="25"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_vac_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_vac_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="vac_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_vac_aucun"><div class="check-item-text">Aucun</div></label></div></div><div class="step-section"><div class="subtitle">Santé mentale</div><div class="q-block"><div class="q-label">Quels dispositifs de soutien à la santé mentale proposez-vous?</div><label class="check-item"><input type="checkbox" class="c" id="c_sm_plateforme"><div class="check-item-text">Plateforme de soutien psychologique</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sm_tele"><div class="check-item-text">Téléconsultation médicale</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sm_coach"><div class="check-item-text">Coaching/formations bien-être</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sm_app"><div class="check-item-text">Application(s) bien-être</div></label><label class="check-item"><input type="checkbox" class="c" id="c_sm_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_sm_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="sm_autres_txt" placeholder="Précisez le dispositif…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_sm_aucun"><div class="check-item-text">Aucun dispositif</div></label></div></div></div><div class="step" id="step-6"><div class="step-title">Gestion & communication</div><div class="step-desc">La façon dont vous pilotez et valorisez votre politique est aussi importante que les dispositifs eux-mêmes.</div><div class="step-section"><div class="subtitle">Gestion</div><div class="q-block"><div class="q-label">Comment assurez-vous la gestion de vos avantages salariés?</div><label class="radio-item"><input type="radio" name="gest" value="centralise"><div class="radio-item-text">Solution centralisée (1 carte, 1 app, 1 admin)</div></label><label class="radio-item"><input type="radio" name="gest" value="prestas"><div class="radio-item-text">Via différents prestataires</div></label><label class="radio-item"><input type="radio" name="gest" value="paie"><div class="radio-item-text">En paie</div></label><label class="radio-item"><input type="radio" name="gest" value="mixte"><div class="radio-item-text">Une combinaison de ces différentes solutions</div></label></div></div><div class="step-section"><div class="subtitle">Communication</div><div class="q-block"><div class="q-label">Par quels canaux communiquez-vous sur votre politique d'avantages salariés?</div><label class="check-item"><input type="checkbox" class="c" id="com_msg"><div class="check-item-text">Messages internes (email, Teams, Slack…)</div></label><label class="check-item"><input type="checkbox" class="c" id="com_ent"><div class="check-item-text">Entretien annuel / bilan RH individuel</div></label><label class="check-item"><input type="checkbox" class="c" id="com_cse"><div class="check-item-text">Réunions CSE / réunions d'équipe</div></label><label class="check-item"><input type="checkbox" class="c" id="com_intra"><div class="check-item-text">Intranet / espace RH en ligne</div></label><label class="check-item"><input type="checkbox" class="c" id="com_bsi"><div class="check-item-text">Bilan Social Individuel (BSI)</div></label><label class="check-item"><input type="checkbox" class="c" id="com_carriere"><div class="check-item-text">Page carrière / offres d'emplois</div></label><label class="check-item"><input type="checkbox" class="c" id="com_conf"><div class="check-item-text">Conférences internes / webinaires</div></label><label class="check-item"><input type="checkbox" class="c" id="com_courrier"><div class="check-item-text">Courriers</div></label><label class="check-item"><input type="checkbox" class="c" id="com_mkt"><div class="check-item-text">Marketing interne (flyers, affiches, newsletters)</div></label></div><div class="q-block"><div class="q-label">À quelle fréquence communiquez-vous sur votre politique d'avantages salariés?</div><label class="radio-item"><input type="radio" name="com_freq" value="mois"><div class="radio-item-text">Au moins une fois par mois</div></label><label class="radio-item"><input type="radio" name="com_freq" value="trim"><div class="radio-item-text">Tous les trimestres</div></label><label class="radio-item"><input type="radio" name="com_freq" value="2an"><div class="radio-item-text">Environ 2 fois par an</div></label><label class="radio-item"><input type="radio" name="com_freq" value="1an"><div class="radio-item-text">Une fois par an</div></label><label class="radio-item"><input type="radio" name="com_freq" value="rare"><div class="radio-item-text">Moins d'une fois par an</div></label></div></div></div><div class="step" id="step-7"><div class="step-title">Évaluation & stratégie</div><div class="step-desc">Comment vous mesurez, adaptez et pilotez votre politique avantages dans la durée.</div><div class="step-section"><div class="subtitle">Évaluation & adaptation</div><div class="q-block"><div class="q-label">Menez-vous des enquêtes de satisfaction sur vos avantages?</div><label class="radio-item"><input type="radio" name="enq" value="reg"><div class="radio-item-text">Oui, de façon régulière (au moins 1 fois par an)</div></label><label class="radio-item"><input type="radio" name="enq" value="ponct"><div class="radio-item-text">Oui, de façon ponctuelle</div></label><label class="radio-item"><input type="radio" name="enq" value="non"><div class="radio-item-text">Non</div></label></div><div class="q-block conditional" id="cond_enq_niveau"><div class="q-label">Si oui, à quel niveau se situait la satisfaction lors de votre dernière enquête?</div><label class="radio-item"><input type="radio" name="enq_niveau" value="tres_eleve"><div class="radio-item-text">Très élevée</div></label><label class="radio-item"><input type="radio" name="enq_niveau" value="eleve"><div class="radio-item-text">Élevée</div></label><label class="radio-item"><input type="radio" name="enq_niveau" value="moyenne"><div class="radio-item-text">Moyenne</div></label><label class="radio-item"><input type="radio" name="enq_niveau" value="basse"><div class="radio-item-text">Basse</div></label><label class="radio-item"><input type="radio" name="enq_niveau" value="tres_basse"><div class="radio-item-text">Très basse</div></label></div><div class="q-block"><div class="q-label">À quelle fréquence révisez-vous votre politique d'avantages?</div><label class="radio-item"><input type="radio" name="revis" value="1an"><div class="radio-item-text">Environ une fois par an</div></label><label class="radio-item"><input type="radio" name="revis" value="2-3ans"><div class="radio-item-text">Tous les 2-3 ans environ</div></label><label class="radio-item"><input type="radio" name="revis" value="3ans"><div class="radio-item-text">Tous les 3 ans ou plus</div></label><label class="radio-item"><input type="radio" name="revis" value="indiv"><div class="radio-item-text">Examen individuel des avantages, sans révision globale</div></label><label class="radio-item"><input type="radio" name="revis" value="jamais"><div class="radio-item-text">Jamais</div></label></div></div><div class="step-section"><div class="subtitle">Stratégie & priorités</div><div class="q-block"><div class="q-label">Quels éléments prenez-vous en compte pour définir votre stratégie d'avantages salariés?</div><label class="check-item"><input type="checkbox" class="c" id="c_strat_besoins"><div class="check-item-text">Les attentes et besoins des salariés</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_emp"><div class="check-item-text">L'impact sur la marque employeur</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_rse"><div class="check-item-text">L'impact environnemental et social (RSE)</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_cult"><div class="check-item-text">Votre culture d'entreprise</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_eq"><div class="check-item-text">L'équité entre populations de salariés</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_cout"><div class="check-item-text">Le coût</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_usage"><div class="check-item-text">Le taux d'utilisation des avantages existants</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_pairs"><div class="check-item-text">Les pratiques des entreprises de votre secteur</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_simpl"><div class="check-item-text">La simplicité de gestion</div></label><label class="check-item"><input type="checkbox" class="c" id="c_strat_autres"><div class="check-item-text">Autres</div></label><div class="conditional" id="cond_strat_autres"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="strat_autres_txt" placeholder="Précisez l'élément…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_strat_aucune"><div class="check-item-text">Aucune stratégie définie</div></label></div><div class="q-block"><div class="q-label">Quelles sont vos priorités pour les 12 prochains mois concernant votre politique d'avantages salariés?</div><label class="check-item"><input type="checkbox" class="c" id="c_prio_reduc"><div class="check-item-text">Réduction des coûts</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_maint"><div class="check-item-text">Maintien des coûts</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_inv"><div class="check-item-text">Investir davantage</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_rat"><div class="check-item-text">Rationalisation des dispositifs</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_flex"><div class="check-item-text">Offrir plus de flexibilité</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_visibilite"><div class="check-item-text">Mieux faire connaître les dispositifs en place</div></label><label class="check-item"><input type="checkbox" class="c" id="c_prio_autre"><div class="check-item-text">Autre</div></label><div class="conditional" id="cond_prio_autre"><div class="q-block"><label class="field-label">Précisez</label><input type="text" id="prio_autre_txt" placeholder="Précisez la priorité…"></div></div><label class="check-item"><input type="checkbox" class="c" id="c_prio_aucune"><div class="check-item-text">Aucune priorité identifiée</div></label></div></div></div><div class="step" id="step-8"><div class="step-title">Commentaires & candidature aux Prix</div><div class="step-desc">Dernière étape avant votre résultat et votre benchmark personnalisé.</div><div class="step-section"><div class="subtitle">Informations complémentaires</div><div class="q-block"><div class="q-label">Dispositifs en cours de déploiement, avantages que vous n'auriez pas eu l'occasion de présenter dans le questionnaire, contexte particulier de votre entreprise… Partagez-nous toute information utile pour contextualiser vos réponses ou valoriser certaines de vos actions.</div><textarea id="libre" placeholder="Optionnel : partagez tout élément utile pour contextualiser vos réponses ou valoriser vos actions."></textarea></div></div><div class="step-section"><div class="subtitle">Prix Worklife Top Avantages 2026</div><div class="q-block"><div class="q-label">Souhaitez-vous candidater aux Prix Worklife Top Avantages 2026 (décembre, Paris)?</div><label class="radio-item"><input type="radio" name="prix" value="oui"><div class="radio-item-text">Oui</div></label><label class="radio-item"><input type="radio" name="prix" value="non"><div class="radio-item-text">Non</div></label></div><div class="conditional" id="cond_prix"><div class="q-block"><div class="q-label">Dans quelle catégorie souhaitez-vous candidater ?</div><label class="radio-item"><input type="radio" name="prix_cat" value="grand"><div class="radio-item-text">Grand Prix Worklife Top Avantages</div></label><label class="radio-item"><input type="radio" name="prix_cat" value="conviction"><div class="radio-item-text">Prix de la conviction sociale</div></label><label class="radio-item"><input type="radio" name="prix_cat" value="public"><div class="radio-item-text">Prix de l'Employeur public engagé</div></label><label class="radio-item"><input type="radio" name="prix_cat" value="innov"><div class="radio-item-text">Prix de l'Innovation sociale</div></label></div><div class="q-block"><label class="field-label">Décrivez en quelques mots pourquoi votre politique sociale mérite d'être récompensée</label><textarea id="prix_desc" placeholder="En 2-3 phrases…"></textarea></div></div></div><div class="wl-info-box"> Les données collectées sont strictement confidentielles et utilisées uniquement à des fins de benchmark anonymisé. En cliquant sur <b>"Accéder aux résultats"</b>, vous recevrez par email votre score, votre niveau de label et votre rapport de benchmark personnalisé. </div><div class="wl-info-box" style="margin-top:12px;"><b>📩 Surveillez votre boîte mail.</b> Votre benchmark vous sera envoyé par email juste après validation. Si vous ne le recevez pas dans les minutes qui suivent, pensez à vérifier vos courriers indésirables (spam). Pour toute question, écrivez-nous à <a href="mailto:topavantages@worklife.io" class="wl-teal-semi">topavantages@worklife.io</a>.</div></div><div class="step" id="step-9"><h2 id="form-header-thanks" class="wl-step-merci">Merci pour vos réponses&nbsp;!</h2><div class="thanks-card wl-thanks-card"><div class="wl-thanks-icon">✓</div><h3 class="wl-thanks-title">Votre candidature a bien été prise en compte&nbsp;!</h3><p class="wl-thanks-body"> Pour y accéder, rendez-vous sur votre boîte mail à l'adresse <span id="thanks-email-recap" class="wl-teal-bold">votre adresse</span>. Un email de Worklife vous a été envoyé. Si vous ne recevez pas l'email dans les prochaines minutes, pensez à vérifier vos courriers indésirables ou contactez-nous à <a href="mailto:topavantages@worklife.io" class="wl-teal-semi">topavantages@worklife.io</a>. </p><p id="thanks-prix" class="wl-hidden wl-notice-box"> Votre candidature aux Prix Worklife Top Avantages a bien été enregistrée. Le jury se réunira courant novembre pour élire les lauréats. Nous vous tiendrons bien évidemment informé de votre éventuelle nomination dans une ou plusieurs catégories. </p><p class="wl-thanks-note">L'envoi de vos résultats par email garantit la confidentialité de votre rapport.</p></div></div></div><div id="submit-loader" style="display:none;text-align:center;padding:24px 0"><div class="wl-spinner"></div><p style="color:var(--muted);font-size:14px;margin-top:12px">Traitement en cours, merci de patienter…</p></div><div class="form-nav" id="form-nav"><button class="btn btn-outline wl-hidden" id="btn-prev" style="display:none;" onclick="window.prevStep && window.prevStep()">← Retour</button><div class="form-nav-info" id="step-counter">Étape 1 sur 8</div><button class="btn btn-dark" id="btn-next" onclick="window.nextStep && window.nextStep()">Continuer →</button></div></div></div></section>`;
  var mount = document.getElementById('wl-form-mount');
  if (mount) {
    mount.outerHTML = html;
  } else {
    var scriptTag = document.currentScript;
    if (scriptTag && scriptTag.parentNode) {
      var container = document.createElement('div');
      container.innerHTML = html;
      scriptTag.parentNode.insertBefore(container, scriptTag);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        var container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
      });
    }
  }
  // ── 3. JS ───────────────────────────────────────────────────
  // JS d'interface uniquement — PAS de moteur de scoring.
  // Le scoring/benchmark est exécuté côté Make ; les résultats sont envoyés
  // par email via HubSpot (workflow déclenché par Make).
  // Webhooks injectés via window.WL_CONFIG (Webflow Page Settings > Head Code).
  const TOTAL_STEPS = 8; // 8 question steps, then step 9 = thanks
  let currentStep = 1;
  // ─── HELPERS ────────────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const radioVal = name => { const el = document.querySelector(`input[name="${name}"]:checked`); return el ? el.value : null; };
  function isChecked(id) { const el = document.getElementById(id); return el && el.checked; }
  // ─── CHECKBOX / RADIO visual states & conditional reveal ────────────
  function attachListeners() {
    document.querySelectorAll('.check-item input[type=checkbox]').forEach(cb => {
      cb.addEventListener('change', () => {
        cb.closest('.check-item').classList.toggle('selected', cb.checked);
        refreshConditionals();
      });
    });
    document.querySelectorAll('.radio-item input[type=radio]').forEach(rb => {
      rb.addEventListener('change', () => {
        const name = rb.getAttribute('name');
        document.querySelectorAll(`.radio-item input[name="${name}"]`).forEach(r => {
          r.closest('.radio-item').classList.toggle('selected', r.checked);
        });
        refreshConditionals();
      });
    });
  }
  function show(id, on) {
    const el = $(id);
    if (!el) return;
    el.classList.toggle('show', !!on);
    if (!on) {
      // Bloc masqué (ex. on recoche "Non") -> on vide les inputs conditionnels
      el.querySelectorAll('input, textarea, select').forEach(function (field) {
        if (field.type === 'checkbox' || field.type === 'radio') {
          if (field.checked) field.checked = false;
          const wrap = field.closest('.check-item, .radio-item');
          if (wrap) wrap.classList.remove('selected');
        } else if (field.value) {
          field.value = '';
        }
      });
    }
  }
  function refreshConditionals() {
    // Step 2 — Mieux vivre
    show('cond_tr', isChecked('c_tr'));
    show('cond_cantine', isChecked('c_cantine'));
    show('cond_resto_autres', isChecked('c_resto_autres'));
    show('cond_tc', isChecked('c_tc'));
    show('cond_fmd', isChecked('c_fmd'));
    show('cond_prime_tr', isChecked('c_prime_tr'));
    show('cond_mob_autres', isChecked('c_mob_autres'));
    show('cond_log_autres', isChecked('c_log_autres'));
    show('cond_vente_personnel', radioVal('vente_personnel') === 'autre');
    // Step 3 — Sérénité financière
    show('cond_mut', radioVal('mut') === 'oui');
    show('cond_sm_autres', isChecked('c_sm_autres'));
    show('cond_per_autres', isChecked('c_per_autres'));
    show('cond_abond', radioVal('abond') === 'oui');
    show('cond_int', radioVal('int') === 'oui');
    show('cond_part', radioVal('part') === 'oui');
    show('cond_ppv', radioVal('ppv') === 'oui');
    show('cond_prime_autres', isChecked('c_prime_autres'));
    show('cond_ifc_forme', radioVal('ifc') === 'oui');
    show('cond_ifc_pct', radioVal('ifc_forme') === 'pct');
    show('cond_ifc_forfvar', radioVal('ifc_forme') === 'forfvar');
    show('cond_ifc_forfid', radioVal('ifc_forme') === 'forfid');
    show('cond_act_autres', isChecked('c_act_autres'));
    show('cond_bef_autres', isChecked('c_bef_autres'));
    // Step 4 — Équilibre
    show('cond_tt_jours', ['accord','charte','informel'].includes(radioVal('tt')));
    show('cond_tt_indem_base', radioVal('tt_indem') === 'oui');
    show('cond_tt_indem_forfait', radioVal('tt_indem_base') === 'forfait');
    show('cond_flex_autres', isChecked('c_flex_autres'));
    show('cond_conges_nb', radioVal('conges') === 'supp');
    show('cond_cet_usage', radioVal('cet') === 'oui');
    show('cond_cet_autres', isChecked('c_cet_autres'));
    show('cond_mat', radioVal('mat') === 'oui');
    show('cond_sp', radioVal('sp') === 'oui');
    show('cond_par_autre', isChecked('c_par_autre'));
    show('cond_cesu', isChecked('c_cesu'));
    show('cond_sap_aide', isChecked('c_sap_aide'));
    // Step 5 — Plaisir & bien-être
    show('cond_cadeaux', radioVal('cadeaux') === 'oui');
    show('cond_cult_cheques', isChecked('c_cult_cheques'));
    show('cond_cult_autres', isChecked('c_cult_autres'));
    show('cond_sport_alloc', isChecked('c_sport_alloc'));
    show('cond_sport_autres', isChecked('c_sport_autres'));
    show('cond_vac_ancv', isChecked('c_vac_ancv'));
    show('cond_vac_aide', isChecked('c_vac_aide'));
    show('cond_vac_autres', isChecked('c_vac_autres'));
    // Step 7 — Évaluation & stratégie
    show('cond_enq_niveau', radioVal('enq') === 'reg' || radioVal('enq') === 'ponct');
    show('cond_strat_autres', isChecked('c_strat_autres'));
    show('cond_prio_autre', isChecked('c_prio_autre'));
    // Step 8 — Prix
    show('cond_prix', radioVal('prix') === 'oui');
  }
  // Counter helpers
  function adjustCounter(id, delta, min, max) {
    const el = $(id); if (!el) return;
    let v = parseInt(el.value || '0', 10) + delta;
    if (v < min) v = min;
    if (v > max) v = max;
    el.value = v;
  }
  // ─── STEP NAVIGATION ────────────────────────────────────────────────
  // Étapes 1 → TOTAL_STEPS (=8) : questionnaire
  // Étape TOTAL_STEPS + 1 (=9)  : page de remerciement (post-soumission)
  // Les résultats sont envoyés par email — pas de page résultats côté client.
  function showStep(n) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const target = $('step-' + n);
    if (target) target.classList.add('active');
    const isThanks  = (n === TOTAL_STEPS + 1);
    const isQuestionnaire = (n >= 1 && n <= TOTAL_STEPS);
    if ($('form-header-questionnaire')) $('form-header-questionnaire').style.display = isQuestionnaire ? '' : 'none';
    if ($('form-header-thanks'))        $('form-header-thanks').style.display        = isThanks        ? '' : 'none';
    if ($('progressBarOuter')) $('progressBarOuter').style.display = isQuestionnaire ? '' : 'none';
    if ($('progressLabel'))    $('progressLabel').style.display    = isQuestionnaire ? '' : 'none';
    if (isQuestionnaire) {
      const pct = Math.round((n / (TOTAL_STEPS + 1)) * 100);
      $('progressBar').style.width = pct + '%';
      $('stepNum').textContent = n;
      const el = target ? target.getAttribute('data-name') : '';
      $('stepName').textContent = el || '';
      $('btn-prev').style.display = n === 1 ? 'none' : 'inline-flex';
      $('btn-next').style.display = 'inline-flex';
      $('btn-next').textContent = (n === TOTAL_STEPS) ? 'Accéder aux résultats →' : 'Continuer →';
      $('step-counter').textContent = 'Étape ' + n + ' sur ' + TOTAL_STEPS;
    } else {
      // Page de remerciement : pas de navigation
      $('btn-next').style.display = 'none';
      $('btn-prev').style.display = 'none';
      $('step-counter').textContent = '';
      if (isThanks) {
        const emailRecap = $('thanks-email-recap');
        if (emailRecap) emailRecap.textContent = ($('f_email') && $('f_email').value) || 'votre adresse';
        const prixBlock = $('thanks-prix');
        if (prixBlock) prixBlock.style.display = (radioVal('prix') === 'oui') ? 'block' : 'none';
      }
    }
    // Scroll vers le formulaire au clic Continuer/Retour (skip au tout premier showStep).
    if (window._wlHasNavigated) {
      var _formEl = document.querySelector('#formulaire');
      if (_formEl) {
        var _top = _formEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({top: _top, behavior: 'auto'});
      }
    }
    window._wlHasNavigated = true;
  }
  // Domaines email personnels bloqués (le label exige un email professionnel)
  const PERSONAL_EMAIL_DOMAINS = [
    'gmail.com','googlemail.com','hotmail.com','hotmail.fr','live.com','live.fr',
    'outlook.com','outlook.fr','yahoo.com','yahoo.fr','ymail.com',
    'icloud.com','me.com','mac.com','aol.com','aol.fr','proton.me','protonmail.com',
    'free.fr','orange.fr','wanadoo.fr','sfr.fr','laposte.net','neuf.fr','bbox.fr',
    'numericable.fr','club-internet.fr','noos.fr','cegetel.net','aliceadsl.fr',
    'gmx.com','gmx.fr','mail.com','tutanota.com','zoho.com','yandex.com','yandex.ru',
    'msn.com','rocketmail.com','fastmail.com'
  ];
  function setFieldError(inputId, message) {
    const input = $(inputId);
    const err = $(inputId + '_error');
    if (input) input.classList.toggle('field-invalid', !!message);
    if (err) {
      err.textContent = message || '';
      err.classList.toggle('show', !!message);
      err.style.display = message ? 'block' : '';
    }
  }
  function validateStep1() {
    const required = [
      { id: 'f_prenom',     label: 'Le prénom est obligatoire.' },
      { id: 'f_nom',        label: 'Le nom est obligatoire.' },
      { id: 'f_email',      label: 'L\'email professionnel est obligatoire.' },
      { id: 'f_entreprise', label: 'Le nom de l\'entreprise est obligatoire.' },
      { id: 'f_fonction',   label: 'Votre fonction est obligatoire.' },
      { id: 'f_salaries',   label: 'Le nombre de salariés est obligatoire.' },
      { id: 'f_cp',         label: 'Le code postal est obligatoire.' },
      { id: 'f_secteur',    label: 'Le secteur d\'activité est obligatoire.' }
    ];
    let firstInvalid = null;
    required.forEach(f => {
      const el = $(f.id);
      const value = (el && el.value ? el.value : '').trim();
      if (!value) {
        setFieldError(f.id, f.label);
        if (!firstInvalid) firstInvalid = el;
      } else {
        setFieldError(f.id, '');
      }
    });
    // SIRET : 14 chiffres
    const sirenEl = $('f_siren');
    const sirenVal = (sirenEl && sirenEl.value ? sirenEl.value : '').trim();
    if (!/^[0-9]{14}$/.test(sirenVal)) {
      setFieldError('f_siren', 'Le SIRET doit contenir exactement 14 chiffres.');
      if (!firstInvalid) firstInvalid = sirenEl;
    } else {
      setFieldError('f_siren', '');
    }
    // Code postal : 5 chiffres
    const cpEl = $('f_cp');
    const cpVal = (cpEl && cpEl.value ? cpEl.value : '').trim();
    if (cpVal && !/^[0-9]{5}$/.test(cpVal)) {
      setFieldError('f_cp', 'Le code postal doit contenir exactement 5 chiffres.');
      if (!firstInvalid) firstInvalid = cpEl;
    }
    // Email : format + domaine pro
    const emailEl = $('f_email');
    const emailVal = (emailEl && emailEl.value ? emailEl.value : '').trim().toLowerCase();
    if (emailVal) {
      const formatOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal);
      if (!formatOk) {
        setFieldError('f_email', 'Le format de l\'email n\'est pas valide.');
        if (!firstInvalid) firstInvalid = emailEl;
      } else {
        const domain = emailVal.split('@')[1];
        if (PERSONAL_EMAIL_DOMAINS.indexOf(domain) !== -1) {
          setFieldError('f_email', 'Merci d\'utiliser une adresse email professionnelle (les emails personnels type gmail, hotmail, outlook, yahoo, free, orange, etc. ne sont pas acceptés).');
          if (!firstInvalid) firstInvalid = emailEl;
        }
      }
    }
    if (firstInvalid) {
      try { firstInvalid.focus({ preventScroll: false }); } catch (_) { firstInvalid.focus(); }
      return false;
    }
    return true;
  }
  // ─── CONFIG WEBHOOKS ────────────────────────────────────────────────
  // URLs injectées via window.WL_CONFIG (Webflow Page Settings > Head Code).
  const cfg = window.WL_CONFIG || {};
  const MAKE_SIRET_CHECK_URL = cfg.MAKE_SIRET_CHECK_URL || 'https://hook.eu1.make.com/VOTRE_SIRET_CHECK_WEBHOOK';
  const MAKE_SUBMIT_URL      = cfg.MAKE_SUBMIT_URL      || 'https://hook.eu1.make.com/VOTRE_SUBMIT_WEBHOOK';
  function nextStep(){
    if (currentStep === 1 && !validateStep1()) return;
    // Check SIREN asynchrone : vérifie qu'aucune candidature déjà cette année
    if (currentStep === 1) {
      // Relance candidature abandonnée — envoi des infos de l'étape 1 (fire & forget)
      (function(){
        var _gv = function(id){ return ($(id) && $(id).value) || ''; };
        fetch('https://hook.eu1.make.com/w9ca54ng39rkhe1uy8u82227iu74ki6s', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email:       _gv('f_email'),
            prenom:      _gv('f_prenom'),
            nom:         _gv('f_nom'),
            prenom_nom:  (_gv('f_prenom') + ' ' + _gv('f_nom')).trim(),
            telephone:   _gv('f_tel'),
            entreprise:  _gv('f_entreprise'),
            fonction:    _gv('f_fonction'),
            siren:       _gv('f_siren'),
            nb_salaries: _gv('f_salaries'),
            cp:          _gv('f_cp'),
            secteur:     _gv('f_secteur'),
            timestamp:   new Date().toISOString()
          })
        }).catch(function(){});
      })();
      const siren = ($('f_siren') && $('f_siren').value) || '';
      setFieldError('f_siren', '');
      $('btn-next').disabled = true;
      $('btn-next').textContent = 'Vérification…';
      const _annee = new Date().getFullYear();
      fetch(MAKE_SIRET_CHECK_URL + '?siret=' + encodeURIComponent(siren) + '&annee=' + _annee, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          $('btn-next').disabled = false;
          $('btn-next').textContent = 'Continuer →';
          if (data && data.exists === true) {
            setFieldError('f_siren',
              'Ce SIREN a déjà participé au Label Worklife cette année. ' +
              'Pour toute question : topavantages@worklife.io');
          } else {
            _advanceStep();
          }
        })
        .catch(() => {
          $('btn-next').disabled = false;
          $('btn-next').textContent = 'Continuer →';
          console.warn('[Label Worklife] Check SIREN indisponible — passage autorisé.');
          _advanceStep();
        });
      return;
    }
    // Sortie de la dernière étape (8) → soumission + page remerciement
    if (currentStep === TOTAL_STEPS) {
      try { submitCandidature(); } catch (e) { console.error('[Soumission]', e); }
      if (typeof clearDraft === 'function') clearDraft();
      currentStep = TOTAL_STEPS + 1;
      showStep(currentStep);
      return;
    }
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      showStep(currentStep);
      if (typeof saveDraft === 'function') saveDraft();
    }
  }
  function _advanceStep() {
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      showStep(currentStep);
      if (typeof saveDraft === 'function') saveDraft();
    }
  }
  function prevStep(){
    if(currentStep > 1 && currentStep <= TOTAL_STEPS){
      currentStep--;
      showStep(currentStep);
      if (typeof saveDraft === 'function') saveDraft();
    }
  }
  // ─── SOUMISSION ──────────────────────────────────────────────────────
  // Les réponses sont POSTées au webhook Make. Make calcule le scoring,
  // déclenche le workflow HubSpot qui envoie le rapport par email.
  // Nettoie les champs des blocs conditionnels inactifs avant l'envoi du formulaire.
  // Reprend exactement la logique de refreshConditionals() : si la condition d'affichage
  // d'un bloc est fausse, tous les champs qu'il contient sont remis a vide (les nombres
  // seront ensuite forces a 0). Empeche qu'une valeur saisie puis masquee, ou une valeur
  // d'exemple, ne parte dans le payload alors que l'avantage n'est pas selectionne.
  // L'ordre est identique a refreshConditionals() => parents avant enfants, le nettoyage
  // se propage en cascade (ex : ifc=non -> vide ifc_forme -> vide les montants ifc_*).
  function sanitizeConditionalFields(reponses) {
    // Nettoyage des champs des blocs conditionnels inactifs avant l'envoi.
    // Source UNIQUE de verite : un bloc .conditional est actif s'il porte la classe .show
    // (posee par refreshConditionals). On rejoue refreshConditionals par securite pour que
    // les classes refletent l'etat courant, puis on vide les champs de tout bloc sans .show.
    // -> plus de liste dupliquee a maintenir, et l'imbrication est geree (vider un bloc
    //    parent masque vide aussi ses descendants).
    if (typeof refreshConditionals === 'function') { try { refreshConditionals(); } catch (_e) {} }
    document.querySelectorAll('.conditional').forEach(function (block) {
      if (block.classList.contains('show')) { return; }            // bloc visible -> on garde
      block.querySelectorAll('input, select, textarea').forEach(function (f) {
        if (f.type === 'checkbox') { if (f.id) { reponses[f.id] = false; } }
        else if (f.type === 'radio') { if (f.name) { reponses[f.name] = ''; } }
        else if (f.id) { reponses[f.id] = ''; }
      });
    });
  }

  function buildPayload() {
    const state = snapshotFormState();
    const reponses = {};
    Object.assign(reponses, state.fields);
    Object.entries(state.checkboxes).forEach(([id, v]) => { reponses[id] = v; });
    Object.entries(state.radios).forEach(([name, v]) => { reponses[name] = v; });
    
    // Nettoyage des blocs conditionnels inactifs (champs masques) AVANT le forcage a 0.
    sanitizeConditionalFields(reponses);

    // Anti valeur d'exemple : un champ nombre laisse vide ne transmet jamais de valeur, on force 0.
    document.querySelectorAll('.form-card input[type="number"]').forEach(function (el) {
      if (el.id && (reponses[el.id] === undefined || String(reponses[el.id]).trim() === '')) { reponses[el.id] = '0'; }
    });

    return {
      contact: {
        prenom:     $('f_prenom').value,
        nom:        $('f_nom').value,
        email:      $('f_email').value,
        telephone:  ($('f_tel') && $('f_tel').value) || '',
        entreprise: $('f_entreprise').value,
        fonction:   $('f_fonction').value
      },
      entreprise: {
        siret:       ($('f_siren') && $('f_siren').value) || '',
        cp:          $('f_cp').value,
        nb_salaries: $('f_salaries').value,
        secteur:     $('f_secteur').value
      },
      reponses,   // objet direct — cohérent avec le format Make attendu
      meta: {
        honeypot:      ($('website_url') && $('website_url').value) || '',
        consent_rgpd:  true,
        utm_source:    (new URLSearchParams(window.location.search).get('utm_source'))    || '',
        utm_campaign:  (new URLSearchParams(window.location.search).get('utm_campaign')) || '',
        submitted_at:  new Date().toISOString()
      }
    };
  }
  function submitCandidature() {
    const payload = buildPayload();
    // Antispam honeypot : champ rempli = bot, on ignore silencieusement
    if (payload.contact && payload.meta && payload.meta.website_url) {
      showStep(TOTAL_STEPS + 1); return;
    }
    const btn = document.getElementById('btn-submit');
    const loaderEl = document.getElementById('submit-loader');
    if (btn)     { btn.disabled = true; btn.textContent = 'Envoi en cours…'; }
    if (loaderEl) loaderEl.style.display = 'block';
    const TIMEOUT_MS = 40000;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    fetch(MAKE_SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    })
    .then(res => {
      clearTimeout(timer);
      if (!res.ok) console.warn('[Label Worklife] Submit webhook — réponse non-OK :', res.status);
      return res.json().catch(() => ({}));
    })
    .then(data => {
      localStorage.removeItem('wl_draft');
      showStep(TOTAL_STEPS + 1);
    })
    .catch(err => {
      clearTimeout(timer);
      console.warn('[Label Worklife] Submit webhook — erreur :', err.message);
      localStorage.removeItem('wl_draft');
      showStep(TOTAL_STEPS + 1);
    })
    .finally(() => {
      if (btn)     { btn.disabled = false; btn.textContent = 'Envoyer ma candidature'; }
      if (loaderEl) loaderEl.style.display = 'none';
    });
  }
  // ─── SAUVEGARDE & REPRISE DE BROUILLON ──────────────────────────────
  const DRAFT_KEY = 'wta_draft_v2';
  const DRAFT_EXPIRY_DAYS = 30;
  let draftSaveTimer = null;
  function snapshotFormState() {
    const state = { fields: {}, checkboxes: {}, radios: {} };
    document.querySelectorAll('.form-card input, .form-card select, .form-card textarea').forEach(el => {
      if (el.type === 'checkbox') {
        if (el.id) state.checkboxes[el.id] = el.checked;
      } else if (el.type === 'radio') {
        if (el.checked && el.name) state.radios[el.name] = el.value;
      } else {
        if (el.id) state.fields[el.id] = el.value;
      }
    });
    return state;
  }
  function saveDraft() {
    try {
      const draft = Object.assign(
        {
          version: 1,
          timestamp: new Date().toISOString(),
          currentStep: Math.max(1, Math.min(TOTAL_STEPS, currentStep))
        },
        snapshotFormState()
      );
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch (e) { /* localStorage indisponible : on échoue silencieusement */ }
  }
  function scheduleDraftSave() {
    clearTimeout(draftSaveTimer);
    draftSaveTimer = setTimeout(saveDraft, 400);
  }
  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
  }
  function getDraft() {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return null;
      const draft = JSON.parse(raw);
      if (!draft || draft.version !== 1 || !draft.timestamp) return null;
      const age = Date.now() - new Date(draft.timestamp).getTime();
      if (age > DRAFT_EXPIRY_DAYS * 24 * 3600 * 1000) {
        clearDraft();
        return null;
      }
      return draft;
    } catch (e) { return null; }
  }
  function restoreDraft(draft) {
    Object.entries(draft.fields || {}).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el && value != null) el.value = value;
    });
    Object.entries(draft.checkboxes || {}).forEach(([id, checked]) => {
      const el = document.getElementById(id);
      if (el) {
        el.checked = !!checked;
        const item = el.closest('.check-item');
        if (item) item.classList.toggle('selected', !!checked);
      }
    });
    Object.entries(draft.radios || {}).forEach(([name, value]) => {
      document.querySelectorAll('input[name="' + name + '"]').forEach(r => {
        const isMatch = r.value === value;
        r.checked = isMatch;
        const item = r.closest('.radio-item');
        if (item) item.classList.toggle('selected', isMatch);
      });
    });
    refreshConditionals();
    const targetStep = Math.max(1, Math.min(TOTAL_STEPS, draft.currentStep || 1));
    currentStep = targetStep;
    showStep(currentStep);
  }
  function attachAutoSave() {
    document.querySelectorAll('.form-card input, .form-card select, .form-card textarea').forEach(el => {
      const evtName = (el.tagName === 'INPUT' && (el.type === 'checkbox' || el.type === 'radio')) ? 'change' : 'input';
      el.addEventListener(evtName, scheduleDraftSave);
    });
  }
  function showResumeBanner(draft) {
    const formInner = document.querySelector('.form-inner');
    if (!formInner) return;
    const progressBar = document.querySelector('.progress-bar-outer');
    let dateStr = '';
    try {
      dateStr = new Date(draft.timestamp).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { dateStr = 'récemment'; }
    let stepLabel = '';
    const target = document.getElementById('step-' + draft.currentStep);
    if (target) {
      const name = target.getAttribute('data-name');
      if (name) stepLabel = name;
    }
    const banner = document.createElement('div');
    banner.id = 'resume-banner';
    banner.style.cssText = 'background:var(--teal-pale);border:1px solid rgba(40,72,72,.22);border-radius:18px;padding:18px 22px;margin-bottom:18px;display:flex;align-items:center;gap:18px;flex-wrap:wrap;';
    banner.innerHTML =
      '<div style="flex:1;min-width:240px;font-size:14px;line-height:1.55;color:var(--near-black);">' +
        '<b>Vous avez une candidature en cours</b>' +
        ', commencée le ' + dateStr +
        (stepLabel ? ', à l\'étape « ' + stepLabel + ' »' : '') +
        '. Souhaitez-vous reprendre&nbsp;?' +
      '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
        '<button class="btn btn-teal" id="btn-resume" type="button">Reprendre →</button>' +
        '<button class="btn btn-outline" id="btn-restart" type="button">Recommencer</button>' +
      '</div>';
    formInner.insertBefore(banner, progressBar || formInner.firstChild);
    document.getElementById('btn-resume').addEventListener('click', () => {
      restoreDraft(draft);
      banner.remove();
    });
    document.getElementById('btn-restart').addEventListener('click', () => {
      clearDraft();
      banner.remove();
      document.querySelectorAll('#formulaire .form-card input:not([type=checkbox]):not([type=radio]), #formulaire .form-card select, #formulaire .form-card textarea').forEach(function(el) { el.value = ''; });
      document.querySelectorAll('#formulaire .form-card input[type=checkbox], #formulaire .form-card input[type=radio]').forEach(function(el) {
        el.checked = false;
        var item = el.closest('.check-item, .radio-item');
        if (item) item.classList.remove('selected');
      });
      currentStep = 1;
      showStep(1);
      refreshConditionals();
    });
  }
  // ─── INIT ───────────────────────────────────────────────────────────
  function applyInlineStyles() {
    document.querySelectorAll('#formulaire .field-label, #formulaire .step-title, #formulaire .step-desc, #formulaire .subtitle').forEach(function(el) {
      el.style.textAlign = 'left';
    });
    document.querySelectorAll('#formulaire input, #formulaire select, #formulaire textarea').forEach(function(el) {
      if (el.type === 'checkbox' || el.type === 'radio') return;
      el.style.background = '#FFFFFF';
      if (!el._wlFocusBound) {
        el._wlFocusBound = true;
        el.addEventListener('focus', function() {
          this.style.setProperty('border-color', '#101010', 'important');
          this.style.setProperty('outline', 'none', 'important');
        });
        el.addEventListener('blur', function() {
          this.style.removeProperty('border-color');
          this.style.removeProperty('outline');
        });
      }
    });
    var card = document.querySelector('#formulaire .form-card');
    if (card) { card.style.background = '#FFFFFF'; card.style.border = '1.5px solid #E5E0D6'; }
    var barOuter = document.getElementById('progressBarOuter');
    if (barOuter) { barOuter.style.height = '8px'; }
  }
  // Repositionne chaque bloc conditionnel Oui/Non juste sous le radio "Oui" qui le declenche
  // (au lieu d'apparaitre sous le radio "Non"). N'affecte ni la capture des reponses, ni
  // refreshConditionals, ni la sanitisation (qui operent par id/nom, pas par position DOM).
  function repositionConditionnels() {
    var pairs = [
      ['mut','cond_mut'],['abond','cond_abond'],['int','cond_int'],['part','cond_part'],
      ['ppv','cond_ppv'],['ifc','cond_ifc_forme'],['tt_indem','cond_tt_indem_base'],
      ['cet','cond_cet_usage'],['mat','cond_mat'],['sp','cond_sp'],
      ['cadeaux','cond_cadeaux'],['prix','cond_prix']
    ];
    pairs.forEach(function (pr) {
      var cond = document.getElementById(pr[1]);
      var oui  = document.querySelector('input[name="' + pr[0] + '"][value="oui"]');
      if (!cond || !oui) { return; }
      var item = oui.closest('.radio-item');
      if (item && item.parentNode) { item.insertAdjacentElement('afterend', cond); }
    });
  }
  function _init() {
    attachListeners();
    repositionConditionnels();
    attachAutoSave();
    refreshConditionals();
    const draft = getDraft();
    if (draft) { showResumeBanner(draft); }
    showStep(1);
    try { applyInlineStyles(); } catch(e) { console.warn('[WL] applyInlineStyles error:', e); }
  }
  // Exposer les fonctions onclick au scope global (requis pour les attributs HTML onclick)
  window.nextStep      = nextStep;
  window.prevStep      = prevStep;
  window.adjustCounter = adjustCounter;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }
})();
