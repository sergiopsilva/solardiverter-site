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
            ribbon_version: 'Versão 1.1.1 - Abril 2026 · BETA',
            dl_beta_notice: '⚠️ Versões em fase <strong>BETA</strong> — testadas mas em desenvolvimento ativo. Use com precaução e reporte erros.',
            nav_features: 'Funcionalidades',
            nav_hardware: 'Hardware',
            nav_started: 'Instalação',
            nav_downloads: 'Transferências',
            nav_contact: 'Contacto',
            hero_badge: 'Uso Livre \u00b7 ESP32',
            hero_subtitle: 'Mais do que um simples desvio de energia solar',
            hero_desc: 'Controlo inteligente da sua energia — desde o excedente solar até ao aquecimento eficiente de água por horários e tarifários',
            hero_learn_more: 'Aprende mais aqui:',
            hero_btn_download: 'Transferir Grátis',
            hero_btn_features: 'Explorar Funcionalidades',
            stat_inverters: 'INVERSORES',
            stat_version: 'ÚLTIMA VERSÃO',
            stat_channels: 'CANAIS PWM',
            stat_free: 'GRATUITO',
            scroll_text: 'SCROLL',
            about_tag: 'O QUE É O SOLARDIVERTER?',
            about_title: 'Mais do que um simples desvio de energia solar',
            about_subtitle: 'Controlo inteligente da sua energia — desde o excedente solar até ao aquecimento eficiente de água por horários e tarifários',
            about_solar_title: 'Controlo do Excedente Solar',
            about_solar_text: 'Deteta em tempo real a energia solar excedente e desvia-a para cargas controláveis (resistência de termoacumulador, termossifão, resistências de apoio a bombas de calor, aquecedores a óleo), maximizando o autoconsumo e evitando a injeção na rede.',
            about_temp_title: 'Aquecimento por Horários e Temperatura',
            about_temp_text: 'Com sonda de temperatura, o SolarDiverter monitoriza e controla o aquecimento da água com base em horários e dias definidos. Define temperaturas mínimas e máximas e garante conforto sem desperdício.',
            about_tariff_title: 'Gestão Inteligente por Tarifário',
            about_tariff_text: 'Suporta tarifários bi-horários e tri-horários. Configure o seu sistema de acordo com o período tarifário mais económico e ativa automaticamente o aquecimento na hora certa — solar quando possível, elétrico na tarifa mais baixa.',

            // About — "Why is it different"
            diff_tag: 'PORQUE É DIFERENTE',
            diff_title: 'Não é apenas mais um gestor de excedentes',
            diff_sub: 'Transforma cada watt excedente em energia útil — com modulação dinâmica, segura e inteligente. Muito além do simples <em>liga / desliga</em>.',
            diff_pwm_title: 'Modulação PWM proporcional',
            diff_pwm_desc: 'Ajusta a potência entregue à carga em tempo real, proporcional ao excedente solar disponível. Sem desperdício, sem injeção na rede.',
            diff_temp_title: 'Controlo inteligente por temperatura',
            diff_temp_desc: 'Sondas DS18B20 medem a temperatura da água e do TRIAC. Aquece até ao alvo, protege o hardware e evita ciclos desnecessários.',
            diff_sched_title: 'Agendamentos por tarifário Bi/Tri',
            diff_sched_desc: 'Programações otimizadas para tarifários bi e tri-horários: solar quando há sol, rede só na tarifa vazio. Poupança real na fatura.',
            diff_boost_title: 'Modo Boost temporizado',
            diff_boost_desc: 'Aquecimento forçado por tempo definido a partir da Web UI ou do Home Assistant — útil em dias nublados ou consumo extra.',

            // License — feature matrix
            matrix_title: 'Funcionalidades por estado de ativação',
            matrix_intro: 'O firmware funciona em três estados — antes da ativação (modo restrito), <strong>LITE ativada</strong> (gratuita, mediante pedido por email) e <strong>PRO ativada</strong> (paga, chave por chipID). A tabela abaixo resume o que muda em cada estado.',
            matrix_th_feature: 'Funcionalidade',
            matrix_th_unactivated: 'Não ativada',
            matrix_th_activated: 'ativada',
            matrix_row_pwm_ch: 'Canais PWM físicos',
            matrix_row_pwm_man: 'PWM manual (slider)',
            matrix_row_pwm_auto: 'PWM automático (excedente)',
            matrix_row_sched: 'Agendamentos horários',
            matrix_row_tariff: 'Tarifário Bi/Tri-horário',
            matrix_row_temp_water: 'Sensor água + proteção TRIAC',
            matrix_row_temp_env: 'Sensor ambiente / extra',
            matrix_row_modbus: 'Modbus + Scanner auto-discovery',
            matrix_row_mqtt: 'MQTT / Home Assistant',
            matrix_row_boost: 'Boost temporizado',
            matrix_yes: 'Sim',
            matrix_no: 'Não',
            matrix_partial: 'Parcial',
            matrix_full: 'Completo',
            matrix_limited: 'Limitados',
            matrix_foot: 'A versão <strong>LITE</strong> é gratuita mas requer ativação por chave digital — basta pedir através do <a href="#contact">formulário de contacto</a>. A chave <strong>PRO</strong> é gerada com base no Chip ID do ESP32 e válida apenas para esse dispositivo.',
            features_tag: 'FUNCIONALIDADES',
            features_title: 'Novidades da Versão 1.1.1',
            features_subtitle: 'Lançada em Abril de 2026',
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
            hw_subtitle: 'Compatível com mais de 27 inversores e medidores diferentes',
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
            dl_feat_pwm80: 'PWM Auto limitado',
            dl_feat_1schedule: '1 Agendamento (sem temp.)',
            dl_feat_4pwm: '4 Canais PWM independentes',
            dl_feat_meters: '27+ Medidores suportados',
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
            donate_footer: 'Apoiar o Projeto',
            nav_webui: 'WebUI',
            webui_tag: 'INTERFACE WEB',
            webui_title: 'Interface Web v1.1.1',
            webui_subtitle: 'Configuração e monitorização completa a partir do browser — sem apps, sem cloud.',
            webui_tab_dashboard: 'Status',
            webui_tab_config: 'Medidores',
            webui_tab_schedules: 'Potência PWM',
            webui_tab_mqtt: 'Agendamentos',
            webui_tab_modbus: 'Temperatura',
            webui_tab_network: 'Rede',
            webui_placeholder: 'Screenshots em breve',
            webui_cap_dashboard: 'Estado do sistema · fluxo de energia · gráficos históricos · modo BOOST',
            webui_cap_config: 'Seleção de marca/modelo · 27+ inversores · Modbus Scanner (PRO)',
            webui_cap_schedules: 'Modo AUTO/MANUAL/BOOST · 4 canais PWM independentes · prioridade bateria',
            webui_cap_mqtt: '4 agendamentos semanais · bandas de temperatura · tarifário horário',
            webui_cap_modbus: '4 sondas DS18B20 · proteção TRIAC · anti-legionella · termostato saturado',
            webui_cap_network: 'WiFi principal + rede backup · DHCP ou IP estático · NTP · fuso horário',
            nav_license: 'Licenciamento',
            lic_tag: 'LICENCIAMENTO',
            lic_title: 'Modelo de Licenciamento',
            lic_subtitle: 'Uso pessoal livre \u2014 desenvolvimento sustent\u00e1vel',
            lic_lite_title: 'SolarDiverter Lite',
            lic_lite_price: 'Gratuito',
            lic_lite_desc: 'Vers\u00e3o gratuita destinada exclusivamente a uso pessoal e n\u00e3o comercial. Inclui o firmware completo com algumas funcionalidades avan\u00e7adas desativadas.',
            lic_lite_f1: 'Firmware completo com funcionalidades limitadas',
            lic_lite_f2: 'Ativa\u00e7\u00e3o gratuita por email',
            lic_lite_f3: 'Uso pessoal e privado',
            lic_lite_f4: 'Redistribui\u00e7\u00e3o proibida',
            lic_lite_f5: 'Sem suporte obrigat\u00f3rio',
            lic_lite_unl_title: 'Ap\u00f3s ativa\u00e7\u00e3o gratuita, desbloqueia:',
            lic_lite_unl_1: 'Limites removidos: mais sondas de temperatura e PWM sem restri\u00e7\u00f5es',
            lic_lite_unl_2: 'At\u00e9 2 agendamentos com sele\u00e7\u00e3o de dias da semana',
            lic_lite_unl_3: 'MQTT com HA Discovery e controlos no Home Assistant',
            lic_lite_activation: 'Ativa\u00e7\u00e3o gratuita mediante pedido direto por email',
            lic_pro_title: 'SolarDiverter Pro',
            lic_pro_price: 'Licen\u00e7a paga',
            lic_pro_desc: 'Desbloqueia todas as funcionalidades avan\u00e7adas. Licen\u00e7a digital associada ao chipID \u2014 n\u00e3o transfer\u00edvel.',
            lic_pro_f1: 'Controlo de pot\u00eancia inteligente e adaptativo',
            lic_pro_f2: 'Fun\u00e7\u00f5es avan\u00e7adas por tarif\u00e1rio bi/tri-hor\u00e1rio (poupan\u00e7a na fatura el\u00e9trica)',
            lic_pro_f3: 'Gr\u00e1ficos de pot\u00eancia e energia em tempo real',
            lic_pro_f4: 'MQTT com HA Discovery e controlos no Home Assistant',
            lic_pro_ota_note: 'OTA n\u00e3o dispon\u00edvel (firmware excede limite da parti\u00e7\u00e3o)',
            lic_pro_a_title: 'Hardware plug\u2011and\u2011play',
            lic_pro_a_desc: 'Dispositivo enviado com licen\u00e7a Pro j\u00e1 ativada. Sem necessidade de ativa\u00e7\u00e3o.',
            lic_pro_b_title: 'Kit DIY com ESP inclu\u00eddo',
            lic_pro_b_desc: 'Kit com ESP32 identificado. Chave gerada antes do envio \u2014 firmware arranca em modo Pro.',
            lic_pro_c_title: 'Ativa\u00e7\u00e3o em hardware pr\u00f3prio',
            lic_pro_c_desc: 'Forne\u00e7a o chipID do seu ESP32 e adquira a chave Pro. Licen\u00e7a v\u00e1lida para um \u00fanico dispositivo.',
            lic_key_title: 'Sobre a Chave Pro',
            lic_key_1: 'Digital e associada a um chipID \u00fanico',
            lic_key_2: 'N\u00e3o pode ser transferida para outro dispositivo',
            lic_key_3: 'N\u00e3o pode ser copiada, partilhada ou redistribu\u00edda',
            lic_key_4: 'Tentativas de engenharia reversa ou bypass s\u00e3o proibidas',
            lic_table_title: 'Resumo do Modelo de Licenciamento',
            lic_th_version: 'Vers\u00e3o',
            lic_th_price: 'Pre\u00e7o',
            lic_th_activation: 'Ativa\u00e7\u00e3o',
            lic_th_use: 'Uso',
            lic_th_redistrib: 'Redistribui\u00e7\u00e3o',
            lic_row_lite_price: 'Gratuita',
            lic_row_lite_act: 'Por email',
            lic_row_use: 'Pessoal',
            lic_row_no: 'Proibida',
            lic_row_pro_price: 'Paga',
            lic_row_pro_act_hw: 'J\u00e1 ativada',
            lic_row_pro_hw: 'hardware',
            lic_row_pro_kit: 'kit',
            lic_row_pro_key: 'chave',
            lic_row_pro_act_key: 'Por chipID',
            lic_terms: 'O SolarDiverter \u00e9 disponibilizado para uso pessoal e privado. Qualquer forma de utiliza\u00e7\u00e3o comercial, revenda, redistribui\u00e7\u00e3o, modifica\u00e7\u00e3o ou integra\u00e7\u00e3o em produtos destinados \u00e0 venda \u00e9 proibida sem autoriza\u00e7\u00e3o pr\u00e9via por escrito.',
            nav_screenshots: 'Galeria',
            screenshots_tag: 'CAPTURAS DE ECR\u00c3',
            screenshots_title: 'Galeria de Funcionalidades',
            screenshots_subtitle: 'Explore todas as funcionalidades do SolarDiverter atrav\u00e9s da interface Web.',
            gallery_group_monitoring: 'Monitoriza\u00e7\u00e3o',
            gallery_group_power: 'Configura\u00e7\u00e3o de Pot\u00eancia',
            gallery_group_modbus: 'Modbus &amp; Fonte de Dados',
            gallery_group_mqtt: 'MQTT, Home Assistant &amp; Rede',
            gallery_group_system: 'Sistema &amp; Configura\u00e7\u00e3o',
            gallery_cap_status_graficos: 'Status e gr\u00e1ficos de energia e consumo',
            gallery_cap_visao_boost: 'Vis\u00e3o do sistema e modo Boost temporizado (PRO)',
            gallery_cap_boost_temporizado: 'Modo Boost temporizado na vers\u00e3o Pro',
            gallery_cap_4canais_pwm: '4 canais PWM independentes (PRO)',
            gallery_cap_agendamentos_tarifarios: 'At\u00e9 4 agendamentos hor\u00e1rios e fun\u00e7\u00f5es para tarif\u00e1rios (PRO)',
            gallery_cap_config_tarifarios: 'Configura\u00e7\u00e3o de tarif\u00e1rios de energia',
            gallery_cap_fonte_dados: 'Sele\u00e7\u00e3o da fonte de dados',
            gallery_cap_modbus_config: 'Configura\u00e7\u00f5es ModBus na vers\u00e3o Pro com Modbus Scan',
            gallery_cap_modbus_scan: 'Modbus Scan \u2014 auto-discovery de dispositivos',
            gallery_cap_mqtt: 'Configura\u00e7\u00e3o MQTT',
            gallery_cap_mqtt_ha: 'MQTT Discovery e comandos no Home Assistant',
            gallery_cap_wifi_dual: 'Duas redes WiFi suportadas, uma de fallback',
            gallery_cap_temperaturas_seguranca: 'Temperaturas de seguran\u00e7a \u2014 \u00e1gua e TRIAC (requer sonda junto ao TRIAC)',
            gallery_cap_guardar_config: 'Guardar e upload de configurações',
            gallery_cap_ha_comandos: 'Comandos no Home Assistant',
            gallery_cap_idioma: 'Seleção de idioma da interface'
        },
        en: {
            ribbon_version: 'Version 1.1.1 - April 2026 · BETA',
            dl_beta_notice: '⚠️ Beta versions — tested but in active development. Use with caution and report any issues.',
            nav_features: 'Features',
            nav_hardware: 'Hardware',
            nav_started: 'Getting Started',
            nav_downloads: 'Downloads',
            nav_contact: 'Contact',
            hero_badge: 'Free \u00b7 ESP32',
            hero_subtitle: 'More than a simple solar energy diverter',
            hero_desc: 'Intelligent control of your energy — from solar surplus to efficient water heating by schedules and tariffs',
            hero_learn_more: 'Learn more here:',
            hero_btn_download: 'Download Free',
            hero_btn_features: 'Explore Features',
            stat_inverters: 'INVERTERS',
            stat_version: 'LATEST VERSION',
            stat_channels: 'PWM CHANNELS',
            stat_free: 'FREE',
            scroll_text: 'SCROLL',
            about_tag: 'WHAT IS SOLARDIVERTER?',
            about_title: 'More than just a solar energy diverter',
            about_subtitle: 'Intelligent energy control — from surplus solar power to efficient water heating by schedules and tariffs',
            about_solar_title: 'Surplus Solar Control',
            about_solar_text: 'Detects surplus solar energy in real time and diverts it to controllable loads (immersion heater, thermosiphon, heat pump backup heaters, oil-filled radiators), maximising self-consumption and avoiding grid injection.',
            about_temp_title: 'Heating by Schedule and Temperature',
            about_temp_text: 'With a temperature probe, SolarDiverter monitors and controls water heating based on defined schedules and days. Set minimum and maximum temperatures and ensure comfort without waste.',
            about_tariff_title: 'Smart Tariff Management',
            about_tariff_text: 'Supports dual-rate and tri-rate tariffs. Configure your system according to the most economical tariff period and automatically activate heating at the right time — solar when possible, electric at the lowest rate.',

            // About — "Why is it different"
            diff_tag: 'WHY IT IS DIFFERENT',
            diff_title: 'Not just another surplus manager',
            diff_sub: 'Turns every surplus watt into useful energy — with dynamic, safe and smart modulation. Far beyond simple <em>on / off</em> switching.',
            diff_pwm_title: 'Proportional PWM modulation',
            diff_pwm_desc: 'Adjusts the power delivered to the load in real time, proportional to the available solar surplus. No waste, no grid injection.',
            diff_temp_title: 'Smart temperature-aware control',
            diff_temp_desc: 'DS18B20 probes measure water and TRIAC temperature. Heats to target, protects the hardware and avoids unnecessary cycles.',
            diff_sched_title: 'Bi/Tri-hourly tariff scheduling',
            diff_sched_desc: 'Schedules optimised for dual and tri-rate tariffs: solar when the sun shines, grid only during off-peak. Real savings on the bill.',
            diff_boost_title: 'Timed Boost mode',
            diff_boost_desc: 'Forced heating for a defined time from the Web UI or Home Assistant — useful on cloudy days or for extra consumption.',

            // License — feature matrix
            matrix_title: 'Features by activation state',
            matrix_intro: 'The firmware operates in three states — before activation (restricted mode), <strong>LITE activated</strong> (free, by email request) and <strong>PRO activated</strong> (paid, key by chipID). The table below summarises what changes in each state.',
            matrix_th_feature: 'Feature',
            matrix_th_unactivated: 'Not activated',
            matrix_th_activated: 'activated',
            matrix_row_pwm_ch: 'Physical PWM channels',
            matrix_row_pwm_man: 'Manual PWM (slider)',
            matrix_row_pwm_auto: 'Automatic PWM (surplus)',
            matrix_row_sched: 'Hourly schedules',
            matrix_row_tariff: 'Bi/Tri-hourly tariff',
            matrix_row_temp_water: 'Water sensor + TRIAC protection',
            matrix_row_temp_env: 'Ambient / extra sensor',
            matrix_row_modbus: 'Modbus + auto-discovery scanner',
            matrix_row_mqtt: 'MQTT / Home Assistant',
            matrix_row_boost: 'Timed Boost',
            matrix_yes: 'Yes',
            matrix_no: 'No',
            matrix_partial: 'Partial',
            matrix_full: 'Full',
            matrix_limited: 'Limited',
            matrix_foot: 'The <strong>LITE</strong> version is free but requires activation via a digital key — just request it through the <a href="#contact">contact form</a>. The <strong>PRO</strong> key is generated from the ESP32 Chip ID and valid only for that device.',
            features_tag: 'FEATURES',
            features_title: 'What\'s New in Version 1.1.1',
            features_subtitle: 'Released April 2026',
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
            hw_subtitle: 'Compatible with over 27 different inverters and meters',
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
            dl_feat_pwm80: 'Auto PWM limited',
            dl_feat_1schedule: '1 Schedule (no temp. control)',
            dl_feat_4pwm: '4 Independent PWM Channels',
            dl_feat_meters: '27+ Meters supported',
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
            donate_footer: 'Support the Project',
            nav_webui: 'WebUI',
            webui_tag: 'WEB INTERFACE',
            webui_title: 'Web Interface v1.1.1',
            webui_subtitle: 'Full configuration and monitoring from the browser — no apps, no cloud.',
            webui_tab_dashboard: 'Status',
            webui_tab_config: 'Meters',
            webui_tab_schedules: 'Power Settings',
            webui_tab_mqtt: 'Schedules',
            webui_tab_modbus: 'Temperature',
            webui_tab_network: 'Network',
            webui_placeholder: 'Screenshots coming soon',
            webui_cap_dashboard: 'System status · energy flow · historical charts · BOOST mode',
            webui_cap_config: 'Brand/model selector · 27+ inverters · Modbus Scanner (PRO)',
            webui_cap_schedules: 'AUTO/MANUAL/BOOST · 4 independent PWM channels · battery priority',
            webui_cap_mqtt: '4 weekly schedules · temperature bands · time-of-use tariff',
            webui_cap_modbus: '4 DS18B20 probes · TRIAC protection · anti-legionella · saturated thermostat',
            webui_cap_network: 'Main + backup WiFi · DHCP or static IP · NTP · timezone',
            nav_license: 'Licence',
            lic_tag: 'LICENSING',
            lic_title: 'Licensing Model',
            lic_subtitle: 'Free personal use \u2014 sustainable development',
            lic_lite_title: 'SolarDiverter Lite',
            lic_lite_price: 'Free',
            lic_lite_desc: 'Free version for personal, non-commercial use only. Includes the full firmware with some advanced features disabled.',
            lic_lite_f1: 'Full firmware with limited features',
            lic_lite_f2: 'Free activation by email',
            lic_lite_f3: 'Personal and private use',
            lic_lite_f4: 'Redistribution prohibited',
            lic_lite_f5: 'No mandatory support',
            lic_lite_unl_title: 'Free activation unlocks:',
            lic_lite_unl_1: 'Limits removed: more temperature probes and unrestricted PWM',
            lic_lite_unl_2: 'Up to 2 schedules with weekday selection',
            lic_lite_unl_3: 'MQTT with HA Discovery and controls in Home Assistant',
            lic_lite_activation: 'Free activation upon direct email request',
            lic_pro_title: 'SolarDiverter Pro',
            lic_pro_price: 'Paid licence',
            lic_pro_desc: 'Unlocks all advanced features. Digital licence tied to the device chipID \u2014 non-transferable.',
            lic_pro_f1: 'Intelligent and adaptive power control',
            lic_pro_f2: 'Advanced time-of-use tariff functions \u2014 bi/tri-hourly savings on electricity bill',
            lic_pro_f3: 'Real-time power and energy graphs',
            lic_pro_f4: 'MQTT with HA Discovery and controls in Home Assistant',
            lic_pro_ota_note: 'OTA not available (firmware exceeds OTA partition limit)',
            lic_pro_a_title: 'Plug\u2011and\u2011play hardware',
            lic_pro_a_desc: 'Device shipped with Pro licence already activated. No user activation required.',
            lic_pro_b_title: 'DIY kit with ESP included',
            lic_pro_b_desc: 'Kit with identified ESP32. Key generated before shipping \u2014 firmware boots in Pro mode.',
            lic_pro_c_title: 'Activation on own hardware',
            lic_pro_c_desc: 'Provide your ESP32 chipID and purchase the Pro key. Licence valid for a single device.',
            lic_key_title: 'About the Pro Key',
            lic_key_1: 'Digital and tied to a unique chipID',
            lic_key_2: 'Cannot be transferred to another device',
            lic_key_3: 'Cannot be copied, shared or redistributed',
            lic_key_4: 'Reverse engineering or bypass attempts are prohibited',
            lic_table_title: 'Licensing Model Summary',
            lic_th_version: 'Version',
            lic_th_price: 'Price',
            lic_th_activation: 'Activation',
            lic_th_use: 'Use',
            lic_th_redistrib: 'Redistribution',
            lic_row_lite_price: 'Free',
            lic_row_lite_act: 'By email',
            lic_row_use: 'Personal',
            lic_row_no: 'Prohibited',
            lic_row_pro_price: 'Paid',
            lic_row_pro_act_hw: 'Pre-activated',
            lic_row_pro_hw: 'hardware',
            lic_row_pro_kit: 'kit',
            lic_row_pro_key: 'key',
            lic_row_pro_act_key: 'By chipID',
            lic_terms: 'SolarDiverter is provided for personal and private use. Any commercial use, resale, redistribution, modification or integration into products for sale is prohibited without prior written authorisation.',
            nav_screenshots: 'Gallery',
            screenshots_tag: 'SCREENSHOTS',
            screenshots_title: 'Feature Gallery',
            screenshots_subtitle: 'Explore all SolarDiverter features through the Web interface.',
            gallery_group_monitoring: 'Monitoring',
            gallery_group_power: 'Power Configuration',
            gallery_group_modbus: 'Modbus &amp; Data Source',
            gallery_group_mqtt: 'MQTT, Home Assistant &amp; Network',
            gallery_group_system: 'System &amp; Settings',
            gallery_cap_status_graficos: 'Status and energy/consumption charts',
            gallery_cap_visao_boost: 'System overview and timed Boost mode (PRO)',
            gallery_cap_boost_temporizado: 'Timed Boost mode in Pro version',
            gallery_cap_4canais_pwm: '4 independent PWM channels (PRO)',
            gallery_cap_agendamentos_tarifarios: 'Up to 4 time schedules and tariff functions (PRO)',
            gallery_cap_config_tarifarios: 'Energy tariff configuration',
            gallery_cap_fonte_dados: 'Data source selection',
            gallery_cap_modbus_config: 'ModBus settings in Pro version with Modbus Scan',
            gallery_cap_modbus_scan: 'Modbus Scan \u2014 device auto-discovery',
            gallery_cap_mqtt: 'MQTT Configuration',
            gallery_cap_mqtt_ha: 'MQTT Discovery and commands in Home Assistant',
            gallery_cap_wifi_dual: 'Two WiFi networks supported, one as fallback',
            gallery_cap_temperaturas_seguranca: 'Safety temperatures \u2014 water and TRIAC (probe near TRIAC required)',
            gallery_cap_guardar_config: 'Save and upload settings',
            gallery_cap_ha_comandos: 'Commands in Home Assistant',
            gallery_cap_idioma: 'Interface language selection'
        },
        fr: {
            ribbon_version: 'Version 1.1.1 - Avril 2026 · BETA',
            dl_beta_notice: '⚠️ Versions en phase <strong>BETA</strong> — testées mais en développement actif. À utiliser avec précaution, signalez les erreurs.',
            nav_features: 'Fonctionnalités',
            nav_hardware: 'Matériel',
            nav_started: 'Installation',
            nav_downloads: 'Téléchargements',
            nav_contact: 'Contact',
            hero_badge: 'Gratuit \u00b7 ESP32',
            hero_subtitle: 'Plus qu’un simple déviateur d’énergie solaire',
            hero_desc: 'Contrôle intelligent de votre énergie — des surplus solaires au chauffage efficace de l’eau par horaires et tarifs',
            hero_learn_more: 'En savoir plus ici :',
            hero_btn_download: 'Télécharger Gratuit',
            hero_btn_features: 'Explorer les Fonctionnalités',
            stat_inverters: 'ONDULEURS',
            stat_version: 'DERNIÈRE VERSION',
            stat_channels: 'CANAUX PWM',
            stat_free: 'GRATUIT',
            scroll_text: 'DÉFILER',
            about_tag: 'QU\'EST-CE QUE SOLARDIVERTER ?',
            about_title: 'Plus qu\'un simple déviateur d\'énergie solaire',
            about_subtitle: 'Contrôle intelligent de votre énergie — du surplus solaire au chauffage efficace de l\'eau par horaires et tarifs',
            about_solar_title: 'Contrôle du Surplus Solaire',
            about_solar_text: 'Détecte en temps réel l\'énergie solaire excédentaire et la dévie vers des charges contrôlables (résistance de cumulus, thermosiphon, résistances d\'appoint pour pompes à chaleur, radiateurs à huile), maximisant l\'autoconsommation et évitant l\'injection réseau.',
            about_temp_title: 'Chauffage par Horaires et Température',
            about_temp_text: 'Avec une sonde de température, SolarDiverter surveille et contrôle le chauffage de l\'eau selon des horaires et jours définis. Définissez des températures minimales et maximales et garantissez le confort sans gaspillage.',
            about_tariff_title: 'Gestion Intelligente par Tarif',
            about_tariff_text: 'Prend en charge les tarifs bi-horaires et tri-horaires. Configurez votre système selon la période tarifaire la plus économique et activez automatiquement le chauffage au bon moment — solaire si possible, électrique au tarif le plus bas.',

            // About — "Why is it different"
            diff_tag: 'POURQUOI C\'EST DIFFÉRENT',
            diff_title: 'Pas juste un autre gestionnaire de surplus',
            diff_sub: 'Transforme chaque watt excédentaire en énergie utile — avec une modulation dynamique, sûre et intelligente. Bien au-delà du simple <em>marche / arrêt</em>.',
            diff_pwm_title: 'Modulation PWM proportionnelle',
            diff_pwm_desc: 'Ajuste la puissance envoyée à la charge en temps réel, proportionnellement au surplus solaire disponible. Sans gaspillage, sans injection au réseau.',
            diff_temp_title: 'Contrôle intelligent par température',
            diff_temp_desc: 'Sondes DS18B20 mesurent la température de l\'eau et du TRIAC. Chauffe jusqu\'à la cible, protège le matériel et évite les cycles inutiles.',
            diff_sched_title: 'Programmation tarifs Bi/Tri',
            diff_sched_desc: 'Programmations optimisées pour tarifs bi et tri-horaires : solaire quand il y a du soleil, réseau seulement en heures creuses. Économies réelles sur la facture.',
            diff_boost_title: 'Mode Boost temporisé',
            diff_boost_desc: 'Chauffage forcé pour une durée définie depuis l\'UI Web ou Home Assistant — utile les jours nuageux ou en cas de consommation supplémentaire.',

            // License — feature matrix
            matrix_title: 'Fonctionnalités par état d\'activation',
            matrix_intro: 'Le firmware fonctionne en trois états — avant activation (mode restreint), <strong>LITE activée</strong> (gratuite, sur demande par email) et <strong>PRO activée</strong> (payante, clé par chipID). Le tableau ci-dessous résume ce qui change dans chaque état.',
            matrix_th_feature: 'Fonctionnalité',
            matrix_th_unactivated: 'Non activée',
            matrix_th_activated: 'activée',
            matrix_row_pwm_ch: 'Canaux PWM physiques',
            matrix_row_pwm_man: 'PWM manuel (curseur)',
            matrix_row_pwm_auto: 'PWM automatique (surplus)',
            matrix_row_sched: 'Programmations horaires',
            matrix_row_tariff: 'Tarif Bi/Tri-horaire',
            matrix_row_temp_water: 'Sonde eau + protection TRIAC',
            matrix_row_temp_env: 'Sonde ambiante / extra',
            matrix_row_modbus: 'Modbus + Scanner auto-discovery',
            matrix_row_mqtt: 'MQTT / Home Assistant',
            matrix_row_boost: 'Boost temporisé',
            matrix_yes: 'Oui',
            matrix_no: 'Non',
            matrix_partial: 'Partiel',
            matrix_full: 'Complet',
            matrix_limited: 'Limités',
            matrix_foot: 'La version <strong>LITE</strong> est gratuite mais nécessite une activation par clé numérique — il suffit d\'en faire la demande via le <a href="#contact">formulaire de contact</a>. La clé <strong>PRO</strong> est générée à partir du Chip ID de l\'ESP32 et valable uniquement pour cet appareil.',
            features_tag: 'FONCTIONNALITÉS',
            features_title: 'Nouveautés de la Version 1.1.1',
            features_subtitle: 'Sortie en Avril 2026',
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
            hw_subtitle: 'Compatible avec plus de 27 onduleurs et compteurs différents',
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
            dl_feat_pwm80: 'PWM Auto limité',
            dl_feat_1schedule: '1 Programmation (sans temp.)',
            dl_feat_4pwm: '4 Canaux PWM indépendants',
            dl_feat_meters: '27+ Compteurs supportés',
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
            donate_footer: 'Soutenir le Projet',
            nav_webui: 'Interface',
            webui_tag: 'INTERFACE WEB',
            webui_title: 'Interface Web v1.1.1',
            webui_subtitle: 'Configuration et surveillance complètes depuis le navigateur — sans app, sans cloud.',
            webui_tab_dashboard: 'État',
            webui_tab_config: 'Compteurs',
            webui_tab_schedules: 'Puissance PWM',
            webui_tab_mqtt: 'Programmations',
            webui_tab_modbus: 'Température',
            webui_tab_network: 'Réseau',
            webui_placeholder: "Captures d'écran à venir",
            webui_cap_dashboard: "État du système · flux d'énergie · graphiques historiques · mode BOOST",
            webui_cap_config: "Sélecteur de marque/modèle · 27+ onduleurs · Modbus Scanner (PRO)",
            webui_cap_schedules: 'Mode AUTO/MANUEL/BOOST · 4 canaux PWM · priorité batterie',
            webui_cap_mqtt: '4 programmations hebdomadaires · plages de température · tarif horaire',
            webui_cap_modbus: '4 sondes DS18B20 · protection TRIAC · anti-légionelle · thermostat saturé',
            webui_cap_network: 'WiFi principal + backup · DHCP ou IP fixe · NTP · fuseau horaire',
            nav_license: 'Licence',
            lic_tag: 'LICENCES',
            lic_title: 'Mod\u00e8le de Licence',
            lic_subtitle: 'Usage personnel libre \u2014 d\u00e9veloppement durable',
            lic_lite_title: 'SolarDiverter Lite',
            lic_lite_price: 'Gratuit',
            lic_lite_desc: 'Version gratuite destin\u00e9e exclusivement \u00e0 un usage personnel et non commercial. Inclut le firmware complet avec certaines fonctionnalit\u00e9s avanc\u00e9es d\u00e9sactiv\u00e9es.',
            lic_lite_f1: 'Firmware complet avec fonctionnalit\u00e9s limit\u00e9es',
            lic_lite_f2: 'Activation gratuite par e-mail',
            lic_lite_f3: 'Usage personnel et priv\u00e9',
            lic_lite_f4: 'Redistribution interdite',
            lic_lite_f5: 'Sans support obligatoire',
            lic_lite_unl_title: "L'activation gratuite d\u00e9verrouille :",
            lic_lite_unl_1: 'Limites supprim\u00e9es : plus de sondes de temp\u00e9rature et PWM sans restriction',
            lic_lite_unl_2: "Jusqu'\u00e0 2 planifications avec s\u00e9lection des jours",
            lic_lite_unl_3: 'MQTT avec HA Discovery et contr\u00f4les dans Home Assistant',
            lic_lite_activation: 'Activation gratuite sur demande directe par e-mail',
            lic_pro_title: 'SolarDiverter Pro',
            lic_pro_price: 'Licence payante',
            lic_pro_desc: 'D\u00e9verrouille toutes les fonctionnalit\u00e9s avanc\u00e9es. Licence num\u00e9rique li\u00e9e au chipID \u2014 non transf\u00e9rable.',
            lic_pro_f1: 'Contr\u00f4le de puissance intelligent et adaptatif',
            lic_pro_f2: 'Fonctions avanc\u00e9es par tarif bi/tri-horaire (\u00e9conomies sur la facture)',
            lic_pro_f3: "Graphiques de puissance et d'\u00e9nergie en temps r\u00e9el",
            lic_pro_f4: 'MQTT avec HA Discovery et contr\u00f4les dans Home Assistant',
            lic_pro_ota_note: 'OTA non disponible (firmware d\u00e9passe la limite de partition)',
            lic_pro_a_title: 'Mat\u00e9riel plug\u2011and\u2011play',
            lic_pro_a_desc: 'Appareil livr\u00e9 avec la licence Pro d\u00e9j\u00e0 activ\u00e9e. Aucune activation requise.',
            lic_pro_b_title: 'Kit DIY avec ESP inclus',
            lic_pro_b_desc: "Kit avec ESP32 identifi\u00e9. Cl\u00e9 g\u00e9n\u00e9r\u00e9e avant l'envoi \u2014 le firmware d\u00e9marre en mode Pro.",
            lic_pro_c_title: 'Activation sur mat\u00e9riel propre',
            lic_pro_c_desc: 'Fournissez le chipID de votre ESP32 et achetez la cl\u00e9 Pro. Licence valide pour un seul appareil.',
            lic_key_title: '\u00c0 propos de la cl\u00e9 Pro',
            lic_key_1: 'Num\u00e9rique et li\u00e9e \u00e0 un chipID unique',
            lic_key_2: 'Ne peut pas \u00eatre transf\u00e9r\u00e9e \u00e0 un autre appareil',
            lic_key_3: 'Ne peut pas \u00eatre copi\u00e9e, partag\u00e9e ou redistribu\u00e9e',
            lic_key_4: 'Toute tentative de r\u00e9tro-ing\u00e9nierie ou de contournement est interdite',
            lic_table_title: 'R\u00e9sum\u00e9 du Mod\u00e8le de Licence',
            lic_th_version: 'Version',
            lic_th_price: 'Prix',
            lic_th_activation: 'Activation',
            lic_th_use: 'Usage',
            lic_th_redistrib: 'Redistribution',
            lic_row_lite_price: 'Gratuite',
            lic_row_lite_act: 'Par e-mail',
            lic_row_use: 'Personnel',
            lic_row_no: 'Interdite',
            lic_row_pro_price: 'Payante',
            lic_row_pro_act_hw: 'D\u00e9j\u00e0 activ\u00e9e',
            lic_row_pro_hw: 'mat\u00e9riel',
            lic_row_pro_kit: 'kit',
            lic_row_pro_key: 'cl\u00e9',
            lic_row_pro_act_key: 'Par chipID',
            lic_terms: "SolarDiverter est mis \u00e0 disposition pour un usage personnel et priv\u00e9. Toute forme d'utilisation commerciale, revente, redistribution, modification ou int\u00e9gration dans des produits destin\u00e9s \u00e0 la vente est interdite sans autorisation \u00e9crite pr\u00e9alable.",
            nav_screenshots: 'Galerie',
            screenshots_tag: "CAPTURES D'\u00c9CRAN",
            screenshots_title: 'Galerie de Fonctionnalit\u00e9s',
            screenshots_subtitle: "Explorez toutes les fonctionnalit\u00e9s de SolarDiverter via l'interface Web.",
            gallery_group_monitoring: 'Surveillance',
            gallery_group_power: 'Configuration de la Puissance',
            gallery_group_modbus: 'Modbus &amp; Source de Donn\u00e9es',
            gallery_group_mqtt: 'MQTT, Home Assistant &amp; R\u00e9seau',
            gallery_group_system: 'Syst\u00e8me &amp; Param\u00e8tres',
            gallery_cap_status_graficos: "\u00c9tat et graphiques d'\u00e9nergie et consommation",
            gallery_cap_visao_boost: 'Vue du syst\u00e8me et mode Boost minut\u00e9 (PRO)',
            gallery_cap_boost_temporizado: 'Mode Boost minut\u00e9 dans la version Pro',
            gallery_cap_4canais_pwm: '4 canaux PWM ind\u00e9pendants (PRO)',
            gallery_cap_agendamentos_tarifarios: "Jusqu'\u00e0 4 programmations horaires et fonctions tarifaires (PRO)",
            gallery_cap_config_tarifarios: '\u00c9nergie tarif configuration',
            gallery_cap_fonte_dados: 'S\u00e9lection de la source de donn\u00e9es',
            gallery_cap_modbus_config: 'Param\u00e8tres ModBus en version Pro avec Modbus Scan',
            gallery_cap_modbus_scan: 'Modbus Scan \u2014 auto-d\u00e9couverte des appareils',
            gallery_cap_mqtt: 'Configuration MQTT',
            gallery_cap_mqtt_ha: 'MQTT Discovery et commandes dans Home Assistant',
            gallery_cap_wifi_dual: 'Deux r\u00e9seaux WiFi support\u00e9s, un en secours',
            gallery_cap_temperaturas_seguranca: 'Temp\u00e9ratures de s\u00e9curit\u00e9 \u2014 eau et TRIAC (sonde pr\u00e8s du TRIAC requise)',
            gallery_cap_guardar_config: 'Enregistrer et importer la configuration',
            gallery_cap_ha_comandos: 'Commandes dans Home Assistant',
            gallery_cap_idioma: "Sélection de la langue de l'interface"
        },
        es: {
            ribbon_version: 'Versión 1.1.1 - Abril 2026 · BETA',
            dl_beta_notice: '⚠️ Versiones en fase <strong>BETA</strong> — probadas pero en desarrollo activo. Use con precaución y reporte errores.',
            nav_features: 'Características',
            nav_hardware: 'Hardware',
            nav_started: 'Instalación',
            nav_downloads: 'Descargas',
            nav_contact: 'Contacto',
            hero_badge: 'Gratuito \u00b7 ESP32',
            hero_subtitle: 'Más que un simple desviador de energía solar',
            hero_desc: 'Control inteligente de su energía — desde el excedente solar hasta la calefacción eficiente del agua por horarios y tarifas',
            hero_learn_more: 'Aprende más aquí:',
            hero_btn_download: 'Descargar Gratis',
            hero_btn_features: 'Explorar Características',
            stat_inverters: 'INVERSORES',
            stat_version: 'ÚLTIMA VERSIÓN',
            stat_channels: 'CANALES PWM',
            stat_free: 'GRATUITO',
            scroll_text: 'DESPLAZAR',
            about_tag: '¿QUÉ ES SOLARDIVERTER?',
            about_title: 'Más que un simple desviador de energía solar',
            about_subtitle: 'Control inteligente de su energía — desde el excedente solar hasta la calefacción eficiente del agua por horarios y tarifas',
            about_solar_title: 'Control del Excedente Solar',
            about_solar_text: 'Detecta en tiempo real la energía solar excedente y la desvía hacia cargas controlables (resistencia de acumulador, termosifón, resistencias de apoyo a bombas de calor, calefactores de aceite), maximizando el autoconsumo y evitando la inyección a la red.',
            about_temp_title: 'Calefacción por Horarios y Temperatura',
            about_temp_text: 'Con sonda de temperatura, SolarDiverter monitoriza y controla el calentamiento del agua según horarios y días definidos. Establezca temperaturas mínimas y máximas y garantice el confort sin desperdicio.',
            about_tariff_title: 'Gestión Inteligente por Tarifa',
            about_tariff_text: 'Compatible con tarifas bi-horarias y tri-horarias. Configure su sistema según el período tarifario más económico y active automáticamente la calefacción en el momento adecuado — solar cuando sea posible, eléctrico en la tarifa más baja.',

            // About — "Why is it different"
            diff_tag: 'POR QUÉ ES DIFERENTE',
            diff_title: 'No es solo otro gestor de excedentes',
            diff_sub: 'Convierte cada vatio excedente en energía útil — con modulación dinámica, segura e inteligente. Mucho más que un simple <em>encendido / apagado</em>.',
            diff_pwm_title: 'Modulación PWM proporcional',
            diff_pwm_desc: 'Ajusta la potencia entregada a la carga en tiempo real, proporcional al excedente solar disponible. Sin desperdicio, sin inyección a red.',
            diff_temp_title: 'Control inteligente por temperatura',
            diff_temp_desc: 'Sondas DS18B20 miden la temperatura del agua y del TRIAC. Calienta hasta el objetivo, protege el hardware y evita ciclos innecesarios.',
            diff_sched_title: 'Programación por tarifa Bi/Tri',
            diff_sched_desc: 'Programaciones optimizadas para tarifas bi y tri-horarias: solar cuando hay sol, red solo en horario valle. Ahorro real en la factura.',
            diff_boost_title: 'Modo Boost temporizado',
            diff_boost_desc: 'Calentamiento forzado por tiempo definido desde la Web UI o Home Assistant — útil en días nublados o consumo extra.',

            // License — feature matrix
            matrix_title: 'Funcionalidades por estado de activación',
            matrix_intro: 'El firmware funciona en tres estados — antes de la activación (modo restringido), <strong>LITE activada</strong> (gratuita, mediante solicitud por email) y <strong>PRO activada</strong> (de pago, clave por chipID). La tabla siguiente resume lo que cambia en cada estado.',
            matrix_th_feature: 'Funcionalidad',
            matrix_th_unactivated: 'No activada',
            matrix_th_activated: 'activada',
            matrix_row_pwm_ch: 'Canales PWM físicos',
            matrix_row_pwm_man: 'PWM manual (deslizador)',
            matrix_row_pwm_auto: 'PWM automático (excedente)',
            matrix_row_sched: 'Programaciones horarias',
            matrix_row_tariff: 'Tarifa Bi/Tri-horaria',
            matrix_row_temp_water: 'Sensor agua + protección TRIAC',
            matrix_row_temp_env: 'Sensor ambiente / extra',
            matrix_row_modbus: 'Modbus + Escáner auto-descubrimiento',
            matrix_row_mqtt: 'MQTT / Home Assistant',
            matrix_row_boost: 'Boost temporizado',
            matrix_yes: 'Sí',
            matrix_no: 'No',
            matrix_partial: 'Parcial',
            matrix_full: 'Completo',
            matrix_limited: 'Limitadas',
            matrix_foot: 'La versión <strong>LITE</strong> es gratuita pero requiere activación mediante clave digital — basta con solicitarla a través del <a href="#contact">formulario de contacto</a>. La clave <strong>PRO</strong> se genera a partir del Chip ID del ESP32 y es válida solo para ese dispositivo.',
            features_tag: 'CARACTERÍSTICAS',
            features_title: 'Novedades de la Versión 1.1.1',
            features_subtitle: 'Lanzada en Abril de 2026',
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
            hw_subtitle: 'Compatible con más de 27 inversores y medidores diferentes',
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
            dl_feat_pwm80: 'PWM Auto limitado',
            dl_feat_1schedule: '1 Programación (sin temp.)',
            dl_feat_4pwm: '4 Canales PWM independientes',
            dl_feat_meters: '27+ Medidores soportados',
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
            donate_footer: 'Apoyar el Proyecto',
            nav_webui: 'WebUI',
            webui_tag: 'INTERFAZ WEB',
            webui_title: 'Interfaz Web v1.1.1',
            webui_subtitle: 'Configuración y monitorización completas desde el navegador — sin apps, sin cloud.',
            webui_tab_dashboard: 'Estado',
            webui_tab_config: 'Medidores',
            webui_tab_schedules: 'Potencia PWM',
            webui_tab_mqtt: 'Programaciones',
            webui_tab_modbus: 'Temperatura',
            webui_tab_network: 'Red',
            webui_placeholder: 'Capturas próximamente',
            webui_cap_dashboard: 'Estado del sistema · flujo de energía · gráficos históricos · modo BOOST',
            webui_cap_config: 'Selector de marca/modelo · 27+ inversores · Modbus Scanner (PRO)',
            webui_cap_schedules: 'Modo AUTO/MANUAL/BOOST · 4 canales PWM independientes · prioridad batería',
            webui_cap_mqtt: '4 programaciones semanales · bandas de temperatura · tarifa horaria',
            webui_cap_modbus: '4 sondas DS18B20 · protección TRIAC · anti-legionella · termostato saturado',
            webui_cap_network: 'WiFi principal + backup · DHCP o IP estática · NTP · zona horaria',
            nav_license: 'Licencia',
            lic_tag: 'LICENCIAMIENTO',
            lic_title: 'Modelo de Licenciamiento',
            lic_subtitle: 'Uso personal libre \u2014 desarrollo sostenible',
            lic_lite_title: 'SolarDiverter Lite',
            lic_lite_price: 'Gratuito',
            lic_lite_desc: 'Versi\u00f3n gratuita destinada exclusivamente a uso personal y no comercial. Incluye el firmware completo con algunas funcionalidades avanzadas desactivadas.',
            lic_lite_f1: 'Firmware completo con funcionalidades limitadas',
            lic_lite_f2: 'Activaci\u00f3n gratuita por email',
            lic_lite_f3: 'Uso personal y privado',
            lic_lite_f4: 'Redistribuci\u00f3n prohibida',
            lic_lite_f5: 'Sin soporte obligatorio',
            lic_lite_unl_title: 'La activaci\u00f3n gratuita desbloquea:',
            lic_lite_unl_1: 'L\u00edmites eliminados: m\u00e1s sondas de temperatura y PWM sin restricciones',
            lic_lite_unl_2: 'Hasta 2 programaciones con selecci\u00f3n de d\u00edas de la semana',
            lic_lite_unl_3: 'MQTT con HA Discovery y controles en Home Assistant',
            lic_lite_activation: 'Activaci\u00f3n gratuita mediante solicitud directa por email',
            lic_pro_title: 'SolarDiverter Pro',
            lic_pro_price: 'Licencia de pago',
            lic_pro_desc: 'Desbloquea todas las funcionalidades avanzadas. Licencia digital asociada al chipID \u2014 no transferible.',
            lic_pro_f1: 'Control de potencia inteligente y adaptativo',
            lic_pro_f2: 'Funciones avanzadas por tarifa bi/tri-horaria (ahorro en la factura el\u00e9ctrica)',
            lic_pro_f3: 'Gr\u00e1ficos de potencia y energ\u00eda en tiempo real',
            lic_pro_f4: 'MQTT con HA Discovery y controles en Home Assistant',
            lic_pro_ota_note: 'OTA no disponible (firmware supera el l\u00edmite de partici\u00f3n)',
            lic_pro_a_title: 'Hardware plug\u2011and\u2011play',
            lic_pro_a_desc: 'Dispositivo enviado con licencia Pro ya activada. Sin necesidad de activaci\u00f3n.',
            lic_pro_b_title: 'Kit DIY con ESP incluido',
            lic_pro_b_desc: 'Kit con ESP32 identificado. Clave generada antes del env\u00edo \u2014 el firmware arranca en modo Pro.',
            lic_pro_c_title: 'Activaci\u00f3n en hardware propio',
            lic_pro_c_desc: 'Proporcione el chipID de su ESP32 y adquiera la clave Pro. Licencia v\u00e1lida para un \u00fanico dispositivo.',
            lic_key_title: 'Sobre la Clave Pro',
            lic_key_1: 'Digital y asociada a un chipID \u00fanico',
            lic_key_2: 'No puede transferirse a otro dispositivo',
            lic_key_3: 'No puede copiarse, compartirse ni redistribuirse',
            lic_key_4: 'Los intentos de ingenier\u00eda inversa o bypass est\u00e1n prohibidos',
            lic_table_title: 'Resumen del Modelo de Licenciamiento',
            lic_th_version: 'Versi\u00f3n',
            lic_th_price: 'Precio',
            lic_th_activation: 'Activaci\u00f3n',
            lic_th_use: 'Uso',
            lic_th_redistrib: 'Redistribuci\u00f3n',
            lic_row_lite_price: 'Gratuita',
            lic_row_lite_act: 'Por email',
            lic_row_use: 'Personal',
            lic_row_no: 'Prohibida',
            lic_row_pro_price: 'Pagada',
            lic_row_pro_act_hw: 'Ya activada',
            lic_row_pro_hw: 'hardware',
            lic_row_pro_kit: 'kit',
            lic_row_pro_key: 'clave',
            lic_row_pro_act_key: 'Por chipID',
            lic_terms: 'SolarDiverter se proporciona para uso personal y privado. Cualquier forma de uso comercial, reventa, redistribuci\u00f3n, modificaci\u00f3n o integraci\u00f3n en productos destinados a la venta est\u00e1 prohibida sin autorizaci\u00f3n previa por escrito.',
            nav_screenshots: 'Galer\u00eda',
            screenshots_tag: 'CAPTURAS DE PANTALLA',
            screenshots_title: 'Galer\u00eda de Funcionalidades',
            screenshots_subtitle: 'Explore todas las funcionalidades de SolarDiverter a trav\u00e9s de la interfaz Web.',
            gallery_group_monitoring: 'Monitorizaci\u00f3n',
            gallery_group_power: 'Configuraci\u00f3n de Potencia',
            gallery_group_modbus: 'Modbus &amp; Fuente de Datos',
            gallery_group_mqtt: 'MQTT, Home Assistant &amp; Red',
            gallery_group_system: 'Sistema &amp; Configuraci\u00f3n',
            gallery_cap_status_graficos: 'Estado y gr\u00e1ficos de energ\u00eda y consumo',
            gallery_cap_visao_boost: 'Visi\u00f3n del sistema y modo Boost temporizado (PRO)',
            gallery_cap_boost_temporizado: 'Modo Boost temporizado en la versi\u00f3n Pro',
            gallery_cap_4canais_pwm: '4 canales PWM independientes (PRO)',
            gallery_cap_agendamentos_tarifarios: 'Hasta 4 programaciones horarias y funciones de tarifas (PRO)',
            gallery_cap_config_tarifarios: 'Configuraci\u00f3n de tarifas de energ\u00eda',
            gallery_cap_fonte_dados: 'Selecci\u00f3n de la fuente de datos',
            gallery_cap_modbus_config: 'Configuraciones ModBus en la versi\u00f3n Pro con Modbus Scan',
            gallery_cap_modbus_scan: 'Modbus Scan \u2014 auto-discovery de dispositivos',
            gallery_cap_mqtt: 'Configuraci\u00f3n MQTT',
            gallery_cap_mqtt_ha: 'MQTT Discovery y comandos en Home Assistant',
            gallery_cap_wifi_dual: 'Dos redes WiFi soportadas, una de respaldo',
            gallery_cap_temperaturas_seguranca: 'Temperaturas de seguridad \u2014 agua y TRIAC (requiere sonda junto al TRIAC)',
            gallery_cap_guardar_config: 'Guardar y cargar configuraciones',
            gallery_cap_ha_comandos: 'Comandos en Home Assistant',
            gallery_cap_idioma: 'Selección del idioma de la interfaz'
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

        // data-caption attribute (gallery lightbox)
        document.querySelectorAll('[data-i18n-caption]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-caption');
            if (t[key] !== undefined) {
                el.setAttribute('data-caption', t[key]);
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
       WEBUI TAB SWITCHER
       ========================================================================== */
    function initWebUITabs() {
        var tabs = document.querySelectorAll('.sd-webui-tab');
        if (!tabs.length) return;

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var target = this.getAttribute('data-tab');

                document.querySelectorAll('.sd-webui-tab').forEach(function (t) {
                    t.classList.remove('active');
                });
                this.classList.add('active');

                document.querySelectorAll('.sd-webui-panel').forEach(function (p) {
                    p.classList.toggle('active', p.getAttribute('data-panel') === target);
                });

                document.querySelectorAll('.sd-webui-caption').forEach(function (c) {
                    c.classList.toggle('active', c.getAttribute('data-caption') === target);
                });
            });
        });
    }

    /* ==========================================================================
       FOOTER YEAR
       ========================================================================== */
    function initYear() {
        var el = document.getElementById('sd-year');
        if (el) el.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       LIGHTBOX GALLERY
       ========================================================================== */
    function initLightbox() {
        var lightbox = document.getElementById('sd-lightbox');
        var lbImgWrap = document.getElementById('sd-lightbox-img-wrap');
        var lbImg = document.getElementById('sd-lightbox-img');
        var lbCaption = document.getElementById('sd-lightbox-caption');
        var lbClose = document.getElementById('sd-lightbox-close');
        var lbPrev = document.getElementById('sd-lightbox-prev');
        var lbNext = document.getElementById('sd-lightbox-next');
        var lbZoomIn = document.getElementById('sd-lbz-in');
        var lbZoomOut = document.getElementById('sd-lbz-out');
        var lbZoomReset = document.getElementById('sd-lbz-reset');
        if (!lightbox) return;

        var links = document.querySelectorAll('.sd-gallery-link');
        var currentIndex = 0;

        // Zoom / pan state
        var scale = 1;
        var posX = 0;
        var posY = 0;
        var MIN_SCALE = 1;
        var MAX_SCALE = 5;
        var isDragging = false;
        var dragStartX = 0;
        var dragStartY = 0;
        var dragOriginX = 0;
        var dragOriginY = 0;

        function applyTransform() {
            lbImg.style.transform = 'translate(' + posX + 'px,' + posY + 'px) scale(' + scale + ')';
            lbImgWrap.style.cursor = scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default';
        }

        function resetZoom() {
            scale = 1; posX = 0; posY = 0;
            applyTransform();
        }

        function clampPos() {
            var rect = lbImg.getBoundingClientRect();
            var wrapRect = lbImgWrap.getBoundingClientRect();
            var overX = Math.max(0, (rect.width - wrapRect.width) / 2);
            var overY = Math.max(0, (rect.height - wrapRect.height) / 2);
            posX = Math.min(overX, Math.max(-overX, posX));
            posY = Math.min(overY, Math.max(-overY, posY));
        }

        function zoomBy(delta, cx, cy) {
            var prev = scale;
            scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale + delta));
            if (scale !== prev) {
                // adjust position towards cursor point
                var ratio = scale / prev - 1;
                var rect = lbImgWrap.getBoundingClientRect();
                posX -= (cx - rect.left - rect.width / 2) * ratio;
                posY -= (cy - rect.top - rect.height / 2) * ratio;
                clampPos();
                applyTransform();
            }
        }

        function openLightbox(index) {
            currentIndex = index;
            var link = links[index];
            resetZoom();
            lbImg.src = link.href;
            lbImg.alt = link.getAttribute('data-caption') || '';
            lbCaption.textContent = link.getAttribute('data-caption') || '';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            lbImg.src = '';
            resetZoom();
        }

        function navigate(dir) {
            currentIndex = (currentIndex + dir + links.length) % links.length;
            openLightbox(currentIndex);
        }

        links.forEach(function (link, i) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                openLightbox(i);
            });
        });

        lbClose.addEventListener('click', closeLightbox);
        lbPrev.addEventListener('click', function () { if (scale === 1) navigate(-1); });
        lbNext.addEventListener('click', function () { if (scale === 1) navigate(1); });
        lbZoomIn.addEventListener('click', function () { zoomBy(0.5, Infinity, Infinity); });
        lbZoomOut.addEventListener('click', function () { zoomBy(-0.5, Infinity, Infinity); });
        lbZoomReset.addEventListener('click', resetZoom);

        // Scroll to zoom
        lbImgWrap.addEventListener('wheel', function (e) {
            e.preventDefault();
            var delta = e.deltaY < 0 ? 0.3 : -0.3;
            zoomBy(delta, e.clientX, e.clientY);
        }, { passive: false });

        // Drag to pan
        lbImgWrap.addEventListener('mousedown', function (e) {
            if (scale <= 1) return;
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragOriginX = posX;
            dragOriginY = posY;
            applyTransform();
            e.preventDefault();
        });
        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            posX = dragOriginX + (e.clientX - dragStartX);
            posY = dragOriginY + (e.clientY - dragStartY);
            clampPos();
            applyTransform();
        });
        document.addEventListener('mouseup', function () {
            if (isDragging) { isDragging = false; applyTransform(); }
        });

        // Touch pinch-to-zoom + drag
        var lastTouchDist = null;
        var lastTouchMidX = 0;
        var lastTouchMidY = 0;
        lbImgWrap.addEventListener('touchstart', function (e) {
            if (e.touches.length === 2) {
                lastTouchDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY);
                lastTouchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                lastTouchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            } else if (e.touches.length === 1 && scale > 1) {
                isDragging = true;
                dragStartX = e.touches[0].clientX;
                dragStartY = e.touches[0].clientY;
                dragOriginX = posX;
                dragOriginY = posY;
            }
        }, { passive: true });
        lbImgWrap.addEventListener('touchmove', function (e) {
            if (e.touches.length === 2) {
                e.preventDefault();
                var dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY);
                var midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                var midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                if (lastTouchDist) {
                    var delta = (dist / lastTouchDist - 1) * scale;
                    zoomBy(delta, midX, midY);
                }
                lastTouchDist = dist;
                lastTouchMidX = midX;
                lastTouchMidY = midY;
            } else if (e.touches.length === 1 && isDragging) {
                posX = dragOriginX + (e.touches[0].clientX - dragStartX);
                posY = dragOriginY + (e.touches[0].clientY - dragStartY);
                clampPos();
                applyTransform();
            }
        }, { passive: false });
        lbImgWrap.addEventListener('touchend', function (e) {
            if (e.touches.length < 2) lastTouchDist = null;
            if (e.touches.length === 0) isDragging = false;
        }, { passive: true });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft' && scale === 1) navigate(-1);
            if (e.key === 'ArrowRight' && scale === 1) navigate(1);
            if (e.key === '+' || e.key === '=') zoomBy(0.5, Infinity, Infinity);
            if (e.key === '-') zoomBy(-0.5, Infinity, Infinity);
            if (e.key === '0') resetZoom();
        });
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
        initWebUITabs();
        initLightbox();
        initYear();
    });
})();
