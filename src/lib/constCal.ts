export const CALENDER = `
BEGIN:VCALENDAR
VERSION:2.0
METHOD:PUBLISH
PRODID:-//KIT//campus.kit.edu//DE
URL:https://campus.studium.kit.edu
NAME:KIT-Termine
X-WR-CALNAME:KIT-Termine
BEGIN:VTIMEZONE
TZID:Europe/Berlin
X-LIC-LOCATION:Europe/Berlin
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=3
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=10
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:0x03D47D93A41A443CBC68E97289D20711@campus.kit.edu
SUMMARY:0133300 - Übungen zu 0133200 (Ü)\, Kühnlein\, MATH
DTSTART;TZID=Europe/Berlin:20221024T080000
DTEND;TZID=Europe/Berlin:20221024T093000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230213T093000
EXDATE;TZID=Europe/Berlin:20221226T080000
EXDATE;TZID=Europe/Berlin:20230102T080000
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/APFoLw7nTE6SgOeGxpMgfQ
URL:https://campus.studium.kit.edu/ev/APFoLw7nTE6SgOeGxpMgfQ
END:VEVENT
BEGIN:VEVENT
UID:0x381BC95F2073486D8563936DDF9DF551@campus.kit.edu
SUMMARY:0133100 - Übungen zu 0133000 (Ü)\, Herzog
DTSTART;TZID=Europe/Berlin:20221025T080000
DTEND;TZID=Europe/Berlin:20221025T093000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230214T093000
EXDATE;TZID=Europe/Berlin:20221101T080000
EXDATE;TZID=Europe/Berlin:20221227T080000
EXDATE;TZID=Europe/Berlin:20230103T080000
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/lTTIjSmrQBiximYyAJvDMQ
URL:https://campus.studium.kit.edu/ev/lTTIjSmrQBiximYyAJvDMQ
END:VEVENT
BEGIN:VEVENT
UID:0xD928B2C7558F43EFBE4D90CB3D66FEB4@campus.kit.edu
SUMMARY:24001 - Grundbegriffe der Informatik (V)\, Ulbrich et al.
DTSTART;TZID=Europe/Berlin:20221026T094500
DTEND;TZID=Europe/Berlin:20221026T111500
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230215T111500
EXDATE;TZID=Europe/Berlin:20221228T094500
EXDATE;TZID=Europe/Berlin:20230104T094500
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/aZGNB7J6SxWYOAhhFSSUCg
URL:https://campus.studium.kit.edu/ev/aZGNB7J6SxWYOAhhFSSUCg
END:VEVENT
BEGIN:VEVENT
UID:0x7F47D92317AD44B68361F1D52D378E5E@campus.kit.edu
SUMMARY:0133200 - Lineare Algebra I für die Fachrichtung Informatik (V)\, Kühnlein\, MATH
DTSTART;TZID=Europe/Berlin:20221026T113000
DTEND;TZID=Europe/Berlin:20221026T130000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230215T130000
EXDATE;TZID=Europe/Berlin:20221228T113000
EXDATE;TZID=Europe/Berlin:20230104T113000
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/OWNZD4o0R72AmzBk5GSQDg
URL:https://campus.studium.kit.edu/ev/OWNZD4o0R72AmzBk5GSQDg
END:VEVENT
BEGIN:VEVENT
UID:0xB8D57D998BAC4DDE82C3300C48C04147@campus.kit.edu
SUMMARY:24004 - Programmieren (VÜ)\, Koziolek
DTSTART;TZID=Europe/Berlin:20221026T140000
DTEND;TZID=Europe/Berlin:20221026T153000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230215T153000
EXDATE;TZID=Europe/Berlin:20221228T140000
EXDATE;TZID=Europe/Berlin:20230104T140000
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/I_K8e1QOTNK1o1nuKL-V3Q
URL:https://campus.studium.kit.edu/ev/I_K8e1QOTNK1o1nuKL-V3Q
END:VEVENT
BEGIN:VEVENT
UID:0x2B8E28A107C8443DAC5F6896E6086B39@campus.kit.edu
SUMMARY:2411825 - Tutorien zu Grundbegriffe der Informatik (Tu)\, Ulbrich et al.\, INFO
DTSTART;TZID=Europe/Berlin:20221027T094500
DTEND;TZID=Europe/Berlin:20221027T111500
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230216T111500
EXDATE;TZID=Europe/Berlin:20221229T094500
EXDATE;TZID=Europe/Berlin:20230105T094500
LOCATION:50.34 Raum -109
DESCRIPTION:https://campus.studium.kit.edu/ev/XeRi1BufSwyst6Y26Vnqrw
URL:https://campus.studium.kit.edu/ev/XeRi1BufSwyst6Y26Vnqrw
END:VEVENT
BEGIN:VEVENT
UID:0x94A691F6D42D4CE0AB695F8AB89C3DDF@campus.kit.edu
SUMMARY:0133000 - Höhere Mathematik I (Analysis) für die Fachrichtung Informatik (V)\, Herzog
DTSTART;TZID=Europe/Berlin:20221027T140000
DTEND;TZID=Europe/Berlin:20221027T153000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230216T153000
EXDATE;TZID=Europe/Berlin:20221229T140000
EXDATE;TZID=Europe/Berlin:20230105T140000
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/ZYH1i1I8T2WCPQigNjSSkQ
URL:https://campus.studium.kit.edu/ev/ZYH1i1I8T2WCPQigNjSSkQ
END:VEVENT
BEGIN:VEVENT
UID:0xD4AD897898F049B9AD1CC14350861574@campus.kit.edu
SUMMARY:2411803 - Tutorien zu Programmieren (Tu)\, Walter\, INFO
DTSTART;TZID=Europe/Berlin:20221027T140000
DTEND;TZID=Europe/Berlin:20221027T153000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230216T153000
EXDATE;TZID=Europe/Berlin:20221229T140000
EXDATE;TZID=Europe/Berlin:20230105T140000
LOCATION:50.34 Raum -109
DESCRIPTION:https://campus.studium.kit.edu/ev/DUOwudJ_RCWooSBkMFSD0g
URL:https://campus.studium.kit.edu/ev/DUOwudJ_RCWooSBkMFSD0g
END:VEVENT
BEGIN:VEVENT
UID:0xC37FAC56902A40F5AFC5EDAEC86504CC@campus.kit.edu
SUMMARY:0133200 - Lineare Algebra I für die Fachrichtung Informatik (V)\, Kühnlein\, MATH
DTSTART;TZID=Europe/Berlin:20221028T080000
DTEND;TZID=Europe/Berlin:20221028T093000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230217T093000
EXDATE;TZID=Europe/Berlin:20221230T080000
EXDATE;TZID=Europe/Berlin:20230106T080000
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/OWNZD4o0R72AmzBk5GSQDg
URL:https://campus.studium.kit.edu/ev/OWNZD4o0R72AmzBk5GSQDg
END:VEVENT
BEGIN:VEVENT
UID:0x6B04E518B7B9415190558CCAE3CC88D5@campus.kit.edu
SUMMARY:0133000 - Höhere Mathematik I (Analysis) für die Fachrichtung Informatik (V)\, Herzog
DTSTART;TZID=Europe/Berlin:20221028T154500
DTEND;TZID=Europe/Berlin:20221028T171500
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230217T171500
EXDATE;TZID=Europe/Berlin:20221230T154500
EXDATE;TZID=Europe/Berlin:20230106T154500
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/ZYH1i1I8T2WCPQigNjSSkQ
URL:https://campus.studium.kit.edu/ev/ZYH1i1I8T2WCPQigNjSSkQ
END:VEVENT
BEGIN:VEVENT
UID:0x006506DA9B48409C86AA0CBCEE099E32@campus.kit.edu
SUMMARY:24001 - Grundbegriffe der Informatik (V)\, Ulbrich et al.
DTSTART;TZID=Europe/Berlin:20221104T094500
DTEND;TZID=Europe/Berlin:20221104T103000
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230217T103000
EXDATE;TZID=Europe/Berlin:20221230T094500
EXDATE;TZID=Europe/Berlin:20230106T094500
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/aZGNB7J6SxWYOAhhFSSUCg
URL:https://campus.studium.kit.edu/ev/aZGNB7J6SxWYOAhhFSSUCg
END:VEVENT
BEGIN:VEVENT
UID:0xB5455E1EEA794E28B1A282F3F3525524@campus.kit.edu
SUMMARY:24002 - Übungen zu Grundbegriffe der Informatik (Ü)\, Ulbrich et al.
DTSTART;TZID=Europe/Berlin:20221104T103000
DTEND;TZID=Europe/Berlin:20221104T111500
SEQUENCE:0
DTSTAMP:20230315T171524
RRULE:FREQ=WEEKLY;UNTIL=20230217T111500
EXDATE;TZID=Europe/Berlin:20221230T103000
EXDATE;TZID=Europe/Berlin:20230106T103000
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/MDaMiBSwTdey412QLtUCtw
URL:https://campus.studium.kit.edu/ev/MDaMiBSwTdey412QLtUCtw
END:VEVENT
BEGIN:VEVENT
UID:0x30D1D2E6CFAC48EDB871A184B950DA29@campus.kit.edu
SUMMARY:24004 - Programmieren (VÜ)\, Koziolek
DTSTART;TZID=Europe/Berlin:20221024T140000
DTEND;TZID=Europe/Berlin:20221024T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/I_K8e1QOTNK1o1nuKL-V3Q
URL:https://campus.studium.kit.edu/ev/I_K8e1QOTNK1o1nuKL-V3Q
END:VEVENT
BEGIN:VEVENT
UID:0x0C15B45951D94063AEC76192F458F8C9@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221024T154500
DTEND;TZID=Europe/Berlin:20221024T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x87FCC2DABC46467492400DBCA7E6B457@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221025T140000
DTEND;TZID=Europe/Berlin:20221025T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xAF54B10E66294BA1B9A2375CE97769E9@campus.kit.edu
SUMMARY:2400037 - Eine Einführung zum Informatikstudium am KIT (eezi) (sonst.)\, Glaubitz\, INFO
DTSTART;TZID=Europe/Berlin:20221025T173000
DTEND;TZID=Europe/Berlin:20221025T190000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
URL:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
END:VEVENT
BEGIN:VEVENT
UID:0xBA5AD7292F93401A9CAAFDACFE8AA3F6@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221031T154500
DTEND;TZID=Europe/Berlin:20221031T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x17B402FD1837424CB53386EB2CDCD017@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221107T154500
DTEND;TZID=Europe/Berlin:20221107T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x6DD25BE70A7F4F48806CA7AF09D0CD75@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221108T140000
DTEND;TZID=Europe/Berlin:20221108T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x50A5DA95C534492D80CFF0A19A4AF437@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221114T154500
DTEND;TZID=Europe/Berlin:20221114T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x17CA6F004EEE42A7B71E1A558557B0B0@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221115T140000
DTEND;TZID=Europe/Berlin:20221115T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xD145FBD4455B42088C691C35E7454FBC@campus.kit.edu
SUMMARY:2400037 - Eine Einführung zum Informatikstudium am KIT (eezi) (sonst.)\, Glaubitz\, INFO
DTSTART;TZID=Europe/Berlin:20221115T173000
DTEND;TZID=Europe/Berlin:20221115T190000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
URL:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
END:VEVENT
BEGIN:VEVENT
UID:0x4B2B7D8904A44C848CC2EE8CA52E3C7D@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221121T154500
DTEND;TZID=Europe/Berlin:20221121T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0xA9DCECB5EFB5400B93A321E76C0F720C@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221122T140000
DTEND;TZID=Europe/Berlin:20221122T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xC60E15B8EFC4469AA9CB23B9615E43DF@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221128T154500
DTEND;TZID=Europe/Berlin:20221128T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x3CAF35B625914EE593C65AD9A126F1D6@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221129T140000
DTEND;TZID=Europe/Berlin:20221129T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x8CC4EC6145E94827B543AAF03F48A615@campus.kit.edu
SUMMARY:2400037 - Eine Einführung zum Informatikstudium am KIT (eezi) (sonst.)\, Glaubitz\, INFO
DTSTART;TZID=Europe/Berlin:20221129T173000
DTEND;TZID=Europe/Berlin:20221129T190000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
URL:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
END:VEVENT
BEGIN:VEVENT
UID:0x301F8BFB31B6493A9E2066B4BDAD7F7A@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221205T154500
DTEND;TZID=Europe/Berlin:20221205T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x9287B652EB50445FA578E32ABC35465F@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221206T140000
DTEND;TZID=Europe/Berlin:20221206T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xA5851623493448C39D6D26C162A3DA2B@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221212T154500
DTEND;TZID=Europe/Berlin:20221212T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x0C316C9A81E849609180858506C21E3A@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221213T140000
DTEND;TZID=Europe/Berlin:20221213T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x7909096933424DE19F40D37B265B9245@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20221219T154500
DTEND;TZID=Europe/Berlin:20221219T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0xE6FD3D7654AF4B20BAF9B5285F931848@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20221220T140000
DTEND;TZID=Europe/Berlin:20221220T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xA8D75E54FE6F48FE82E8C4FBF46E356B@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230109T154500
DTEND;TZID=Europe/Berlin:20230109T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0xDE6D129DF36F43F0BB4E6C78486FB76E@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230110T140000
DTEND;TZID=Europe/Berlin:20230110T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xDA6DE4302A074071B45DEAF7E214C26C@campus.kit.edu
SUMMARY:7500074 - Programmieren Übungsschein (PR)\, Koziolek
DTSTART;TZID=Europe/Berlin:20230113T173000
DTEND;TZID=Europe/Berlin:20230113T193000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/IoE5EVQ2QGe0f362wQohXQ
URL:https://campus.studium.kit.edu/ev/IoE5EVQ2QGe0f362wQohXQ
END:VEVENT
BEGIN:VEVENT
UID:0x7529396758CC4AEEB9AA6D26094B4CB8@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230116T154500
DTEND;TZID=Europe/Berlin:20230116T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x4C490D500AA04D87BEFFB2032FBA969C@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230117T140000
DTEND;TZID=Europe/Berlin:20230117T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0xBF2AC792695F46849593A5A88BD2AB46@campus.kit.edu
SUMMARY:2400037 - Eine Einführung zum Informatikstudium am KIT (eezi) (sonst.)\, Glaubitz\, INFO
DTSTART;TZID=Europe/Berlin:20230117T173000
DTEND;TZID=Europe/Berlin:20230117T190000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
URL:https://campus.studium.kit.edu/ev/lvnCu-gtToK98Wp1HH1yTw
END:VEVENT
BEGIN:VEVENT
UID:0x19FA712376754751B66435A0299EB5C9@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230123T154500
DTEND;TZID=Europe/Berlin:20230123T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x91D9D33599B9447791ED80509F580F15@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230124T140000
DTEND;TZID=Europe/Berlin:20230124T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x805BC9C4F18E4106AAD69AE7D63A1EA7@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230130T154500
DTEND;TZID=Europe/Berlin:20230130T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0xA101F73424924037982E4E7AFB6400E7@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230131T140000
DTEND;TZID=Europe/Berlin:20230131T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x1EAC410E90FF4CEFACFC43D1BC69B53A@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230206T154500
DTEND;TZID=Europe/Berlin:20230206T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x1CD79569CD9445EF8AE9F7EF2344C817@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230207T140000
DTEND;TZID=Europe/Berlin:20230207T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x7686167D8ABC4DFC8B39B84DEAB74278@campus.kit.edu
SUMMARY:0190070 - Tutorium Lineare Algebra 1 (Tu)\, Lytchak et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230213T154500
DTEND;TZID=Europe/Berlin:20230213T171500
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.30 SR -1.013 (UG)
DESCRIPTION:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
URL:https://campus.studium.kit.edu/ev/BeS9rYE9TKuig_QN23HD8g
END:VEVENT
BEGIN:VEVENT
UID:0x583148D855F24E0D9F36467845CC5F47@campus.kit.edu
SUMMARY:0193300 - Tutorium HMI für Informatik (Tu)\, Herzog
DTSTART;TZID=Europe/Berlin:20230214T140000
DTEND;TZID=Europe/Berlin:20230214T153000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Architektur\, Neuer Hörsaal (NH)
DESCRIPTION:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
URL:https://campus.studium.kit.edu/ev/kv28k_maSf6OM_x28XZevw
END:VEVENT
BEGIN:VEVENT
UID:0x181A4498CA3A4768B74CCC32826B0634@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.22 Otto-Lehmann-Hörsaal (Mittl. HS)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x2CDF768490934C8D8F52DB3D22EBE365@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.50 Bauingenieure\, Grosser Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x240F98B9771949E2B873D5D6FC30B443@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.50 Bauingenieure\, Kleiner Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x3D2395FD7C8C439887D6F837F08CA480@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.22 Gaede-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x35552A65BD22466EB286FE515A418906@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x5FF468A45F5849439DBD06151FE98738@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:11.10 Engelbert-Arnold-Hörsaal (EAS)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x54A7260A42964A33BDBFB950C13B3EC2@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:11.40 Johann-Gottfried-Tulla-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x521BB76F0B29490CBC7121F6CEEBD9D9@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Fritz-Haller Hörsaal (HS37)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x452025A9CD6C49C2839810E7B4382DD0@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.10 Nachrichtentechnik-Hörsaal (NTI)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x80DE01ED4EEE4A9597E71F04588CB731@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.46 Chemie\, Neuer Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x5CF3B92902344B7BB5334E15F2822408@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xA1DEF6C60BC1450D90E6EA7264961BD0@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.11 Hertz-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xA7762925ABCA468E901CB6F9B31F43FE@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.91 Grashof-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xCF221411EBF84678ACF4298669C8D2C3@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.91 Redtenbacher-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xC104E4DB88EF40C69365EC966D968AD1@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.21 Gerthsen-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xF097E87BD96842D2AF21D47FACD1AD85@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.41 Rudolf-Criegee-Hörsaal (HS4)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0xF857A97BD95C417093DC1A64FFA43DF6@campus.kit.edu
SUMMARY:75400100 - Grundbegriffe der Informatik (PR)\, Ulbrich\, INFO
DTSTART;TZID=Europe/Berlin:20230227T110000
DTEND;TZID=Europe/Berlin:20230227T130000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.41 Chemie-Hörsaal Nr. 3 (HS3)
DESCRIPTION:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
URL:https://campus.studium.kit.edu/ev/sQGNS6NmRfawzDo8J4II9A
END:VEVENT
BEGIN:VEVENT
UID:0x09E69C9ECF4A467C94DAD21B64ECB2DD@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.21 Gerthsen-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0x35278B84454343ECA718D96655EDC5F7@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.91 Redtenbacher-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0x48BEA454B0BE4454872A6DEF4904F347@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.11 Hertz-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0x58758853DA86436D88339B4A8CBB5B38@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.46 Chemie\, Neuer Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0x4BE964C6C4DD43F88DE5A95BD9A9C195@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:30.95 Forum Hörsaal (Audimax)
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0xC7E053F5A65D4D449BF5731242E81120@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:10.50 Bauingenieure\, Grosser Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0x8A1D817AF3874DDFB05475AAA3C71202@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:11.40 Johann-Gottfried-Tulla-Hörsaal
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0xB06C9129BAC3477F9DAEED1A41ECDAFA@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:20.40 Fritz-Haller Hörsaal (HS37)
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
BEGIN:VEVENT
UID:0xD77DCEAD7DB34C7B827B10C0F35EE9CB@campus.kit.edu
SUMMARY:7700043 - Lineare Algebra I für die Fachrichtung Informatik (PR)\, Link et al.\, MATH
DTSTART;TZID=Europe/Berlin:20230308T080000
DTEND;TZID=Europe/Berlin:20230308T100000
SEQUENCE:0
DTSTAMP:20230315T171524
LOCATION:50.35 Fasanengarten-Hörsaal  (HS a.F.)
DESCRIPTION:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
URL:https://campus.studium.kit.edu/ev/lbybY_fVTx67EM5COSU0Qw
END:VEVENT
END:VCALENDAR
`;