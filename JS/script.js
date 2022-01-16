let bukkDescription = `
<h2 class="padding center">Bükk</h2>
            <img class="img:fluid radius float img-thumbnail" src="IMG/Bukkfa_001.jpg" alt="">
            <p>A bükk sokféleképpen hasznosítható kemény lombos faanyag, Magyarországon elsősorban az európai bükk (Fagus sylvatica) anyaga.</p>
            <p>Közép-európai flóraelem. Hegyvidéki fafaj. Termőhelyigényes, szélsőségeket nem tűrő, a kései fagyokra érzékeny. Páradús levegőt igényel, mészkedvelő.</p>
            <p>20–40 m magas egyenes, hengeres törzsű fa. Kérge háncsrosttól mentes, sima, szürkészöldes színű. Kéregvastagsága 1–2 cm.</p>
            <p>Halványsárgás, világosszürkés, rózsaszínes tónusú anyag. A szíjács és a geszt nehezen különíthető el. Az időnként előforduló vörösesbarna álgeszt a fa betegségének tünete. Kis méretű, szórtan elhelyezkedő pórusai szemmel nemigen láthatók, az évgyűrűk kései pásztájában ritkábbak, ezért itt a fa sötétebb színű. Bélsugarai szélesek, 1 mm körüliek, a sugármetszeten tükröket alkotnak, a húrmetszeten vöröses kis orsókként látszanak.</p>
`

let cseresznyeDescription = `
<h2 class="padding center">Cseresznye</h2>
            <img class="img:fluid radius float img-thumbnail" src="IMG/Cseresznye_001.jpg" alt="">
            <p>A cseresznye (Prunus subg. Cerasus) a rózsafélék (Rosaceae) közé tartozó Prunus nemzetség alnemzetsége.</p>
            <p>Képviselőik az északi félgömb mérsékelt égövi területein őshonosak: két fajuk Amerikában, három Európában, a többi Ázsiában.</p>
            <p>Ma már több mint ezer nemesített fajtája ismeretes. Nemesített cseresznyéből éves szinten 2007-ben az egész világon mintegy 2 millió tonnát termesztettek. Ennek mindegy 40%-át az USA, kb. 13%-át Európa állítja elő. Törökország a világ legnagyobb cseresznyetermelője, az USA a második.</p>
            <p>A cseresznyefa Olaszországtól Norvégiáig egyaránt jól termeszthető. Ennek ellenére az ökológiai adottságok apróbb eltérései döntően befolyásolhatják a termesztés sikerét. Kiemelkedő a gyökérzet levegőigénye, amelyet azok a mélyrétegű, közép kötött vályogtalajok elégítenek ki, ahol a vízzáró réteg legalább 2 méteres mélységben helyezkedik el. A cseresznyefa az összes gyümölcsfaj közül legjobban szenved a talaj levegőtlenségétől. Nagyon alacsony humusztartalmú talajokra nem érdemes cseresznyét sem telepíteni. </p>
`

let dioDescription = `
<h2 class="padding center">Dió</h2>
            <img class="img:fluid radius float img-thumbnail" src="IMG/Diófa_metszete_001.jpg" alt="">
            <p>A dió vagy diófa (Juglans) a diófélék vagy diófafélék (Juglandaceae) családjába tartozó nemzetség.</p>
            <p>Közepes, vagy nagy termetű (10–40 m magas) lombhullató fák, 20–90 cm-es, 5-25 levélkéből összetett leveleik páratlanul szárnyaltak, termésük diótermés (csonthéjashoz hasonló, zárt kupacsú makk). </p>
            <p>A nemzetség 21 faja az Óvilágban Délkelet-Európától Japánig, az Újvilágban Délkelet-Kanadától nyugatra Kaliforniáig, délre Argentínáig előfordul. A génusz neve, Juglans a Jovis glans, azaz „Jupiter makkja” kifejezésből ered – átvitt értelemben „istennek való termés”. </p>
            <p>A Kárpát-medencében két fajukkal találkozhatunk gyakrabban, az egyik az ehető diót termő közönséges dió (J. regia), a másik az Észak-Amerikából származó, Európában parkokban díszfaként ültetett, illetve néhol erdőgazdasági jelentőségű fekete dió (J. nigra). </p>
`

let mahagoniDescription = `
<h2 class="padding center">Mahagóni</h2>
            <img class="img:fluid radius float img-thumbnail" src="IMG/Mahagóni_001.jpg" alt="">
            <p>A mahagóni vagy mahagónifa elnevezést eredetileg a Karib-tenger szigeteiről, Közép-Amerikából származó Swietenia mahagoni lombos fafajra, illetve elsősorban az abból nyert faanyagra használták, később a Swietenia nemzetséghez tartozó egyéb fákat, azok nagyon hasonló faanyagát is így nevezték. </p>
            <p>Egyéb kereskedelmi elnevezései: származási helytől függően Honduras-mahagóni, Tabasco-mahagóni stb., spanyol mahagóni, caoba, madeira, coabilla, acajou. </p>
            <p>A mahagóni szó sok olyan faanyag kereskedelmi nevében is szerepel, mely színében, megjelenésében, struktúrájában a Swietenia mahagónira emlékeztet, annak helyettesítésére használható, elsősorban az afrikai Khaya nemzetség tagjai, azok faanyagai (afrikai mahagóni), vagy az Entandrophragma nemzetség egyes tagjai esetében (Sipo mahagóni, Sapelli mahagóni). </p>
            <p>Jellemzően vöröses színű, homogén szerkezetű, középlágy–középkemény, nagyon jól megmunkálható, dekoratív faanyag. </p>
`

let descriptionContainer = document.querySelector('#wood-description-container');


document.querySelector('#bukk-button').addEventListener('click', () => {
    descriptionContainer.innerHTML = bukkDescription;
})

document.querySelector('#cseresznye-button').addEventListener('click', () => {
    descriptionContainer.innerHTML = cseresznyeDescription;
})

document.querySelector('#dio-button').addEventListener('click', () => {
    descriptionContainer.innerHTML = dioDescription;
})

document.querySelector('#mahagoni-button').addEventListener('click', () => {
    descriptionContainer.innerHTML = mahagoniDescription;
})