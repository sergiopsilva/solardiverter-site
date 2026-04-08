/**
 * SolarDiverter - Static Site JS
 * Language Switcher (PT, EN, FR, ES), Contact Form (Formspree), Anti-spam, Navbar, Animations
 */
(function () {
    'use strict';

    /* ==========================================================================
       CONFIGURATION
       ========================================================================== */
    var WEB3FORMS_KEY = '54f686dc-90b9-4756-820a-c561f1107609';
    var WEB3FORMS_URL = 'https://api.web3forms.com/submit';

    /* ==========================================================================
       TRANSLATIONS
       ========================================================================== */
    var translations = {
        pt: {
            ribbon_version: 'Versão 1.0.3 - Março 2026 · BETA',
            dl_beta_notice: '⚠️ Versões em fase <strong>BETA</strong> — testadas mas em desenvolvimento ativo. Use com precaução e reporte erros.',
            nav_features: 'Funcionalidades',
            nav_hardware: 'Hardware',
            nav_started: 'Instalação',
            nav_downloads: 'Transferências',
            nav_contact: 'Contacto',
            hero_badge: 'Uso Livre \u00b7 ESP32',
            hero_subtitle: 'Gestor de excedentes fotovoltaicos que transforma o seu termoacumulador convencional num cilindro inteligente',
            hero_desc: 'Controlo automático de cargas resistivas (termoacumuladores, esquentadores elétricos) com energia solar excedente. Compatível com +25 inversores/medidores, Home Assistant e MQTT.',
            hero_btn_download: 'Transferir Grátis',
            hero_btn_features: 'Explorar Funcionalidades',
            stat_inverters: 'INVERSORES',
            stat_version: 'ÚLTIMA VERSÃO',
            stat_channels: 'CANAIS PWM',
            stat_free: 'GRATUITO',
            scroll_text: 'SCROLL',
            features_tag: 'FUNCIONALIDADES',
            features_title: 'Novidades da Versão 1.0.3',
            features_subtitle: 'Lançada em Março de 2026',
            feat_pwm_title: '4 Canais PWM',
            feat_pwm_1: 'Controlo independente por canal',
            feat_pwm_2: 'Rampa suave configurável',
            feat_pwm_3: 'Proteção térmica TRIAC',
            feat_pwm_4: 'Min/Max duty ajustável',
            feat_temp_title: 'Controlo de Temperatura',
            feat_temp_1: '4 sensores DS18B20',
            feat_temp_2: 'Histerese ajustável',
            feat_temp_3: 'Ativação automática',
            feat_temp_4: 'Proteção de TRIAC',
            feat_mqtt_title: 'Home Assistant',
            feat_mqtt_1: 'Integração MQTT completa',
            feat_mqtt_2: 'Tópicos configuráveis',
            feat_mqtt_3: 'Comandos remotos',
            feat_mqtt_4: 'Automatizações avançadas',
            feat_tech_title: 'Melhorias Técnicas',
            feat_tech_1: 'Peak Shaving integrado',
            feat_tech_2: 'PWM otimizado',
            feat_tech_3: 'Interface Web 6 idiomas',
            feat_tech_4: 'Display OLED suportado',
            feat_wifi_title: 'WiFi Dual',
            feat_wifi_desc: 'Rede principal + backup, modo AP para configuração, IP estático ou DHCP.',
            feat_schedule_title: '4 Agendamentos',
            feat_schedule_desc: 'Programações com controlo de temperatura, dias da semana e PWM fixo.',
            feat_safety_title: 'Proteções',
            feat_safety_desc: 'Thermal cutoff, data timeout, proteção de fase e peak shaving automáticos.',
            feat_legionella_title: 'Anti-Legionella',
            feat_legionella_desc: 'Temperatura mínima de segurança da água com histerese configurável.',
            feat_battery_title: 'Prioridade Bateria',
            feat_battery_desc: 'Modo prioridade bateria para inversores híbridos com threshold configurável.',
            feat_phase_title: 'Proteção Trifásica',
            feat_phase_desc: 'Limitação por fase do diverter, potência máxima por fase (3680W default).',
            hw_tag: 'COMPATIBILIDADE',
            hw_title: 'Hardware Compatível',
            hw_subtitle: 'Compatível com mais de 25 inversores e medidores diferentes',
            hw_mqtt_custom: 'Custom Topics',
            specs_tag: 'ESPECIFICAÇÕES',
            specs_title: 'Hardware ESP32',
            specs_subtitle: 'Baseado no ESP32-WROOM-32 / 32U',
            hw_specs_title: 'Especificações',
            hw_mcu: 'Microcontrolador',
            hw_flash: 'Mínimo 4MB',
            hw_pwm: 'Saídas PWM',
            hw_pwm_val: '4 canais independentes',
            hw_relays: 'Relés',
            hw_relays_val: '4 saídas digitais',
            hw_sensors: 'Sensores',
            hw_sensors_val: '4x DS18B20 (OneWire)',
            hw_comms: 'Comunicação',
            hw_pinout_title: 'Pinout GPIO',
            hw_pin_relay: 'Relés 1-4',
            hw_pin_button: 'Botão',
            started_tag: 'INSTALAÇÃO',
            started_title: 'Primeiros Passos',
            started_subtitle: 'Do flash ao funcionamento em minutos',
            step1_title: 'Flash do Firmware',
            step1_desc: 'Alimente o ESP32 via USB. Use o Web Flasher ou os scripts incluídos para instalar o firmware.',
            step2_title: 'Ligar ao WiFi',
            step2_desc: 'Ligue-se à rede WiFi "SolarDiverter-Setup" (sem password) e abra 192.168.4.1',
            step3_title: 'Configurar',
            step3_desc: 'Configure a rede WiFi doméstica, selecione o medidor de energia e ajuste a potência nominal.',
            step4_title: 'Desviar Energia',
            step4_desc: 'O sistema monitoriza o excedente solar e ajusta automaticamente a potência PWM em tempo real.',
            tip_reset_title: 'Reset de Fábrica:',
            tip_reset_desc: 'Pressione o botão GPIO0 durante 10 segundos no arranque para repor as definições de fábrica.',
            dl_tag: 'TRANSFERÊNCIAS',
            dl_title: 'Pronto para Começar?',
            dl_subtitle: 'Descarregue a versão que melhor se adapta ao seu projeto. Ambas são gratuitas.',
            dl_lite_desc: 'Ideal para instalações simples com uma única carga. 1 canal PWM, 1 agendamento e atualizações OTA pela interface Web.',
            dl_pro_desc: 'Para instalações avançadas com múltiplas cargas. 4 canais PWM, 4 agendamentos com temperatura, Modbus Universal JSON e proteção de fase. Requer ativação.',
            dl_feat_1pwm: '1 Canal PWM',
            dl_feat_pwm80: 'PWM Auto: 80% máx.',
            dl_feat_1schedule: '1 Agendamento (sem temp.)',
            dl_feat_4pwm: '4 Canais PWM independentes',
            dl_feat_meters: '25+ Medidores suportados',
            dl_feat_mqtt: 'MQTT / Home Assistant',
            dl_feat_schedules: '4 Agendamentos c/ temperatura',
            dl_feat_temp: 'Sensores de temperatura',
            dl_feat_webfull: 'Interface Web completa + Wizard',
            dl_feat_ota: 'Atualizações OTA via WiFi',
            dl_feat_phase: 'Phase Shift entre canais',
            dl_feat_phase_prot: 'Proteção de fase (Shelly 3EM)',
            dl_feat_modbus_adv: 'Modbus avançado (32 registos, 32-bit)',
            dl_feat_modbus_scanner: 'Modbus Scanner (auto-discovery)',
            dl_feat_modbus_json: 'Modbus Universal JSON',
            dl_feat_partition: 'Partição expandida 3MB',
            dl_pro_activation: 'Requer chave de ativação (Chip ID)',
            dl_recommended: 'Recomendado',
            dl_btn_lite: 'Transferir LITE (.zip)',
            dl_btn_pro: 'Transferir PRO (.zip)',
            dl_btn_docs: 'Ver Documentação',
            contact_tag: 'CONTACTO',
            contact_title: 'Fale Connosco',
            contact_subtitle: 'Tem dúvidas ou sugestões? Entre em contacto.',
            plugplay_title: 'Quer uma solução plug & play para gerir o seu excedente fotovoltaico?',
            plugplay_sub: 'Fornecemos kits montados e configurados — pronto a ligar ao seu termoacumulador.',
            plugplay_btn: 'Fale Connosco',
            form_name: 'Nome',
            form_name_ph: 'O seu nome',
            form_email: 'Email',
            form_subject: 'Assunto',
            form_subject_select: '-- Selecione --',
            form_subject_support: 'Suporte Técnico',
            form_subject_bug: 'Reportar Problema',
            form_subject_feature: 'Sugestão',
            form_subject_purchase: 'Compra / Encomenda',
            form_subject_other: 'Outro',
            form_message: 'Mensagem',
            form_message_ph: 'Escreva a sua mensagem...',
            form_antispam: 'Verificação anti-spam',
            form_antispam_ph: 'Resposta',
            form_submit: 'Enviar Mensagem',
            form_sending: 'A enviar...',
            form_success: 'Mensagem enviada com sucesso! Responderemos brevemente.',
            form_error: 'Erro ao enviar. Por favor tente novamente.',
            form_error_antispam: 'Resposta anti-spam incorreta.',
            form_error_fields: 'Por favor preencha todos os campos obrigatórios.',
            footer_desc: 'Desviador Inteligente de Energia Solar para ESP32 by AlternativaIOT.',
            footer_license: 'Uso pessoal livre. A distribuição ou utilização comercial é proibida sem autorização prévia por escrito do autor.',
            footer_nav: 'Navegação',
            footer_resources: 'Recursos',
            footer_docs: 'Documentação',
            footer_issues: 'Reportar Bug',
            footer_contact_title: 'Contacto',
            footer_rights: 'Todos os direitos reservados.',
            donate_title: 'Costumas usar o SolarDiverter e consideras que compensa financeiramente?',
            donate_sub: 'O firmware é gratuito e desenvolvido no tempo livre. Se quiseres apoiar o projeto, considera fazer um donativo — qualquer valor ajuda a mantê-lo ativo.',
            donate_btn: 'Fazer Donativo',
            donate_footer: 'Apoiar o Projeto'
        },
        en: {
            ribbon_version: 'Version 1.0.3 - March 2026 · BETA',
            dl_beta_notice: '⚠️ Beta versions — tested but in active development. Use with caution and report any issues.',
            nav_features: 'Features',
            nav_hardware: 'Hardware',
            nav_started: 'Getting Started',
            nav_downloads: 'Downloads',
            nav_contact: 'Contact',
            hero_badge: 'Free \u00b7 ESP32',
            hero_subtitle: 'Solar surplus manager that turns your conventional water heater into a smart cylinder',
            hero_desc: 'Automatic control of resistive loads (water heaters) with surplus solar energy. Compatible with 25+ inverters/meters, Home Assistant and MQTT.',
            hero_btn_download: 'Download Free',
            hero_btn_features: 'Explore Features',
            stat_inverters: 'INVERTERS',
            stat_version: 'LATEST VERSION',
            stat_channels: 'PWM CHANNELS',
            stat_free: 'FREE',
            scroll_text: 'SCROLL',
            features_tag: 'FEATURES',
            features_title: 'What\'s New in Version 1.0.3',
            features_subtitle: 'Released March 2026',
            feat_pwm_title: '4 PWM Channels',
            feat_pwm_1: 'Independent control per channel',
            feat_pwm_2: 'Configurable smooth ramp',
            feat_pwm_3: 'TRIAC thermal protection',
            feat_pwm_4: 'Adjustable min/max duty',
            feat_temp_title: 'Temperature Control',
            feat_temp_1: '4 DS18B20 sensors',
            feat_temp_2: 'Adjustable hysteresis',
            feat_temp_3: 'Automatic activation',
            feat_temp_4: 'TRIAC protection',
            feat_mqtt_title: 'Home Assistant',
            feat_mqtt_1: 'Full MQTT integration',
            feat_mqtt_2: 'Configurable topics',
            feat_mqtt_3: 'Remote commands',
            feat_mqtt_4: 'Advanced automations',
            feat_tech_title: 'Technical Improvements',
            feat_tech_1: 'Integrated Peak Shaving',
            feat_tech_2: 'Optimized PWM',
            feat_tech_3: 'Web interface in 6 languages',
            feat_tech_4: 'OLED display supported',
            feat_wifi_title: 'Dual WiFi',
            feat_wifi_desc: 'Primary + backup network, AP mode for setup, static IP or DHCP.',
            feat_schedule_title: '4 Schedules',
            feat_schedule_desc: 'Schedules with temperature control, weekdays and fixed PWM.',
            feat_safety_title: 'Protection',
            feat_safety_desc: 'Thermal cutoff, data timeout, phase protection and automatic peak shaving.',
            feat_legionella_title: 'Anti-Legionella',
            feat_legionella_desc: 'Minimum water temperature safety with configurable hysteresis.',
            feat_battery_title: 'Battery Priority',
            feat_battery_desc: 'Battery priority mode for hybrid inverters with configurable threshold.',
            feat_phase_title: 'Three-Phase Protection',
            feat_phase_desc: 'Per-phase diverter limiting, max power per phase (3680W default).',
            hw_tag: 'COMPATIBILITY',
            hw_title: 'Compatible Hardware',
            hw_subtitle: 'Compatible with over 25 different inverters and meters',
            hw_mqtt_custom: 'Custom Topics',
            specs_tag: 'SPECIFICATIONS',
            specs_title: 'ESP32 Hardware',
            specs_subtitle: 'Based on ESP32-WROOM-32 / 32U',
            hw_specs_title: 'Specifications',
            hw_mcu: 'Microcontroller',
            hw_flash: 'Minimum 4MB',
            hw_pwm: 'PWM Outputs',
            hw_pwm_val: '4 independent channels',
            hw_relays: 'Relays',
            hw_relays_val: '4 digital outputs',
            hw_sensors: 'Sensors',
            hw_sensors_val: '4x DS18B20 (OneWire)',
            hw_comms: 'Communication',
            hw_pinout_title: 'GPIO Pinout',
            hw_pin_relay: 'Relays 1-4',
            hw_pin_button: 'Button',
            started_tag: 'GETTING STARTED',
            started_title: 'Getting Started',
            started_subtitle: 'From flash to running in minutes',
            step1_title: 'Flash Firmware',
            step1_desc: 'Power the ESP32 via USB. Use the Web Flasher or included scripts to install the firmware.',
            step2_title: 'Connect to WiFi',
            step2_desc: 'Connect to the "SolarDiverter-Setup" WiFi network (no password) and open 192.168.4.1',
            step3_title: 'Configure',
            step3_desc: 'Set up your home WiFi, select the energy meter and adjust the nominal power.',
            step4_title: 'Divert Energy',
            step4_desc: 'The system automatically monitors solar surplus and adjusts PWM power in real time.',
            tip_reset_title: 'Factory Reset:',
            tip_reset_desc: 'Press GPIO0 button for 10 seconds at startup to reset to factory defaults.',
            dl_tag: 'DOWNLOADS',
            dl_title: 'Ready to Get Started?',
            dl_subtitle: 'Download the version that best fits your project. Both are free.',
            dl_lite_desc: 'Designed for simple single-load installations. 1 PWM channel, 1 schedule and OTA updates via the Web UI.',
            dl_pro_desc: 'For advanced multi-load installations. 4 PWM channels, 4 schedules with temperature control, Universal Modbus JSON and phase protection. Requires activation.',
            dl_feat_1pwm: '1 PWM Channel',
            dl_feat_pwm80: 'Auto PWM: 80% max.',
            dl_feat_1schedule: '1 Schedule (no temp. control)',
            dl_feat_4pwm: '4 Independent PWM Channels',
            dl_feat_meters: '25+ Meters supported',
            dl_feat_mqtt: 'MQTT / Home Assistant',
            dl_feat_schedules: '4 Schedules w/ temperature',
            dl_feat_temp: 'Temperature sensors',
            dl_feat_webfull: 'Full Web Interface + Wizard',
            dl_feat_ota: 'OTA Updates via WiFi',
            dl_feat_phase: 'Phase Shift between channels',
            dl_feat_phase_prot: 'Phase protection (Shelly 3EM)',
            dl_feat_modbus_adv: 'Advanced Modbus (32 registers, 32-bit)',
            dl_feat_modbus_scanner: 'Modbus Scanner (auto-discovery)',
            dl_feat_modbus_json: 'Universal Modbus JSON',
            dl_feat_partition: 'Expanded 3MB Partition',
            dl_pro_activation: 'Requires activation key (Chip ID)',
            dl_recommended: 'Recommended',
            dl_btn_lite: 'Download LITE (.zip)',
            dl_btn_pro: 'Download PRO (.zip)',
            dl_btn_docs: 'View Documentation',
            contact_tag: 'CONTACT',
            contact_title: 'Get in Touch',
            contact_subtitle: 'Have questions or suggestions? Contact us.',
            plugplay_title: 'Want a plug & play solution to manage your solar surplus?',
            plugplay_sub: 'We supply assembled and pre-configured kits — ready to connect to your water heater.',
            plugplay_btn: 'Contact Us',
            form_name: 'Name',
            form_name_ph: 'Your name',
            form_email: 'Email',
            form_subject: 'Subject',
            form_subject_select: '-- Select --',
            form_subject_support: 'Technical Support',
            form_subject_bug: 'Report Issue',
            form_subject_feature: 'Suggestion',
            form_subject_purchase: 'Purchase / Order',
            form_subject_other: 'Other',
            form_message: 'Message',
            form_message_ph: 'Write your message...',
            form_antispam: 'Anti-spam verification',
            form_antispam_ph: 'Answer',
            form_submit: 'Send Message',
            form_sending: 'Sending...',
            form_success: 'Message sent successfully! We will reply shortly.',
            form_error: 'Error sending message. Please try again.',
            form_error_antispam: 'Incorrect anti-spam answer.',
            form_error_fields: 'Please fill in all required fields.',
            footer_desc: 'Intelligent Solar Energy Diverter for ESP32 by AlternativaIOT.',
            footer_license: 'Free for personal use. Commercial distribution or use is prohibited without prior written authorization from the author.',
            footer_nav: 'Navigation',
            footer_resources: 'Resources',
            footer_docs: 'Documentation',
            footer_issues: 'Report Bug',
            footer_contact_title: 'Contact',
            footer_rights: 'All rights reserved.',
            donate_title: 'Do you use SolarDiverter and find it worthwhile?',
            donate_sub: 'The firmware is free and developed in spare time. If you\'d like to support the project, consider making a donation — any amount helps keep it going.',
            donate_btn: 'Donate',
            donate_footer: 'Support the Project'
        },
        fr: {
            ribbon_version: 'Version 1.0.3 - Mars 2026 · BETA',
            dl_beta_notice: '⚠️ Versions en phase <strong>BETA</strong> — testées mais en développement actif. À utiliser avec précaution, signalez les erreurs.',
            nav_features: 'Fonctionnalités',
            nav_hardware: 'Matériel',
            nav_started: 'Installation',
            nav_downloads: 'Téléchargements',
            nav_contact: 'Contact',
            hero_badge: 'Gratuit \u00b7 ESP32',
            hero_subtitle: 'Gestionnaire de surplus photovoltaïques qui transforme votre chauffe-eau traditionnel en ballon intelligent',
            hero_desc: 'Contrôle automatique des charges résistives (chauffe-eau) avec l’énergie solaire excédentaire. Compatible avec +25 onduleurs/compteurs, Home Assistant et MQTT.',
            hero_btn_download: 'Télécharger Gratuit',
            hero_btn_features: 'Explorer les Fonctionnalités',
            stat_inverters: 'ONDULEURS',
            stat_version: 'DERNIÈRE VERSION',
            stat_channels: 'CANAUX PWM',
            stat_free: 'GRATUIT',
            scroll_text: 'DÉFILER',
            features_tag: 'FONCTIONNALITÉS',
            features_title: 'Nouveautés de la Version 1.0.3',
            features_subtitle: 'Sortie en Mars 2026',
            feat_pwm_title: '4 Canaux PWM',
            feat_pwm_1: 'Contrôle indépendant par canal',
            feat_pwm_2: 'Rampe progressive configurable',
            feat_pwm_3: 'Protection thermique TRIAC',
            feat_pwm_4: 'Min/Max duty ajustable',
            feat_temp_title: 'Contrôle de Température',
            feat_temp_1: '4 capteurs DS18B20',
            feat_temp_2: 'Hystérésis ajustable',
            feat_temp_3: 'Activation automatique',
            feat_temp_4: 'Protection TRIAC',
            feat_mqtt_title: 'Home Assistant',
            feat_mqtt_1: 'Intégration MQTT complète',
            feat_mqtt_2: 'Topics configurables',
            feat_mqtt_3: 'Commandes distantes',
            feat_mqtt_4: 'Automatisations avancées',
            feat_tech_title: 'Améliorations Techniques',
            feat_tech_1: 'Peak Shaving intégré',
            feat_tech_2: 'PWM optimisé',
            feat_tech_3: 'Interface Web 6 langues',
            feat_tech_4: 'Écran OLED supporté',
            feat_wifi_title: 'WiFi Double',
            feat_wifi_desc: 'Réseau principal + secours, mode AP pour configuration, IP statique ou DHCP.',
            feat_schedule_title: '4 Programmations',
            feat_schedule_desc: 'Programmations avec contrôle de température, jours de la semaine et PWM fixe.',
            feat_safety_title: 'Protections',
            feat_safety_desc: 'Coupure thermique, timeout données, protection de phase et peak shaving automatiques.',
            feat_legionella_title: 'Anti-Légionelle',
            feat_legionella_desc: 'Température minimale de sécurité de l\'éau avec hystérésis configurable.',
            feat_battery_title: 'Priorité Batterie',
            feat_battery_desc: 'Mode priorité batterie pour onduleurs hybrides avec seuil configurable.',
            feat_phase_title: 'Protection Triphasée',
            feat_phase_desc: 'Limitation par phase du déviateur, puissance maximale par phase (3680W défaut).',
            hw_tag: 'COMPATIBILITÉ',
            hw_title: 'Matériel Compatible',
            hw_subtitle: 'Compatible avec plus de 25 onduleurs et compteurs différents',
            hw_mqtt_custom: 'Topics Custom',
            specs_tag: 'SPÉCIFICATIONS',
            specs_title: 'Matériel ESP32',
            specs_subtitle: 'Basé sur ESP32-WROOM-32 / 32U',
            hw_specs_title: 'Spécifications',
            hw_mcu: 'Microcontrôleur',
            hw_flash: 'Minimum 4 Mo',
            hw_pwm: 'Sorties PWM',
            hw_pwm_val: '4 canaux indépendants',
            hw_relays: 'Relais',
            hw_relays_val: '4 sorties numériques',
            hw_sensors: 'Capteurs',
            hw_sensors_val: '4x DS18B20 (OneWire)',
            hw_comms: 'Communication',
            hw_pinout_title: 'Brochage GPIO',
            hw_pin_relay: 'Relais 1-4',
            hw_pin_button: 'Bouton',
            started_tag: 'INSTALLATION',
            started_title: 'Premiers Pas',
            started_subtitle: 'Du flash au fonctionnement en minutes',
            step1_title: 'Flash du Firmware',
            step1_desc: 'Alimentez l\'ESP32 via USB. Utilisez le Web Flasher ou les scripts inclus pour installer le firmware.',
            step2_title: 'Connexion WiFi',
            step2_desc: 'Connectez-vous au réseau WiFi "SolarDiverter-Setup" (sans mot de passe) et ouvrez 192.168.4.1',
            step3_title: 'Configurer',
            step3_desc: 'Configurez le WiFi domestique, sélectionnez le compteur d\'énergie et ajustez la puissance nominale.',
            step4_title: 'Dévier l\'Énergie',
            step4_desc: 'Le système surveille automatiquement le surplus solaire et ajuste la puissance PWM en temps réel.',
            tip_reset_title: 'Réinitialisation Usine:',
            tip_reset_desc: 'Appuyez sur le bouton GPIO0 pendant 10 secondes au démarrage pour réinitialiser les paramètres.',
            dl_tag: 'TÉLÉCHARGEMENTS',
            dl_title: 'Prêt à Commencer?',
            dl_subtitle: 'Téléchargez la version qui correspond le mieux à votre projet. Les deux sont gratuites.',
            dl_lite_desc: 'Idéal pour les installations simples avec une seule charge. 1 canal PWM, 1 programmation et mises à jour OTA via l’interface Web.',
            dl_pro_desc: 'Pour les installations avancées multi-charges. 4 canaux PWM, 4 programmations avec température, Modbus Universal JSON et protection de phase. Nécessite activation.',
            dl_feat_1pwm: '1 Canal PWM',
            dl_feat_pwm80: 'PWM Auto : 80% max.',
            dl_feat_1schedule: '1 Programmation (sans temp.)',
            dl_feat_4pwm: '4 Canaux PWM indépendants',
            dl_feat_meters: '25+ Compteurs supportés',
            dl_feat_mqtt: 'MQTT / Home Assistant',
            dl_feat_schedules: '4 Programmations avec temp.',
            dl_feat_temp: 'Capteurs de température',
            dl_feat_webfull: 'Interface Web complète + Wizard',
            dl_feat_ota: 'Mises à jour OTA via WiFi',
            dl_feat_phase: 'Phase Shift entre canaux',
            dl_feat_phase_prot: 'Protection de phase (Shelly 3EM)',
            dl_feat_modbus_adv: 'Modbus avancé (32 registres, 32-bit)',
            dl_feat_modbus_scanner: 'Modbus Scanner (auto-découverte)',
            dl_feat_modbus_json: 'Modbus Universal JSON',
            dl_feat_partition: 'Partition étendue 3 Mo',
            dl_pro_activation: 'Nécessite une clé d’activation (Chip ID)',
            dl_recommended: 'Recommandé',
            dl_btn_lite: 'Télécharger LITE (.zip)',
            dl_btn_pro: 'Télécharger PRO (.zip)',
            dl_btn_docs: 'Voir Documentation',
            contact_tag: 'CONTACT',
            contact_title: 'Contactez-nous',
            contact_subtitle: 'Des questions ou suggestions? Contactez-nous.',
            plugplay_title: 'Vous voulez une solution plug & play pour gérer votre surplus photovoltaïque ?',
            plugplay_sub: 'Nous fournissons des kits assemblés et configurés — prêts à connecter à votre chauffe-eau.',
            plugplay_btn: 'Contactez-nous',
            form_name: 'Nom',
            form_name_ph: 'Votre nom',
            form_email: 'Email',
            form_subject: 'Sujet',
            form_subject_select: '-- Sélectionner --',
            form_subject_support: 'Support Technique',
            form_subject_bug: 'Signaler un Problème',
            form_subject_feature: 'Suggestion',
            form_subject_purchase: 'Achat / Commande',
            form_subject_other: 'Autre',
            form_message: 'Message',
            form_message_ph: 'Écrivez votre message...',
            form_antispam: 'Vérification anti-spam',
            form_antispam_ph: 'Réponse',
            form_submit: 'Envoyer le Message',
            form_sending: 'Envoi en cours...',
            form_success: 'Message envoyé avec succès! Nous répondrons bientôt.',
            form_error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
            form_error_antispam: 'Réponse anti-spam incorrecte.',
            form_error_fields: 'Veuillez remplir tous les champs obligatoires.',
            footer_desc: 'Déviateur Intelligent d\'Énergie Solaire pour ESP32 par AlternativaIOT.',
            footer_license: 'Usage personnel libre. La distribution ou utilisation commerciale est interdite sans autorisation écrite préalable de l’auteur.',
            footer_nav: 'Navigation',
            footer_resources: 'Ressources',
            footer_docs: 'Documentation',
            footer_issues: 'Signaler un Bug',
            footer_contact_title: 'Contact',
            footer_rights: 'Tous droits réservés.',
            donate_title: 'Vous utilisez SolarDiverter et le trouvez rentable ?',
            donate_sub: 'Le firmware est gratuit et développé sur le temps libre. Si vous souhaitez soutenir le projet, pensez à faire un don — tout montant aide à le maintenir.',
            donate_btn: 'Faire un don',
            donate_footer: 'Soutenir le Projet'
        },
        es: {
            ribbon_version: 'Versión 1.0.3 - Marzo 2026 · BETA',
            dl_beta_notice: '⚠️ Versiones en fase <strong>BETA</strong> — probadas pero en desarrollo activo. Use con precaución y reporte errores.',
            nav_features: 'Características',
            nav_hardware: 'Hardware',
            nav_started: 'Instalación',
            nav_downloads: 'Descargas',
            nav_contact: 'Contacto',
            hero_badge: 'Gratuito \u00b7 ESP32',
            hero_subtitle: 'Gestor de excedentes fotovoltaicos que convierte su calentador convencional en un depósito inteligente',
            hero_desc: 'Control automático de cargas resistivas (calentadores de agua) con energía solar excedente. Compatible con +25 inversores/medidores, Home Assistant y MQTT.',
            hero_btn_download: 'Descargar Gratis',
            hero_btn_features: 'Explorar Características',
            stat_inverters: 'INVERSORES',
            stat_version: 'ÚLTIMA VERSIÓN',
            stat_channels: 'CANALES PWM',
            stat_free: 'GRATUITO',
            scroll_text: 'DESPLAZAR',
            features_tag: 'CARACTERÍSTICAS',
            features_title: 'Novedades de la Versión 1.0.3',
            features_subtitle: 'Lanzada en Marzo de 2026',
            feat_pwm_title: '4 Canales PWM',
            feat_pwm_1: 'Control independiente por canal',
            feat_pwm_2: 'Rampa suave configurable',
            feat_pwm_3: 'Protección térmica TRIAC',
            feat_pwm_4: 'Min/Max duty ajustable',
            feat_temp_title: 'Control de Temperatura',
            feat_temp_1: '4 sensores DS18B20',
            feat_temp_2: 'Histéresis ajustable',
            feat_temp_3: 'Activación automática',
            feat_temp_4: 'Protección de TRIAC',
            feat_mqtt_title: 'Home Assistant',
            feat_mqtt_1: 'Integración MQTT completa',
            feat_mqtt_2: 'Topics configurables',
            feat_mqtt_3: 'Comandos remotos',
            feat_mqtt_4: 'Automatizaciones avanzadas',
            feat_tech_title: 'Mejoras Técnicas',
            feat_tech_1: 'Peak Shaving integrado',
            feat_tech_2: 'PWM optimizado',
            feat_tech_3: 'Interfaz Web 6 idiomas',
            feat_tech_4: 'Display OLED soportado',
            feat_wifi_title: 'WiFi Dual',
            feat_wifi_desc: 'Red principal + respaldo, modo AP para configuración, IP estática o DHCP.',
            feat_schedule_title: '4 Programaciones',
            feat_schedule_desc: 'Programaciones con control de temperatura, días de la semana y PWM fijo.',
            feat_safety_title: 'Protecciones',
            feat_safety_desc: 'Corte térmico, timeout de datos, protección de fase y peak shaving automáticos.',
            feat_legionella_title: 'Anti-Legionella',
            feat_legionella_desc: 'Temperatura mínima de seguridad del agua con histéresis configurable.',
            feat_battery_title: 'Prioridad Batería',
            feat_battery_desc: 'Modo prioridad batería para inversores híbridos con umbral configurable.',
            feat_phase_title: 'Protección Trifásica',
            feat_phase_desc: 'Limitación por fase del desviador, potencia máxima por fase (3680W predeterminado).',
            hw_tag: 'COMPATIBILIDAD',
            hw_title: 'Hardware Compatible',
            hw_subtitle: 'Compatible con más de 25 inversores y medidores diferentes',
            hw_mqtt_custom: 'Topics Custom',
            specs_tag: 'ESPECIFICACIONES',
            specs_title: 'Hardware ESP32',
            specs_subtitle: 'Basado en ESP32-WROOM-32 / 32U',
            hw_specs_title: 'Especificaciones',
            hw_mcu: 'Microcontrolador',
            hw_flash: 'Mínimo 4MB',
            hw_pwm: 'Salidas PWM',
            hw_pwm_val: '4 canales independientes',
            hw_relays: 'Relés',
            hw_relays_val: '4 salidas digitales',
            hw_sensors: 'Sensores',
            hw_sensors_val: '4x DS18B20 (OneWire)',
            hw_comms: 'Comunicación',
            hw_pinout_title: 'Pinout GPIO',
            hw_pin_relay: 'Relés 1-4',
            hw_pin_button: 'Botón',
            started_tag: 'INSTALACIÓN',
            started_title: 'Primeros Pasos',
            started_subtitle: 'Del flash al funcionamiento en minutos',
            step1_title: 'Flash del Firmware',
            step1_desc: 'Alimente el ESP32 via USB. Use el Web Flasher o los scripts incluidos para instalar el firmware.',
            step2_title: 'Conectar al WiFi',
            step2_desc: 'Conéctese a la red WiFi "SolarDiverter-Setup" (sin contraseña) y abra 192.168.4.1',
            step3_title: 'Configurar',
            step3_desc: 'Configure la red WiFi doméstica, seleccione el medidor de energía y ajuste la potencia nominal.',
            step4_title: 'Desviar Energía',
            step4_desc: 'El sistema monitoriza automáticamente el excedente solar y ajusta la potencia PWM en tiempo real.',
            tip_reset_title: 'Reset de Fábrica:',
            tip_reset_desc: 'Presione el botón GPIO0 durante 10 segundos al inicio para restaurar los valores de fábrica.',
            dl_tag: 'DESCARGAS',
            dl_title: '¿Listo para Empezar?',
            dl_subtitle: 'Descargue la versión que mejor se adapte a su proyecto. Ambas son gratuitas.',
            dl_lite_desc: 'Ideal para instalaciones simples con una sola carga. 1 canal PWM, 1 programación y actualizaciones OTA vía la interfaz Web.',
            dl_pro_desc: 'Para instalaciones multi-carga avanzadas. 4 canales PWM, 4 programaciones con temperatura, Modbus Universal JSON y protección de fase. Requiere activación.',
            dl_feat_1pwm: '1 Canal PWM',
            dl_feat_pwm80: 'PWM Auto: 80% máx.',
            dl_feat_1schedule: '1 Programación (sin temp.)',
            dl_feat_4pwm: '4 Canales PWM independientes',
            dl_feat_meters: '25+ Medidores soportados',
            dl_feat_mqtt: 'MQTT / Home Assistant',
            dl_feat_schedules: '4 Programaciones con temp.',
            dl_feat_temp: 'Sensores de temperatura',
            dl_feat_webfull: 'Interfaz Web completa + Wizard',
            dl_feat_ota: 'Actualizaciones OTA vía WiFi',
            dl_feat_phase: 'Phase Shift entre canales',
            dl_feat_phase_prot: 'Protección de fase (Shelly 3EM)',
            dl_feat_modbus_adv: 'Modbus avanzado (32 registros, 32-bit)',
            dl_feat_modbus_scanner: 'Modbus Scanner (auto-descubrimiento)',
            dl_feat_modbus_json: 'Modbus Universal JSON',
            dl_feat_partition: 'Partición expandida 3MB',
            dl_pro_activation: 'Requiere clave de activación (Chip ID)',
            dl_recommended: 'Recomendado',
            dl_btn_lite: 'Descargar LITE (.zip)',
            dl_btn_pro: 'Descargar PRO (.zip)',
            dl_btn_docs: 'Ver Documentación',
            contact_tag: 'CONTACTO',
            contact_title: 'Contáctenos',
            contact_subtitle: '¿Tiene preguntas o sugerencias? Contáctenos.',
            plugplay_title: '¿Quiere una solución plug & play para gestionar su excedente fotovoltaico?',
            plugplay_sub: 'Suministramos kits montados y configurados — listos para conectar a su calentador de agua.',
            plugplay_btn: 'Contáctenos',
            form_name: 'Nombre',
            form_name_ph: 'Su nombre',
            form_email: 'Email',
            form_subject: 'Asunto',
            form_subject_select: '-- Seleccionar --',
            form_subject_support: 'Soporte Técnico',
            form_subject_bug: 'Reportar Problema',
            form_subject_feature: 'Sugerencia',
            form_subject_purchase: 'Compra / Pedido',
            form_subject_other: 'Otro',
            form_message: 'Mensaje',
            form_message_ph: 'Escriba su mensaje...',
            form_antispam: 'Verificación anti-spam',
            form_antispam_ph: 'Respuesta',
            form_submit: 'Enviar Mensaje',
            form_sending: 'Enviando...',
            form_success: '¡Mensaje enviado con éxito! Responderemos brevemente.',
            form_error: 'Error al enviar. Por favor intente de nuevo.',
            form_error_antispam: 'Respuesta anti-spam incorrecta.',
            form_error_fields: 'Por favor complete todos los campos obligatorios.',
            footer_desc: 'Desviador Inteligente de Energía Solar para ESP32 por AlternativaIOT.',
            footer_license: 'Uso personal libre. La distribución o uso comercial está prohibido sin autorización previa por escrito del autor.',
            footer_nav: 'Navegación',
            footer_resources: 'Recursos',
            footer_docs: 'Documentación',
            footer_issues: 'Reportar Bug',
            footer_contact_title: 'Contacto',
            footer_rights: 'Todos los derechos reservados.',
            donate_title: '¿Usas SolarDiverter y lo encuentras rentable?',
            donate_sub: 'El firmware es gratuito y desarrollado en tiempo libre. Si deseas apoyar el proyecto, considera hacer una donación — cualquier cantidad ayuda a mantenerlo.',
            donate_btn: 'Donar',
            donate_footer: 'Apoyar el Proyecto'
        }
    };

    /* ==========================================================================
       LANGUAGE SWITCHER
       ========================================================================== */
    var currentLang = localStorage.getItem('sd_lang') || 'pt';

    function applyTranslations(lang) {
        var t = translations[lang];
        if (!t) return;
        currentLang = lang;
        localStorage.setItem('sd_lang', lang);
        document.documentElement.lang = lang;

        // Text content
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // skip, handled by placeholder
                } else {
                    el.innerHTML = t[key];
                }
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Active lang button
        document.querySelectorAll('.sd-lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function initLanguageSwitcher() {
        document.querySelectorAll('.sd-lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyTranslations(this.getAttribute('data-lang'));
                generateMathChallenge();
            });
        });
        applyTranslations(currentLang);
    }

    /* ==========================================================================
       NAVBAR
       ========================================================================== */
    function initNavbar() {
        var navbar = document.getElementById('sd-navbar');
        var toggle = document.getElementById('sd-nav-toggle');
        var links = document.getElementById('sd-nav-links');

        // Scroll effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                navbar.classList.add('sd-navbar-scrolled');
            } else {
                navbar.classList.remove('sd-navbar-scrolled');
            }
        });

        // Mobile toggle
        if (toggle && links) {
            toggle.addEventListener('click', function () {
                links.classList.toggle('sd-nav-open');
            });

            // Close on link click
            links.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', function () {
                    links.classList.remove('sd-nav-open');
                });
            });
        }
    }

    /* ==========================================================================
       BACK TO TOP
       ========================================================================== */
    function initBackToTop() {
        var btn = document.getElementById('sd-back-to-top');
        if (!btn) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                btn.classList.add('sd-visible');
            } else {
                btn.classList.remove('sd-visible');
            }
        });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       SCROLL ANIMATIONS
       ========================================================================== */
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sd-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.sd-feature-card, .sd-hw-card, .sd-step-card, .sd-dl-card, .sd-spec-card').forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ==========================================================================
       ANTI-SPAM MATH CHALLENGE
       ========================================================================== */
    var mathAnswer = 0;

    function generateMathChallenge() {
        var a = Math.floor(Math.random() * 10) + 1;
        var b = Math.floor(Math.random() * 10) + 1;
        mathAnswer = a + b;
        var questionEl = document.getElementById('sd-math-question-text');
        if (questionEl) {
            questionEl.textContent = a + ' + ' + b + ' = ?';
        }
    }

    /* ==========================================================================
       CONTACT FORM
       ========================================================================== */
    function initContactForm() {
        var form = document.getElementById('sd-contact-form');
        if (!form) return;

        // Set timestamp
        var tsField = document.getElementById('sd-timestamp');
        if (tsField) tsField.value = Date.now().toString();

        generateMathChallenge();

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var t = translations[currentLang] || translations.pt;
            var statusEl = document.getElementById('sd-form-status');
            var submitBtn = document.getElementById('sd-submit-btn');

            // --- Honeypot #1: campo _gotcha (Formspree) ---
            // Se preenchido por um bot, bloqueia silenciosamente.
            var honeypot = document.getElementById('sd_website');
            if (honeypot && honeypot.value) return;

            // --- Honeypot #2: campo website_url (validação adicional) ---
            // Invisível para humanos; bots costumam preencher todos os campos.
            // Se NÃO estiver vazio → envio bloqueado.
            // Se estiver vazio → prosseguir normalmente.
            var honeypot2 = document.getElementById('sd_website_url');
            if (honeypot2 && honeypot2.value) return;

            // Timestamp check (must be > 3 seconds)
            var ts = parseInt(tsField.value, 10);
            if (Date.now() - ts < 3000) return;

            // Required fields
            var name = document.getElementById('sd_name').value.trim();
            var email = document.getElementById('sd_email').value.trim();
            var subject = document.getElementById('sd_subject').value;
            var message = document.getElementById('sd_message').value.trim();
            if (!name || !email || !subject || !message) {
                showStatus(statusEl, t.form_error_fields, 'error');
                return;
            }

            // Email validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showStatus(statusEl, t.form_error_fields, 'error');
                return;
            }

            // Anti-spam math check
            var answer = parseInt(document.getElementById('sd_antispam').value, 10);
            if (answer !== mathAnswer) {
                showStatus(statusEl, t.form_error_antispam, 'error');
                generateMathChallenge();
                return;
            }

            // Send via Formspree
            submitBtn.disabled = true;
            showStatus(statusEl, t.form_sending, 'sending');

            fetch(WEB3FORMS_URL, {
                method: 'POST',
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: name,
                    email: email,
                    subject: 'SolarDiverter: ' + subject,
                    message: message
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success === 'true' || data.success === true) {
                    showStatus(statusEl, t.form_success, 'success');
                    form.reset();
                    generateMathChallenge();
                    if (tsField) tsField.value = Date.now().toString();
                } else {
                    showStatus(statusEl, t.form_error, 'error');
                }
                submitBtn.disabled = false;
            })
            .catch(function () {
                showStatus(statusEl, t.form_error, 'error');
                submitBtn.disabled = false;
            });
        });
    }

    function showStatus(el, msg, type) {
        if (!el) return;
        el.style.display = 'block';
        el.textContent = msg;
        el.className = 'sd-form-status sd-status-' + type;
        if (type === 'success' || type === 'error') {
            setTimeout(function () { el.style.display = 'none'; }, 6000);
        }
    }

    /* ==========================================================================
       FOOTER YEAR
       ========================================================================== */
    function initYear() {
        var el = document.getElementById('sd-year');
        if (el) el.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       INIT
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', function () {
        initLanguageSwitcher();
        initNavbar();
        initBackToTop();
        initScrollAnimations();
        initContactForm();
        initYear();
    });
})();
