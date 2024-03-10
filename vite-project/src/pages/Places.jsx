import React from 'react'
import { IMAGES } from '../data';
import ImgThumbnail from '../components/ImgThumbnail';
import { useState } from 'react';
import Card from '../components/Card';


function Places() {
  return (
    <>
    <br></br>
      <h4>TARİHİ YERLER</h4>
     <hr></hr>
     <div className="card-container">
     <Card title="ULUCAMİ" imgSrc="https://www.kiralikhayaller.com/uploads/ulu%20cami-01.jpg" content="Bursa Ulu Cami, Bursa’da I. Bayezid tarafından 1396-1400 yılları arasında yaptırılmış ulu camidir.

Bursa’nın tarihi sembollerinden olan cami, Bursa kent merkezinde, Atatürk Caddesi üzerindedir. Çok ayaklı cami şemasının en klasik ve anıtsal örneği sayılır. Yirmi kubbeli yapı, Türkiye’deki iç cemaat yeri en geniş camidir. Mimarın Ali Neccar veya Hacı İvaz olduğu sanılmaktadır. Caminin kündekari tekniği ile yapılmış minberi Selçuklu oyma sanatından Osmanlı ahşap oymacılığı sanatına geçişin en önemli örneklerinden biri kabul edilen değerli bir sanat eseridir.

Caminin duvarlarında bulunan 19. yüzyılın ikinci yarısında ve 20. yüzyılın başlarında farklı hattatlar tarafından yazılmış 192 adet hat levhası ve duvar yazısı, hat sanatının özgün örnekleri arasında gösterilir.

Caminin iç mekanında, tepesi açık bir kubbenin altında bulunan şadırvan, Ulu Cami’nin dikkat çekici özelliklerindendir."/>

     <Card title="KOZAHAN" imgSrc="https://www.gotobursa.com.tr/uploads/2020/09/ahmet-cetin-kozahanda-issiz-zamanlar_large.jpg" content="Koza Han 15. yüzyıl sonlarında II. Bayezid tarafından mimar Abdül ula bin Pulat Şah'a İstanbul'daki eserlerine vakıf olarak Bursa'da yaptırılmış handır.

Hanlar Bölgesi'nde Ulu Cami ile Orhan Camii arasında bulunur. Osmanlı devri han ve kervansaray mimarisinde -ortasındaki mescit bakımından - eski gelenekleri sürdüren ve bütünlüğünü koruyabilmiş olan bir eserdir. Anıtsal giriş kapısı ve avlusunda bulunan altı şadırvanlı köşk mescit Bursa'nın simgeleri arasında kabul edilir.

Geçmişte Yeni Han, Han-ı Cedid, Han-ı Cedid-i Evvel (Pirinç Han’ın yapılmasından sonra), Han-ı Cedid-i Amire, Yeni Kervansaray, Beylik Han, Beylik Kervansaray, Simkeş Han, Sırmakeş Han gibi birçok adla anılmış olan yapı, içinde ipek kozası ticareti yapıldığı için Koza Han adıyla anılır olmuştur. Koza ticareti için Bursa'ya gelen ipek tüccarları konaklama hizmeti veren handa altlı üstlü iki oda tutmuşlar; üstteki odayı ticari işlerini görmek ve konaklamak, alttaki odayı da ticaret mallarını depolamada kullanmışlardır. Han, günümüzde ticarî işlevini korumaktadır."/>
     
     
     <Card title="YEŞİL TÜRBE" imgSrc="https://www.kulturportali.gov.tr/contents/images/20062014_6ffd268f-2de3-4e0a-bf10-c0fa9706881d.jpg" content="Yeşil Türbe, I. Bayezid'in oğlu Mehmet Çelebi tarafından 1421 yılında yaptırılmıştır. Yeşil Külliye'nin bir parçası olan türbenin mimarı Hacı İvaz Paşa’dır. Bursa'nın sembolü hâline gelen yapı şehrin her yerinden görülebilecek bir konuma sahiptir. I. Mehmed sağlığında türbeyi yaptırmış, 40 gün sonra da ölmüştür. Türbede Çelebi Sultan Mehmet ile oğulları Şehzade Mustafa, Mahmut ve Yusuf ile kızları Selçuk Hatun, Sitti Hatun, Hafsa Hatun, Ayşe Hatun ve dadısı Daya Hatuna ait olmak üzere toplam 9 sanduka bulunmaktadır."/>
     
     <Card title="MURADİYE KÜLLİYESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2021/03/muradiye-hazireler-4_1_large_large.jpg" content="Muradiye Külliyesi, Sultan II. Murad'ın Bursa'da 1425-1426 yıllarında yaptırdığı külliye. Bulunduğu semte de ismini verir.

Şehrin etrafa doğru yayılmasını ve açılımını sağlamak amacıyla yaptırılan külliye, Muradiye Camii, hamam, medrese, imaret ve sonraki yıllarda yaptırılmış 12 türbeden oluşur. Sonraki yıllarda çok sayıda hanedan mensubunun gömülmesiyle saraya ait bir kabristan görünümü kazanmış ve İstanbul’dan sonra en çok saraylıyı barındıran ikinci hazire haline gelmiştir. Bursa'nın çeşitli istimlaklerle kaldırılan mezar taşları ve türbelerinin kitabeleri de caminin haziresine getirilmiştir.

Külliye, 2014 yılında “Bursa ve Cumalıkızık: Osmanlı İmparatorluğu'nun Doğuşu” Dünya Miras Alanı 'nın bileşenlerinden birisi olarak UNESCO Dünya Mirası Listesi'ne girmiştir."/>
     
     <Card title="TOPHANE SAAT KULESİ" imgSrc="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/bursa-saat-kulesi-36789.webp" content="Tophane Saat Kulesi Bursa'da Osmanlı padişahı II. Abdülhamit'in tahta çıkışının 29. yılı şerefine inşa edildiği rivayet edilen tarihî saat kulesi.

Osmanlı dönemi mimarisini yansıtan önemli bir anıtsal eserdir. Tophane Parkı içinde, İmparatorluğun kurucusu Osman Gazi ile ikinci padişahı Orhan Gazi'nin türbelerinin arkasında, eski adı Meydanı-ı Osmaniye olan Tophane Meydanı'ndadır.Bulunduğu yerden panoramik Bursa manzarasının görünmesi dolayısıyla, bir yangın kulesi olarak da kullanılmıştır."/>
     <Card title="IRGANDI KÖPRÜSÜ" imgSrc="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/irgandi-koprusu-36783.webp" content="Irgandı Köprüsü, Bursa kentinde, zanaatçıların geleneksel el sanatlarını icra ettiği köprü. 1442 yılında Irgandılı Ali’nin oğlu Hacı Muslihiddin tarafından inşa edildi. 1854 yılında Büyük Bursa Depremi'nde hasar gördü. Türk Kurtuluş Savaşı’nda Yunan ordusu tarafından bombalandı. Irgandı Köprüsü, 2004 yılında Osmangazi Belediyesi tarafından yenilendi ve kullanıma açıldı. "/>
     
     <Card title="BALİBEY HAN" imgSrc="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/balibey-han-36784.webp" content=" Balibey Han, Bursa'da Kapalıçarşı'daki dükkanlara mal satmak ya da mal almak için kent dışından gelen kafilelerin konaklama ihtiyaçlarını gidermek amacıyla 15. yüzyıl sonlarında yaptırılmış üç katlı handır.

Osmanlı Devleti vezirazamlarından Bayezid Paşa'nın kardeşi olduğu sanılan Niğbolu Sancak Beyi Hamza Bey'in oğlu Bali Bey tarafından Fatih Sultan Mehmed devrinde yaptırılmıştır.

Hisar Kapı altında, Kırkmerdivenler yanında; Okçu Baba Türbesi'nin güney tarafında yer alır. 64 odalı yapı, Osmanlı Devleti'nin ilk üç katlı hanı olma özelliğini taşır.

 2009 yılından bu yana geleneksel el sanatları çarşısı olarak kullanılmaktadır."/>

 <Card title="CUMALIKIZIK" imgSrc="https://www.kulturportali.gov.tr/contents/images/20171004104037141_02Bursa%20CUMALIKIZIK%20Koyu%20Murat%20OCAL%20(5).jpg" content="2014 yılında UNESCO Dünya Kültür Mirası Listesi’ne kabul edilen Cumalıkızık Köyü, 700 yıldan uzun tarihi ve Osmanlı mimarisinin en güzel örneklerini görebileceğiniz köy evleri ile tam anlamıyla bir açık hava müzesi. Bursa tarih ve kültür gezilerinin önemli bir adresi olan ve dünyanın her yerinden gelen fotoğrafçıların ilgisini çeken Cumalıkızık Köyü, sizi modern dünyanın karmaşasından alıp Osmanlı dönemine geri götürecek.Gezinizde Cumalıkızık Etnografya Müzesi’nde köy halkının yüzlerce yıllık günlük yaşamından kareler ve kişisel eşyalar görebilir veya asırlardır hizmet vermeye devam eden tarihi Cumalıkızık Camii'ni ziyaret edebilirsiniz. Cumalıkızık Köyü, aynı zamanda köylüler tarafından yetiştirilen tamamı organik ürünlerle hazırlanan köy kahvaltıları için de ziyaret ediliyor."/>


 </div>
 <h4>MÜZELER</h4>
 
 <hr></hr>
 <div className="card-container">
     <Card title="ATATÜRK EVİ MÜZESİ" imgSrc="https://www.kulturportali.gov.tr/contents/images/24012013_85891592-dbee-47e5-afe0-8f576471bef2.JPG" content="Bursa'nın Osmangazi ilçesinde, Çekirge Caddesi üzerinde bulunan köşkün yapımı 1895'te tamamlandı. Yapının mimarı Miralay Mehmet Bey'dir. Aynı zamanda Mustafa Kemal Atatürk'ün emriyle yaptırılmış olan Çelik Palas'ın hemen yanında yer almaktadır. Atatürk'ün Bursa'yı ikinci ziyaretinde Bursa Belediyesi bu binayı mimarı Miralay Mehmet Bey'den satın alarak Atatürk'e armağan etmiştir ve bundan sonraki Bursa ziyaretlerinde Atatürk bu köşkte kalmıştır. 1 Şubat 1938 tarihinde Atatürk, Bursa Belediye Başkanına verdiği mektupta Bursalıların kendisine karşı gösterdikleri sevgiye teşekkür etmiş, kendisine hediye edilen bu köşkü belediyeye bağışladığını yazmıştır.

Köşk 1965 yılında onarıma girdikten sonra 29 Ekim 1973 tarihinde Cumhuriyet'in 50. yılında müzeye dönüştürülerek Atatürk Müzesi adıyla ziyarete açılmıştır."/>

     <Card title="HÜNKAR KÖŞKÜ" imgSrc="https://www.gotobursa.com.tr/uploads/2021/03/_izz2387_large_large.jpg" content=" Hünkâr Köşkü Müzesi, Bursa’da Uludağ’ın eteklerindeki Temenyeri’de bulunan tarihî yapıda 2003 yılında ziyarete açılan bir müze.

Osmanlı Sultanı Abdülmecid devrinde av köşkü olarak yapılan bina, Osmanlı sultanlarının ve Bursa ziyaretleri sırasında Atatürk’ün konakladığı bir mekandır.

Müzede köşkü konut olarak kullanmış üç padişah ve Atatürk’e ait silikon heykeller, yemek takımları, şahsi giysiler sergilenir. Bahçesindeki müştemilat binası 2009'dan beri sosyal tesis olarak kullanılır."/>
     <Card title=" BURSA KENT MÜZESİ" imgSrc="https://www.kulturportali.gov.tr/repoKulturPortali/large/08042013/4bc53854-797a-4b7a-bc8f-756a159fc0ab.JPG?format=jpg&quality=50" content=" Bursa Kent Müzesi, 2004 yılından bu yana kentin eski adliye binasında hizmet veren, Bursa’nın 7000 yıllık bir zaman diliminde geçirdiği değişim ve dönüşümlerin sergilendiği müzedir.Müzede Bursa’da yaşamış 6 Osmanlı padişahının balmumu heykelleri, geleneksel ticaret hayatını canlandıran dekorlar, kentin topoğrafik maketi gibi objelerle şehir hakkında bilgi sunulmaktadır.Bursa Kent Müzesi, kentin merkezi konumundaki Heykel Meydanı'nda, Atatürk Anıtı'nın güneyinde, Bursa Valilik Binası'nın yanında yer almaktadır."/>

     <Card title="KARAGÖZ MÜZESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2021/03/_izz9061_1_large.jpg" content=" 2007 yılında açılan Karagöz Müzesi, Bursa Büyükşehir Belediyesi tarafından 1339 yılında Bursa Orhan Cami inşaatı vesilesi ile başlamış olan Karagöz Gölge Oyunu Kültürünü tanıtmak ve gelecek nesillere aktarmak amacıyla kurulmuş özel bir müzedir.

14 Haziran 1997’e kadar trafo binası olarak kullanılan yapı Bursa Büyükşehir Belediye’si tarafından öncelikle Karagöz Evine ve daha sonra 2007 yılında tekrar yapılandırılarak Türkiye’nin ilk ve tek Karagöz Müzesi’ne dönüştürülmüştür. "/>

     <Card title="ZİNDAN KAPI" imgSrc="https://www.gotobursa.com.tr/uploads/2022/12/dji_0854_large_large.jpg" content="Bursa Büyükşehir belediyesi tarafından 2015 yılında başlatılan restorasyon çalışmalar neticesinde Bursa surlarının 6 kapısından biri olan Zindankapı yeniden hayat buldu. 17 Ekim 2021 yılında hizmete açılan Zindankapı’da buraya ismini veren zindanlar güncel sanat galerisi olarak işlevlendirildi ve Bursa surlarının tarihsel süreçleri teknoloji ve interaktif alanlarla ziyaretçiye sunulmak üzere düzenlendi.Bursa surlarının tarihi M.Ö 2. yüzyıla dayanmaktadır. Bitinya kralı I. Prusias döneminde inşa edilen surlar, Roma ve Bizans daha sonra ise Osmanlılar tarafından 19.yüzyıla kadar çeşitli zamanlarda onarımlardan geçirilerek kullanılmaya devam edilmiştir."/>

     <Card title="MERİNOS TEKSTİL SANAYİ MÜZESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2020/08/merinos-tekstil-sanayi-muzesi-3_large.jpg" content="Türkiye’nin ilk ve tek tekstil sanayi müzesi olan Merinos Tekstil Sanayi Müzesi 14 Ekim 2011 tarihinde açılmıştır. Müze sanayi mirasının korunması bağlamında yeni kuşaklara Cumhuriyet dönemi sanayi hamlesi ve Bursa tekstilinin doğuşu ve gelişimini anlatmaktır."/>

     <Card title="BURSA YAŞAM KÜLTÜRÜ MÜZESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2020/09/yasam-kulturu-muzesi_large.jpg" content=".yy Geleneksel Tük Mimarisinin güzel bir örneği olan bu tarihi konak, Bursa’da  deri tabakhaneleri  olan ve Bursa’ya ilk trikotaj makinelerini getiren  Hasan Eşref Efendinin  ailesi için yaptırmış olduğu bir yapıdır.  Ardından Bursa Büyükşehir Belediyesine geçen bu tarihi konağın restorasyonu aslına uygun olarak yapılmış  olup 21 Şubat 2018 yılında Bursa Yaşam Kültürü  Müzesi olarak Bursa’ya ait değerlerin yaşatılması tanıtılması ve gelecek kuşaklara aktarılması adına Bursa’ya kazandırılmıştır."/>

     <Card title="BURSA VAKIF KÜLTÜRÜ MÜZESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2020/08/bursa-vakif-kulturu-muzesi-4_large.jpg" content="Vakıf Kültürü Müzesi Türk- İslam kültürünün hayırseverlik göstergesi olan vakıfların, Osmanlı vakıf kültürünün şekillendirdiği Bursa’da nasıl geliştiği ve dünyaya nasıl yayıldığını aktarabilmek amacı ile 17 Şubat 2017 tarihinde kapılarını ziyaretçilerine açmıştır.

Atatürk Kongre ve Kültür Merkezi içerisinde konumlandırılan Müze; hâlihazırda hizmet veren tarihi Merinos Fabrikasının anılarını günümüze taşıyan “Müzeler Kompleksi”  içerisinde yer almaktadır.

Türk İslam kültürünün hayırseverlik göstergesi olan ve sadece Allahü Tealla’nın rızası gözetilerek han, hamam, aşevleri, kütüphaneler, hastaneler ve okul gibi abidevi yapılar inşa ettiren vakıf kültürünün detaylıca senarize edildiği Bursa Vakıf Kültürü Müzesi’nde yüzlerce farklı eser sergilenmektedir."/>
     
     </div>
     <h4>DOĞAL GÜZELLİKLER</h4>
     <hr></hr>
     <div className='card-container'>
      <Card title= " İZNİK GÖLÜ" imgSrc="https://www.gotobursa.com.tr/uploads/2021/03/rb_n6498_1_large.jpg" content="Bursa'nın en çok ziyaret edilen doğal güzelliklerinden olan İznik Gölü, Türkiye'nin 5. en büyük tatlı su gölü. 11 kilometre genişliğe sahip olan ve her mevsim büyüleyici manzaralarıyla sadece Bursa'da değil Türkiye'de yapılan doğa gezilerinin değişmez adreslerinden biri haline gelen İznik Gölü; sazan, yayın ve gümüş balıklarıyla dolu olduğu için balık avlama etkinlikleri için de tercih ediliyor. Küçük balıkçı tekneleri ile gölde gezilere çıkabilir ve sessiz ortamın tadını çıkarabilirsiniz. Yaz aylarında uçurtma sörfü, deniz paraşütü, kano ve yelken gibi su sporlarını yaparak güzel vakitler geçirebilirsin.

İznik Gölü'nün çevresi iyi düzenlenmiş yürüyüş parkurları, bisiklet yolları ve mesire alanlarıyla doğayla baş başa kalmak için Bursa’da gidebileceğiniz en güzel yerlerden, ayrıca göl kenarında temiz havada tatlı su balıkları tadabileceğiniz balık restoranlar, çay bahçeleri ve kafeler de hizmet veriyor."/>

      <Card title= "TRİLYE " imgSrc="https://cengizselcuk.com/wp-content/uploads/2019/11/trilye-g8c080ccc8_1920.jpg" content="Tirilye, son yıllarda sessiz ve sakin bir tatil yapmak isteyenlerin sıklıkla uğradığı huzurlu bir köy. Hayatın çok yavaş aktığı küçük bir balıkçı köyü olan Tirilye; tarihi Osmanlı konaklarıyla süslü sokakları, asırlık zeytin ve çınar ağaçlarıyla çevrili sahil yolu ve muhteşem gün batımı manzaraları eşliğinde taze deniz ürünleri tadabileceğiniz balık restoranlarıyla Bursa'nın en çok ziyaret edilen yerlerinden biri haline geldi. Kaliteli zeytinleri ve zeytinyağlarıyla da ünlü Tirilye’nin köy pazarında organik zeytinyağları ve yöresel yiyecekler alabilir, küçük ama tertemiz bir plaj olan Tirilye Plajı’nda sıcak yaz aylarında masmavi denizin tadını çıkarabilirsiniz.Roma döneminden kalan ve 14. yüzyılda camiye dönüştürülerek Fatih Camii ismini alan Stefanos Kilisesi, 16. yüzyılda inşa edilen ve günümüzde hala hizmet veren Tirilye Hamamı, 1909 tarihli çarpıcı bir mimari eser olan Taş Mektep ve Kemerli Kilise, Tirilye’de görülebilecek en önemli yerler arasında."/>

      <Card title= "GÖLYAZI" imgSrc="https://www.bizevdeyokuz.com/wp-content/uploads/golyazi-2.jpg" content="Bursa merkezine 44 kilometre uzaklıkta yer alan Gölyazı, Uluabat Gölü kıyısında sunduğu kartpostal güzelliğindeki manzarasıyla Bursa doğa gezilerinin en popüler adresi. Bir köprü ile karaya bağlanan Gölyazı’nın tarihi M.Ö. 6. yüzyıla kadar uzanıyor ve belde, özellikle Roma döneminden önemli tarihi hazinelere ev sahipliği yapıyor. Bizans ve Osmanlı dönemlerinde de güzel konumu ve büyüleyici doğasıyla her zaman ilgi çeken bir yerleşim yeri olan Gölyazı’ya mübadele sonrasında Selanik'ten gelen göçmenler yerleşti ve günümüzde de nüfusun büyük bölümünü Selanik göçmenleri oluşturuyor.

El değmemiş doğası ve büyüleyici göl manzaralarıyla pek çok film ve dizinin sahnesi olan Gölyazı, binlerce yıllık surlarla çevrilmiş göl kenarında sıralanan rengarenk balıkçı tekneleri ve Arnavut kaldırımlı şirin sokaklarını süsleyen taş ve ahşap mimarili Osmanlı evleri ile harika fotoğraflar çekmek için mutlaka uğramanız gereken bir yer. "/>

      <Card title= "AYVAİNİ MAĞARASI " imgSrc="https://gezimanya.com/sites/default/files/styles/800x600_/public/gezilecek-yerler/2019-12/maxresdefault_0.jpg" content="Uluabat Gölü'nün güney tarafında yer alan ve Türkiye'nin hidrolojik olarak aktif mağaralarından biri olmasıyla bilinen Ayvaini Mağarası, aynı zamanda Güney Marmara Bölgesi'nin en uzun mağarası ve Türkiye'nin en uzun 6. mağarası olmasıyla da tüm dünyadan mağaracılıkla ilgilenen insanları kendine çekiyor.

Günümüzden 251 milyon yıl önce başlayıp 65 milyon yıl önce sona eren Mezozoik dönemde oluştuğu tahmin edilen ve 1970 yılında keşfedilen Ayvaini Mağarası; 5,5 kilometreyi bulan uzunluğu, 60'dan fazla mağara göleti, binlerce yılda oluşmuş devasa sarkıtlar, dikitler ve kaya havuzlarıyla eşi benzeri görülmemiş bir manzara sergiliyor. "/>

      <Card title= "SUUÇTU ŞELALESİ " imgSrc="https://www.iyigezdin.com/wp-content/uploads/2019/09/suuctu_uzunpoz.jpg" content="Bursa'nın Mustafakemalpaşa ilçesine 20 dakika sürüş mesafesinde yer alan Suuçtu Şelalesi; doğa yürüyüşleri, bisiklet gezileri veya kamp yapmak için uğrayabileceğiniz Bursa’nın en ünlü tabiat harikalarından biri. Her mevsim yeşil ve mavinin bütün tonlarını görebileceğiniz el değmemiş güzelliğiyle bilinen Suuçtu Şelalesi, yaklaşık 40 metre yükseklikten sarp kayalar arasından dökülen bembeyaz sularıyla görülmeye değer bir manzaraya sahip. "/>

      <Card title= " ULUDAĞ" imgSrc="https://www.olay.com.tr/wp-content/uploads/2018/12/1476_2.jpg" content="Uludağ, 2543 metre yüksekliğiyle Marmara Bölgesi’nin en büyük dağı, Türkiye'nin en popüler kış sporları merkezi ve Bursa'nın en turistik yeri konumunda. 1933 yılında kurulan ilk oteliyle kış turizmi alanında gelişmeye başlayan Uludağ, günümüzde kayak yapmak için Türkiye’de en çok tercih edilen yerlerden biri.

Doğal güzellikleri özenle korunan ve çevresini saran Uludağ Milli Parkı’nda doğa yürüyüşü, dağ bisikleti, kaya tırmanma, dağcılık ve kampçılık gibi pek çok spor yapabileceğiniz Uludağ; uluslararası standartlarındaki kayak merkezleri, 5 yıldızlı otelleri, orman köşkleri ve bungalov otelleriyle özellikle kış aylarında tüm dünyadan turistleri misafir ediyor. Bursa doğa gezileri rotaları arasında olan dağ yamaçlarındaki yemyeşil yaylaları ve buzul gölleriyle benzersiz doğa manzaraları sunan Uludağ’ı sadece kış aylarında değil, ilkbahar ve yaz aylarında da fotoğraf safarileri, jeep gezileri ve bisiklet turlarıyla keşfe çıkabilirsiniz."/>

      <Card title= "OYLAT MAĞARASI " imgSrc="https://www.inegol.bel.tr/Content/Upload/Resim/Buyuk/195-oylat-magarasi-6c23ab32-3fa4-43da-a1f0-c7ffae0db5a0.JPG" content="3 milyon yaşıyla dünyanın keşfedilen en eski ve en büyük 2. mağarası olan Oylat Mağarası, İnegöl ilçesine 17 kilometre uzaklıkta yer alıyor. Mağaracılık tutkunlarının yanı sıra tarih ve arkeoloji meraklılarının da çok ilgisini çeken bu devasa mağaranın koridorları 95 metre yükseklikte. Oylat Deresi'nin batısındaki yamaçlara asılı duran, yürüyüş alanları ve özel aydınlatmalarla gezmeye uygun hale getirilen Oylat Mağarası’nın içindeki binlerce yılda oluşmuş sarkıtlar, dikitler ve mağara göletleri, insanı hayrete düşürecek güzellikle."/>

      <Card title= " KARACABEY LONGOZ ORMANLARI" imgSrc="https://www.bursadameydan.com/static/AW/AW612093_03-x750.webp" content="Sadece Bursa'nın değil Türkiye'nin her yerinden doğa sevenleri kendine çeken ve İstanbul'a yakınlığından dolayı günübirlik gezilerin değişmez adreslerinden olan Karacabey Longoz Ormanı, ülkemizin önemli bir tabiat cenneti. Türkiye'nin en büyük 2. longoz ormanı olan ve ev sahipliği yaptığı ak pelikan, kara leylek, flamingo, kuğu gibi 250'den fazla kuş türü ile bilinen Karacabey Longozu; kar sularıyla beslenen şirin dereleri, çeşit çeşit kuşları görebileceğiniz sazlıkları, iyi düzenlenmiş yürüyüş parkurları, kamp alanları ve bisiklet yollarıyla Bursa'da doğa gezisi yapmak istiyorsanız mutlaka keşfetmeniz gereken yerlerden.

Her köşesinde seyir terasları ve kuş gözlem kulesi bulunan Karacabey Longoz Ormanları içerisinde hizmet veren kır bahçelerinde de tamamı organik ürünlerle hazırlanan kahvaltılılar yapabilirsiniz."/>

      <Card title= "DAĞYENİCE GÖLETİ " imgSrc="https://www.duybunu.com.tr/img/tr/max/bursa/nilufer/gezi-rehberi/dagyenice-goleti/dagyenice-goleti.jpg" content="Bursa merkezine sadece 10 kilometre uzaklıktaki Dağyenice Göleti, hem Türkiye'den hem de dünyanın pek çok ülkesinden sessiz ve ıssız bir ortamda çadırını kurmak isteyen kampçıların ilgisini çeken bir yer. Göletin çevresinde çam ormanları arasında yer alan donanımlı kamp alanlarının yanı sıra yürüyüş parkurları ve dağ bisikleti yolları da hafta sonları temiz havada spor yapmak veya olta balıkçılığı yapmak isteyen kişilerle oldukça hareketli.

Zengin balık çeşitliliğine sahip gölette sandallarla balık avlama turlarına çıkabilir, göleti gezdikten sonra oldukça yakın olan Dağyenice Köyü'ne uğrayabilir ve Osmanlı mimarisini yansıtan iki katlı rengarenk boyalı ahşap evler arasında keyifli bir gezinti yapabilirsiniz. Dağyenice Köyü, yöresel ev yemekleri ve enfes köy kahvaltıları için de ziyaret ediliyor."/>

      <Card title= "SADAĞI KANYONU " imgSrc="https://www.gotobursa.com.tr/uploads/2021/09/218_sadagi-kanyonu-tabiat-parki_1_large.jpg" content="Bursa'nın en büyük ikinci kanyonu olan ve şehir merkezine 63 kilometre uzaklıkta yer alan Sadağ Kanyonu; gürgen, ıhlamur, çam ve çınar ağaçları ile sarılı sarp kaya uçurumlarıyla o kadar güzel ki tabiat parkı ilan edilerek koruma altına alındı. İyi düzenlenmiş ve işaretlenmiş yürüyüş yollarının bulunduğu kanyonu gezerken Roma imparatoru Hadrianus'un yaptırdığı etkileyici kaya hamamlarını da yakından görme şansı bulacaksın.Sadağ Kanyonu ve Tabiat Parkı; mesire alanları, dağ köşkleri ve kanyonun genel manzarasına hakim ahşap seyir terasları ile doğaya kaçmak isteyenlerin mutlaka ziyaret etmesi gereken yerlerden."/>
      
      <Card title="SAİTABAT ŞELALESİ" imgSrc="https://www.gotobursa.com.tr/uploads/2021/04/saitabat-selalesi-6_large.jpg" content="Bursa merkezine 24 kilometre uzaklıktaki Kestel ilçesinde bulunan ve yemyeşil sarp kaya duvarları arasından akan sularıyla etkileyici doğa manzaraları sunan Saitabat Şelalesi, Bursa’nın doğa severler tarafından mutlaka görülmesi gereken doğa harikalarından biri. Yaz aylarında bile serin kalan tertemiz havası ve sessiz atmosferiyle hafta sonu kaçamakları, doğa gezileri ve fotoğraf turlarının değişmez adreslerinde olan şelale, Uludağ'ın eteklerinden gelen buz gibi sularda sıcak yaz günlerinde serinleyebileceğiniz şelale göletiyle de ilgi çekiyor.Alabalık bakımından çok zengin şelalede olta balıkçılığı yapabilir veya şelale çevresindeki alabalık çiftliklerinde taze balıkları ve yöresel mezeleri tadabilirsiniz. Saitabat Şelalesi, Bursa gezilerinde şehir kalabalığında uzaklaşıp harika doğa fotoğrafları çekmek için uğrayabileceğiniz çok sevilen yerlerden."/>

      <Card title=" KOCAYAYLA" imgSrc="https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kocayayla-bursa-7174.webp" content="Uludağ'ın incisi olarak bilinen Kocayayla, Bursa'nın en büyük ve en sevilen mesire alanı. Keles ilçesinin 4 kilometre uzağında yer alan ve çevresi karaçam ormanlarıyla çevrili yemyeşil Kocayayla, aynı zamanda 400.000 m2 alanıyla Türkiye'nin en büyük yaylalarından biri. Deniz seviyesinden tam 1200 metre yükseklikte bulunan ve oksijen seviyesi yüksek havasıyla solunum yolları hastalıklarına da iyi gelen Kocayayla; spor alanları, kır kahveleri, çocuk oyun alanları ve yürüyüş parkurlarıyla çevrili. Hem hafta sonları hem de yaz aylarında temiz havada çam, kavak ve erik ağaçları arasında güzel bir gün geçirmek isteyenler Kocayayla’ya mutlaka uğramalılar."/>


     </div>
    
    </>
  )
}

export default Places