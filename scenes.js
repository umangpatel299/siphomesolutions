/* Illustrated project scenes (400 x 300). Each is replaced by a real photo
   automatically when images/<key>.jpg exists next to index.html. */
window.SIP_SCENES = (function () {
  var N = "#0B3558", G = "#1F6B45", S = "#4A4F55", M = "#D9E1E8", W = "#FFFFFF";
  var wood = "#C9A27B", woodD = "#AD845C", brass = "#C9A44C", sky = "#CFE3F1";
  function svg(body, defs) {
    return '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img">' +
      (defs ? "<defs>" + defs + "</defs>" : "") + body + "</svg>";
  }
  var planks = function (y, h, c, c2) {
    var s = '<rect y="' + y + '" width="400" height="' + h + '" fill="' + c + '"/><g stroke="' + c2 + '" stroke-width="1.5">';
    for (var r = 0, yy = y; yy < 300; r++, yy += 20) {
      s += '<path d="M0 ' + yy + 'h400"/>';
      for (var x = (r % 2 ? 40 : 100); x < 400; x += 130) s += '<path d="M' + x + " " + yy + "v20" + '"/>';
    }
    return s + "</g>";
  };
  var sub = '<pattern id="pSub" width="24" height="12" patternUnits="userSpaceOnUse"><rect width="24" height="12" fill="#FFF"/><path d="M0 .5h24M0 6.5h24M12 0v6M.5 6v6" stroke="#D5DDE4" stroke-width="1"/></pattern>';
  var tile = '<pattern id="pTile" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#E9EEF2"/><path d="M0 .5h30M.5 0v30" stroke="#CBD5DE"/></pattern>';
  var hex = '<pattern id="pHex" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#F4F6F8"/><circle cx="7" cy="7" r="5" fill="none" stroke="#D3DBE2"/></pattern>';
  var siding = '<pattern id="pSide" width="10" height="14" patternUnits="userSpaceOnUse"><rect width="10" height="14" fill="#3F6E8F"/><path d="M0 13h10" stroke="#2F5A78" stroke-width="2"/></pattern>';
  var pine = function (x, y, s) {
    s = s || 1;
    return '<g transform="translate(' + x + " " + y + ") scale(" + s + ')" fill="' + G + '"><path d="M0 -70 L18 -30 H-18Z"/><path d="M0 -50 L24 -6 H-24Z"/><path d="M0 -28 L30 18 H-30Z"/><rect x="-3" y="18" width="6" height="10" fill="' + S + '"/></g>';
  };

  var appliance = svg(
      '<rect width="400" height="300" fill="#EEF2F5"/>' +
      '<rect y="236" width="400" height="64" fill="url(#pTile)"/>' +
      '<rect x="40" y="40" width="320" height="38" fill="' + wood + '"/><path d="M40 78h320" stroke="' + woodD + '" stroke-width="3"/>' +
      '<g fill="#FFF" stroke="#C9D3DC" stroke-width="2"><rect x="70" y="104" width="122" height="134" rx="6"/><rect x="208" y="104" width="122" height="134" rx="6"/></g>' +
      '<g fill="#E6ECF1"><rect x="78" y="112" width="106" height="16" rx="3"/><rect x="216" y="112" width="106" height="16" rx="3"/></g>' +
      '<g fill="' + G + '"><circle cx="168" cy="120" r="4"/><circle cx="306" cy="120" r="4"/></g>' +
      '<g fill="' + N + '"><circle cx="131" cy="182" r="38"/><circle cx="269" cy="182" r="38"/></g>' +
      '<g fill="#9CC3DD"><circle cx="131" cy="182" r="28"/><circle cx="269" cy="182" r="28"/></g>' +
      '<path d="M108 190 q12 -10 23 0 t23 0" stroke="#FFF" stroke-width="3" fill="none" opacity=".8"/>' +
      '<g transform="translate(330 50)"><rect x="-8" y="0" width="16" height="22" rx="3" fill="' + M + '"/><rect x="-6" y="-8" width="12" height="9" rx="2" fill="' + G + '"/></g>' +
      '<g transform="translate(60 54)"><rect x="-10" y="0" width="22" height="20" rx="3" fill="' + N + '"/></g>' +
      '<g stroke="' + S + '" stroke-width="5" stroke-linecap="round"><path d="M352 236 l18 -60"/></g><circle cx="371" cy="172" r="7" fill="none" stroke="' + S + '" stroke-width="5"/>',
      tile);
  var furniture = svg(
      '<rect width="400" height="300" fill="#EEF2F5"/>' +
      planks(232, 68, wood, woodD) +
      '<rect x="230" y="40" width="130" height="192" fill="#FFF" stroke="#C9D3DC" stroke-width="3"/>' +
      '<g stroke="#C9D3DC" stroke-width="3"><path d="M230 88h130M230 136h130M230 184h130"/></g>' +
      '<g fill="' + N + '"><rect x="246" y="60" width="16" height="28"/><rect x="266" y="54" width="14" height="34"/><rect x="284" y="64" width="18" height="24"/></g>' +
      '<rect x="300" y="116" width="40" height="20" rx="3" fill="' + G + '"/>' +
      '<g transform="translate(330 168)"><path d="M0 16 C-10 6 -8 -6 0 -2 M0 16 C6 2 14 -2 12 8" stroke="' + G + '" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="-7" y="14" width="14" height="4" fill="' + S + '"/></g>' +
      '<g transform="translate(70 196) rotate(-8)"><rect width="120" height="14" fill="#E2C49F" stroke="' + woodD + '"/><rect y="20" width="120" height="14" fill="#D9B48C" stroke="' + woodD + '"/></g>' +
      '<rect x="40" y="150" width="80" height="60" fill="#D7C1A0" stroke="#B89A72" stroke-width="2"/><path d="M40 166h80M80 150v16" stroke="#B89A72" stroke-width="2"/>' +
      '<g transform="translate(176 150) rotate(35)"><rect x="-4" y="0" width="8" height="46" rx="3" fill="' + G + '"/><rect x="-2" y="-22" width="4" height="22" fill="#9AA4AE"/></g>' +
      '<g transform="translate(200 208)"><path d="M0 0 h18 v6 h-12 v14 h-6z" fill="' + S + '"/></g>' +
      '<g fill="#9AA4AE"><circle cx="150" cy="226" r="3"/><circle cx="162" cy="230" r="3"/><circle cx="140" cy="232" r="3"/></g>');

  return {
    appliance: appliance,
    furniture: furniture,
    kitchen: svg(
      '<rect width="400" height="300" fill="#EEF2F5"/>' +
      planks(232, 68, wood, woodD) +
      '<rect x="160" y="34" width="80" height="72" fill="' + sky + '" stroke="#FFF" stroke-width="6"/><path d="M200 34v72M160 70h80" stroke="#FFF" stroke-width="4"/>' +
      '<path d="M166 100 l22 -30 18 20 14 -14 14 24z" fill="#9CC3DD"/>' +
      '<g fill="#FFF" stroke="#C9D3DC" stroke-width="2"><rect x="18" y="26" width="64" height="84"/><rect x="82" y="26" width="64" height="84"/><rect x="254" y="26" width="64" height="84"/><rect x="318" y="26" width="64" height="84"/></g>' +
      '<g fill="' + brass + '"><rect x="74" y="88" width="3" height="14"/><rect x="87" y="88" width="3" height="14"/><rect x="310" y="88" width="3" height="14"/><rect x="323" y="88" width="3" height="14"/></g>' +
      '<rect x="18" y="110" width="364" height="54" fill="url(#pSub)"/>' +
      '<rect x="12" y="160" width="376" height="11" rx="2" fill="#F7F7F5" stroke="#D3D9DF"/>' +
      '<rect x="18" y="171" width="364" height="61" fill="' + N + '"/>' +
      '<g stroke="#1C4C76" stroke-width="2"><path d="M109 171v61M200 171v61M291 171v61M18 190h91M291 190h91"/></g>' +
      '<g fill="' + brass + '"><rect x="50" y="180" width="26" height="3" rx="1.5"/><rect x="322" y="180" width="26" height="3" rx="1.5"/><rect x="190" y="196" width="3" height="18"/><rect x="207" y="196" width="3" height="18"/><rect x="99" y="200" width="3" height="18"/><rect x="298" y="200" width="3" height="18"/></g>' +
      '<path d="M190 160 v-22 a10 10 0 0 1 20 0" fill="none" stroke="#9AA4AE" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="172" y="157" width="56" height="5" rx="2" fill="#B8C1C9"/>' +
      '<g transform="translate(320 128)"><rect x="-10" y="16" width="20" height="16" rx="3" fill="' + W + '" stroke="#C9D3DC"/><path d="M0 16 C-14 4 -12 -8 -2 -4 M0 16 C8 0 16 -6 14 6 M0 16 C2 2 -2 -10 4 -12" stroke="' + G + '" stroke-width="5" fill="none" stroke-linecap="round"/></g>' +
      '<ellipse cx="80" cy="154" rx="20" ry="6" fill="' + S + '"/><circle cx="72" cy="148" r="6" fill="#E3A33B"/><circle cx="84" cy="147" r="6" fill="#B7432F"/>',
      sub),

    bathroom: svg(
      '<rect width="400" height="300" fill="url(#pTile)"/>' +
      '<rect y="250" width="400" height="50" fill="url(#pHex)"/>' +
      '<rect x="240" y="30" width="150" height="220" fill="#DCE6EE"/><rect x="240" y="30" width="150" height="220" fill="#FFF" opacity=".35"/>' +
      '<path d="M240 30v220" stroke="#B9C6D1" stroke-width="4"/><path d="M262 48 l28 0 M262 60 l18 0" stroke="#FFF" stroke-width="4" stroke-linecap="round" opacity=".8"/>' +
      '<path d="M340 60 v-20 h30" stroke="#8D98A2" stroke-width="5" fill="none"/><ellipse cx="340" cy="64" rx="16" ry="5" fill="#8D98A2"/>' +
      '<g stroke="#9CC3DD" stroke-width="2" stroke-linecap="round" opacity=".9"><path d="M330 74v20M340 74v26M350 74v18"/></g>' +
      '<rect x="40" y="40" width="140" height="96" rx="48" fill="#E8F0F6" stroke="' + S + '" stroke-width="4"/>' +
      '<path d="M66 70 l30 -14 M70 86 l50 -24" stroke="#FFF" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="30" y="160" width="160" height="10" rx="2" fill="#FFF" stroke="#C9D3DC"/>' +
      '<rect x="36" y="170" width="148" height="66" fill="' + wood + '"/><path d="M110 170v66" stroke="' + woodD + '" stroke-width="2"/>' +
      '<g fill="' + S + '"><rect x="96" y="196" width="3" height="16"/><rect x="121" y="196" width="3" height="16"/></g>' +
      '<rect x="36" y="236" width="148" height="6" fill="' + woodD + '"/>' +
      '<path d="M104 160 v-16 h16" fill="none" stroke="#8D98A2" stroke-width="4"/>' +
      '<g transform="translate(206 222)"><rect x="-12" y="0" width="24" height="28" rx="4" fill="' + N + '"/><path d="M0 0 C-20 -16 -16 -36 -4 -28 M0 0 C10 -24 22 -30 22 -14 M0 0 C-2 -20 6 -40 10 -40" stroke="' + G + '" stroke-width="6" fill="none" stroke-linecap="round"/></g>' +
      '<rect x="150" y="146" width="8" height="14" rx="2" fill="' + G + '"/><rect x="162" y="150" width="8" height="10" rx="2" fill="' + M + '"/>',
      tile + hex),

    basement: svg(
      '<rect width="400" height="300" fill="#E7ECF1"/>' +
      planks(236, 64, "#B9A58E", "#A08B73") +
      '<g fill="#FFF8E2"><circle cx="80" cy="16" r="5"/><circle cx="200" cy="16" r="5"/><circle cx="320" cy="16" r="5"/></g>' +
      '<g fill="#FFF6D6" opacity=".45"><path d="M70 20 L50 120 H110 L90 20Z"/><path d="M190 20 L170 120 H230 L210 20Z"/><path d="M310 20 L290 120 H350 L330 20Z"/></g>' +
      '<rect x="0" y="228" width="400" height="8" fill="#FFF"/>' +
      '<rect x="130" y="70" width="140" height="80" rx="3" fill="#1A2633"/><rect x="134" y="74" width="132" height="72" fill="#2C4A68"/>' +
      '<path d="M134 146 L190 104 L226 128 L266 98 V146Z" fill="#3F7AA6"/><circle cx="240" cy="92" r="9" fill="#E9C46A"/>' +
      '<rect x="120" y="160" width="160" height="22" fill="' + S + '"/><rect x="124" y="164" width="40" height="14" fill="#5A6068"/><rect x="236" y="164" width="40" height="14" fill="#5A6068"/>' +
      '<rect x="40" y="190" width="200" height="16" rx="6" fill="' + N + '"/>' +
      '<rect x="30" y="200" width="220" height="34" rx="10" fill="' + N + '"/><rect x="40" y="186" width="96" height="28" rx="8" fill="#164773"/><rect x="144" y="186" width="96" height="28" rx="8" fill="#164773"/>' +
      '<rect x="56" y="178" width="30" height="20" rx="6" fill="' + G + '" transform="rotate(-8 71 188)"/>' +
      '<rect x="270" y="210" width="80" height="12" rx="3" fill="' + wood + '"/><rect x="278" y="222" width="6" height="12" fill="' + woodD + '"/><rect x="336" y="222" width="6" height="12" fill="' + woodD + '"/>' +
      '<g fill="#C7D1DA"><rect x="330" y="60" width="70" height="8"/><rect x="345" y="84" width="55" height="8"/><rect x="360" y="108" width="40" height="8"/><rect x="375" y="132" width="25" height="8"/></g>' +
      '<path d="M330 60 L400 0" stroke="' + S + '" stroke-width="4"/>' +
      '<circle cx="306" cy="204" r="6" fill="#B7432F"/>'),

    deck: svg(
      '<rect width="400" height="300" fill="#DCEAF4"/>' +
      '<circle cx="330" cy="54" r="22" fill="#FFF"/>' +
      '<path d="M0 170 C80 150 140 160 200 150 C260 140 320 150 400 140 V200 H0Z" fill="#2A4E6E" opacity=".5"/>' +
      pine(40, 168, .9) + pine(76, 176, .7) + pine(370, 166, .95) +
      '<rect x="0" y="60" width="240" height="150" fill="url(#pSide)"/>' +
      '<rect x="40" y="96" width="70" height="90" fill="#FFF"/><rect x="45" y="101" width="60" height="85" fill="' + sky + '"/><path d="M75 101v85" stroke="#FFF" stroke-width="3"/>' +
      '<rect x="140" y="100" width="60" height="50" fill="#FFF"/><rect x="145" y="105" width="50" height="40" fill="' + sky + '"/><path d="M170 105v40M145 125h50" stroke="#FFF" stroke-width="3"/>' +
      '<path d="M0 186 L400 186 L400 236 L0 236Z" fill="' + wood + '"/>' +
      '<g stroke="' + woodD + '" stroke-width="2"><path d="M0 196h400M0 206h400M0 216h400M0 226h400"/></g>' +
      '<rect x="0" y="236" width="400" height="12" fill="' + woodD + '"/>' +
      '<g fill="#8A6542"><rect x="20" y="248" width="10" height="52"/><rect x="200" y="248" width="10" height="52"/><rect x="370" y="248" width="10" height="52"/></g>' +
      '<rect y="262" width="400" height="38" fill="#7FA36B" opacity=".5"/>' +
      '<g fill="#FFF"><rect x="250" y="120" width="150" height="6"/><rect x="250" y="120" width="6" height="66"/><rect x="394" y="120" width="6" height="66"/></g>' +
      '<g stroke="#FFF" stroke-width="3"><path d="M268 126v60M282 126v60M296 126v60M310 126v60M324 126v60M338 126v60M352 126v60M366 126v60M380 126v60"/></g>' +
      '<g fill="' + G + '"><path d="M150 186 v-28 h30 v28" /><rect x="146" y="160" width="38" height="8" rx="2"/></g>' +
      '<g fill="' + N + '"><rect x="196" y="150" width="34" height="26" rx="4"/><rect x="196" y="176" width="4" height="10"/><rect x="226" y="176" width="4" height="10"/></g>',
      siding),

    exterior: svg(
      '<rect width="400" height="300" fill="#DCEAF4"/>' +
      pine(30, 236, 1.1) + pine(372, 240, 1.2) +
      '<rect y="250" width="400" height="50" fill="#8DB07A"/><path d="M170 250 L230 250 L250 300 L150 300Z" fill="#C8CFD6"/>' +
      '<path d="M80 128 L200 50 L320 128Z" fill="' + N + '"/>' +
      '<rect x="96" y="124" width="208" height="126" fill="#F3F1EA"/>' +
      '<rect x="96" y="124" width="104" height="126" fill="#E1DED3"/>' +
      '<path d="M200 124 v126" stroke="#CFC9B8" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<g fill="#FFF" stroke="' + N + '" stroke-width="4"><rect x="118" y="150" width="48" height="44"/><rect x="234" y="150" width="48" height="44"/></g>' +
      '<g stroke="' + N + '" stroke-width="2"><path d="M142 150v44M118 172h48M258 150v44M234 172h48"/></g>' +
      '<rect x="182" y="196" width="36" height="54" fill="' + G + '"/><circle cx="210" cy="224" r="2.5" fill="' + brass + '"/>' +
      '<g fill="#FFF"><rect x="186" y="80" width="28" height="28"/></g><g fill="' + S + '"><rect x="189" y="83" width="10" height="10"/><rect x="201" y="83" width="10" height="10"/><rect x="189" y="95" width="10" height="10"/><rect x="201" y="95" width="10" height="10"/></g>' +
      '<g stroke="' + S + '" stroke-width="4" stroke-linecap="round"><path d="M70 250 L96 120 M88 250 L114 120"/><path d="M75 226h17M80 200h17M85 174h17M90 148h17"/></g>' +
      '<g transform="translate(118 236)"><rect width="22" height="18" rx="2" fill="' + M + '"/><rect y="-2" width="22" height="5" rx="1" fill="#F3F1EA"/><path d="M2 18 v-6 h18 v6" fill="' + G + '"/></g>' +
      '<g transform="translate(236 120) rotate(30)"><rect x="-4" y="0" width="8" height="26" rx="2" fill="' + wood + '"/><rect x="-14" y="-12" width="28" height="12" rx="3" fill="#F3F1EA" stroke="#CFC9B8"/></g>'),

    flooring: svg(
      '<rect width="400" height="300" fill="#EEF2F5"/>' +
      '<rect x="250" y="30" width="110" height="130" fill="' + sky + '" stroke="#FFF" stroke-width="8"/><path d="M305 30v130" stroke="#FFF" stroke-width="5"/>' +
      '<path d="M0 160 H400 V300 H0Z" fill="' + wood + '"/>' +
      '<g stroke="' + woodD + '" stroke-width="1.6" fill="none">' +
      '<path d="M200 160 L-60 300M200 160 L20 300M200 160 L100 300M200 160 L180 300M200 160 L260 300M200 160 L340 300M200 160 L420 300M200 160 L500 300"/>' +
      '<path d="M0 176 H400M0 196 H400M0 222 H400M0 256 H400"/></g>' +
      '<path d="M250 160 L190 300 H330 L360 160Z" fill="#FFF6D6" opacity=".35"/>' +
      '<rect x="0" y="152" width="400" height="10" fill="#FFF" stroke="#D3DBE2"/>' +
      '<g transform="translate(60 232) rotate(-6)"><rect width="110" height="16" fill="#D9B48C" stroke="' + woodD + '"/><rect y="20" width="110" height="16" fill="#CDA67D" stroke="' + woodD + '"/></g>' +
      '<g transform="translate(70 120)"><rect x="-14" y="20" width="28" height="22" rx="3" fill="' + N + '"/><path d="M0 20 C-22 6 -18 -18 -4 -10 M0 20 C10 -10 26 -14 24 4 M0 20 C0 -6 4 -26 12 -26" stroke="' + G + '" stroke-width="7" fill="none" stroke-linecap="round"/></g>'),

    windows: svg(
      '<rect width="400" height="300" fill="#DCEAF4"/>' +
      '<rect x="0" y="0" width="400" height="300" fill="#3F6E8F"/>' +
      '<g stroke="#2F5A78" stroke-width="2"><path d="M0 20h400M0 40h400M0 60h400M0 80h400M0 100h400M0 120h400M0 140h400M0 160h400M0 180h400M0 200h400M0 220h400M0 240h400"/></g>' +
      '<rect x="140" y="70" width="120" height="186" fill="#FFF"/>' +
      '<rect x="152" y="80" width="18" height="168" fill="' + sky + '"/><rect x="230" y="80" width="18" height="168" fill="' + sky + '"/>' +
      '<rect x="176" y="80" width="48" height="168" fill="' + G + '"/>' +
      '<g fill="none" stroke="#185737" stroke-width="2"><rect x="182" y="90" width="36" height="60"/><rect x="182" y="160" width="36" height="78"/></g>' +
      '<circle cx="216" cy="166" r="3" fill="' + brass + '"/>' +
      '<rect x="130" y="256" width="140" height="14" fill="#C8CFD6"/><rect x="120" y="270" width="160" height="30" fill="#B5BEC6"/>' +
      '<g fill="#FFF"><rect x="22" y="70" width="90" height="110"/><rect x="288" y="70" width="90" height="110"/></g>' +
      '<g fill="' + sky + '"><rect x="30" y="78" width="74" height="94"/><rect x="296" y="78" width="74" height="94"/></g>' +
      '<g stroke="#FFF" stroke-width="5"><path d="M67 78v94M30 125h74M333 78v94M296 125h74"/></g>' +
      '<g stroke="#FFF" stroke-width="3" opacity=".7" stroke-linecap="round"><path d="M38 96 l14 -12M304 96 l14 -12"/></g>' +
      '<rect x="18" y="180" width="98" height="8" fill="#FFF"/><rect x="284" y="180" width="98" height="8" fill="#FFF"/>' +
      '<g transform="translate(110 260)"><rect x="-14" y="0" width="28" height="30" rx="3" fill="' + N + '"/><circle cx="-6" cy="-4" r="9" fill="' + G + '"/><circle cx="6" cy="-8" r="10" fill="' + G + '"/><circle cx="2" cy="-18" r="8" fill="#2B8A57"/></g>' +
      '<g transform="translate(290 260)"><rect x="-14" y="0" width="28" height="30" rx="3" fill="' + N + '"/><circle cx="-6" cy="-4" r="9" fill="' + G + '"/><circle cx="6" cy="-8" r="10" fill="' + G + '"/><circle cx="2" cy="-18" r="8" fill="#2B8A57"/></g>'),

    office: svg(
      '<rect width="400" height="300" fill="#EDF1F4"/>' +
      '<rect y="230" width="400" height="70" fill="#9AA6B1"/><g stroke="#8B97A2"><path d="M0 250h400M0 272h400"/></g>' +
      '<rect x="0" y="0" width="400" height="22" fill="#FFF"/><g fill="#E9F2F9"><rect x="40" y="6" width="60" height="10" rx="5"/><rect x="170" y="6" width="60" height="10" rx="5"/><rect x="300" y="6" width="60" height="10" rx="5"/></g>' +
      '<rect x="220" y="40" width="170" height="190" fill="#CFE0EC" opacity=".55"/>' +
      '<g stroke="' + S + '" stroke-width="4"><path d="M220 40v190M305 40v190M390 40v190M220 40h170"/></g>' +
      '<rect x="220" y="120" width="170" height="6" fill="' + G + '" opacity=".8"/>' +
      '<rect x="236" y="170" width="140" height="8" fill="' + wood + '"/><rect x="250" y="178" width="5" height="52" fill="' + S + '"/><rect x="358" y="178" width="5" height="52" fill="' + S + '"/>' +
      '<g fill="' + N + '"><rect x="262" y="148" width="40" height="22" rx="2"/><rect x="318" y="148" width="40" height="22" rx="2"/></g>' +
      '<rect x="20" y="60" width="180" height="90" fill="' + N + '"/>' +
      '<text x="110" y="112" text-anchor="middle" font-family="Barlow Semi Condensed, Arial, sans-serif" font-weight="700" font-size="22" fill="#FFF" letter-spacing="3">RECEPTION</text>' +
      '<rect x="20" y="170" width="180" height="60" fill="#FFF" stroke="#C9D3DC"/><rect x="14" y="164" width="192" height="8" fill="' + wood + '"/>' +
      '<rect x="20" y="196" width="180" height="6" fill="' + G + '"/>' +
      '<g transform="translate(206 220)"><rect x="-10" y="0" width="20" height="10" fill="' + S + '"/><circle cx="0" cy="-10" r="12" fill="' + G + '"/><circle cx="-8" cy="-18" r="8" fill="#2B8A57"/></g>' +
      '<rect x="60" y="150" width="34" height="14" rx="2" fill="#1A2633"/>'),

    restoration: svg(
      '<rect width="400" height="300" fill="#F1F3F5"/>' +
      '<rect y="246" width="400" height="54" fill="#B9A58E"/><rect y="240" width="400" height="8" fill="#FFF"/>' +
      '<rect x="0" y="0" width="200" height="240" fill="#E6E2D8"/>' +
      '<path d="M40 40 C60 60 30 90 70 120 C100 140 60 180 90 220 L30 230 C10 180 20 120 10 80Z" fill="#CDBF9F" opacity=".7"/>' +
      '<rect x="110" y="60" width="70" height="120" fill="#C8B79A"/>' +
      '<g stroke="#A68D6A" stroke-width="5"><path d="M120 60v120M150 60v120M180 60v120"/></g>' +
      '<rect x="110" y="60" width="70" height="120" fill="none" stroke="#7E6A4D" stroke-width="2" stroke-dasharray="6 4"/>' +
      '<rect x="200" y="0" width="200" height="240" fill="#F7F8F9"/>' +
      '<g stroke="#E1E6EA" stroke-width="10"><path d="M260 0v240M340 0v240"/></g>' +
      '<rect x="230" y="60" width="140" height="100" fill="#FFF" stroke="#E3E8EC"/>' +
      '<path d="M200 0v240" stroke="' + G + '" stroke-width="4"/>' +
      '<g transform="translate(200 24)"><rect x="-42" y="-14" width="84" height="28" rx="14" fill="' + N + '"/><text x="0" y="5" text-anchor="middle" font-family="Barlow Semi Condensed, Arial, sans-serif" font-weight="700" font-size="13" fill="#FFF" letter-spacing="2">REPAIRED</text></g>' +
      '<g transform="translate(70 214)"><path d="M0 0 L20 -36 L40 0Z" fill="#E3A33B"/><rect x="18" y="-24" width="4" height="12" fill="#1A2633"/><circle cx="20" cy="-7" r="2" fill="#1A2633"/></g>' +
      '<g transform="translate(300 222)"><rect x="-26" y="-6" width="52" height="24" rx="3" fill="' + M + '"/><rect x="-26" y="-10" width="52" height="6" fill="#C7D1DA"/><path d="M-10 -10 l20 -24" stroke="' + wood + '" stroke-width="5" stroke-linecap="round"/><rect x="2" y="-44" width="22" height="12" rx="2" fill="#B8C1C9" transform="rotate(-50 13 -38)"/></g>')
  };
})();

/* Before / after basement scenes for the comparison slider */
window.SIP_BEFORE = '<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
  '<rect width="800" height="450" fill="#8E9398"/>' +
  '<rect y="340" width="800" height="110" fill="#7A7F84"/><path d="M60 380 C140 370 180 400 260 390 M420 410 C500 400 560 420 640 405" stroke="#6A6F74" stroke-width="3" fill="none"/>' +
  '<rect y="0" width="800" height="46" fill="#6B5A45"/>' +
  '<g fill="#A6896A"><rect x="30" y="0" width="22" height="60"/><rect x="150" y="0" width="22" height="60"/><rect x="270" y="0" width="22" height="60"/><rect x="390" y="0" width="22" height="60"/><rect x="510" y="0" width="22" height="60"/><rect x="630" y="0" width="22" height="60"/><rect x="750" y="0" width="22" height="60"/></g>' +
  '<g fill="#B79A78"><rect x="80" y="60" width="16" height="280"/><rect x="200" y="60" width="16" height="280"/><rect x="320" y="60" width="16" height="280"/><rect x="440" y="60" width="16" height="280"/><rect x="560" y="60" width="16" height="280"/><rect x="680" y="60" width="16" height="280"/><rect x="0" y="60" width="800" height="14"/><rect x="0" y="326" width="800" height="14"/></g>' +
  '<path d="M0 120 H800" stroke="#5C6166" stroke-width="6"/><path d="M500 40 V300" stroke="#C9A44C" stroke-width="5"/>' +
  '<circle cx="400" cy="90" r="9" fill="#F4E7B5"/><path d="M400 46 V82" stroke="#1A2633" stroke-width="2"/>' +
  '<path d="M370 98 L310 300 H490 L430 98Z" fill="#F4E7B5" opacity=".18"/>' +
  '<g fill="#B2895D"><rect x="600" y="296" width="70" height="44"/><rect x="620" y="262" width="56" height="34"/></g><path d="M600 318 H670M620 280 H676" stroke="#8E6A43" stroke-width="2"/>' +
  '<rect x="110" y="300" width="60" height="40" rx="4" fill="#5D6E7E"/>' +
  '<text x="40" y="420" font-family="Barlow Semi Condensed, Arial, sans-serif" font-weight="700" font-size="26" fill="#FFFFFF" letter-spacing="4">BEFORE</text></svg>';

window.SIP_AFTER = '<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
  '<rect width="800" height="450" fill="#E9EDF1"/>' +
  '<rect y="352" width="800" height="98" fill="#B9A58E"/><g stroke="#A08B73" stroke-width="2"><path d="M0 376h800M0 404h800M0 432h800M140 352v24M420 352v24M700 352v24M60 376v28M300 376v28M560 376v28M200 404v28M480 404v28M740 404v28"/></g>' +
  '<rect y="342" width="800" height="12" fill="#FFF"/>' +
  '<rect y="0" width="800" height="30" fill="#FFF"/>' +
  '<g fill="#FFF8E2"><circle cx="160" cy="34" r="7"/><circle cx="400" cy="34" r="7"/><circle cx="640" cy="34" r="7"/></g>' +
  '<g fill="#FFF6D6" opacity=".5"><path d="M150 40 L110 200 H210 L170 40Z"/><path d="M390 40 L350 200 H450 L410 40Z"/><path d="M630 40 L590 200 H690 L650 40Z"/></g>' +
  '<rect x="520" y="70" width="240" height="200" fill="#0B3558"/>' +
  '<g fill="#FFF"><rect x="540" y="96" width="60" height="70"/><rect x="620" y="96" width="60" height="70"/><rect x="700" y="96" width="40" height="70"/></g>' +
  '<g fill="#1F6B45"><rect x="548" y="140" width="10" height="26"/><rect x="562" y="130" width="12" height="36"/><rect x="630" y="146" width="40" height="8"/><circle cx="720" cy="150" r="12"/></g>' +
  '<rect x="520" y="190" width="240" height="8" fill="#C9A27B"/>' +
  '<rect x="280" y="110" width="200" height="116" rx="4" fill="#1A2633"/><rect x="286" y="116" width="188" height="104" fill="#2C4A68"/><path d="M286 220 L360 160 L410 196 L474 150 V220Z" fill="#3F7AA6"/><circle cx="430" cy="146" r="12" fill="#E9C46A"/>' +
  '<rect x="250" y="240" width="260" height="30" fill="#4A4F55"/>' +
  '<rect x="40" y="276" width="330" height="22" rx="8" fill="#0B3558"/><rect x="26" y="292" width="358" height="52" rx="14" fill="#0B3558"/><rect x="44" y="270" width="160" height="40" rx="10" fill="#164773"/><rect x="210" y="270" width="160" height="40" rx="10" fill="#164773"/>' +
  '<rect x="70" y="262" width="44" height="30" rx="8" fill="#1F6B45" transform="rotate(-8 92 277)"/>' +
  '<rect x="420" y="310" width="120" height="14" rx="4" fill="#C9A27B"/><rect x="432" y="324" width="8" height="20" fill="#AD845C"/><rect x="520" y="324" width="8" height="20" fill="#AD845C"/>' +
  '<g transform="translate(60 120)"><rect x="-22" y="80" width="44" height="40" rx="5" fill="#FFF" stroke="#C9D3DC"/><path d="M0 80 C-34 56 -28 18 -6 30 M0 80 C14 34 40 26 36 56 M0 80 C-2 40 6 6 18 6" stroke="#1F6B45" stroke-width="10" fill="none" stroke-linecap="round"/></g>' +
  '<text x="760" y="430" text-anchor="end" font-family="Barlow Semi Condensed, Arial, sans-serif" font-weight="700" font-size="26" fill="#0B3558" letter-spacing="4">AFTER</text></svg>';
