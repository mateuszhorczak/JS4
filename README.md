# JS4

W JS stwórz program definiujący Listę towarów wraz z produktami. Produkty powinny być opisane minimum następującymi właściwościami: (id, nazwa, model, rok produkcji, cena, zużycieEnergii (kWh)). Każdy produkt powinien posiadać następujące metody:

    koszt(), która zwraca wartość ceny produktu.
    kosztEnergii(), która zwraca koszt zużycia energii danego produktu przy założonej cenie energii (określonej globalnie lub statycznie) i zużyciu produktu.
    wiekProduktu(), która zwraca jego wiek na podstawie aktualnej daty (korzystając z Date).
    wiekProduktuLata(), która zwróci wiek produktu, ale nie jako wartość numeryczną, a odpowiedni string: 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat, itd.
    konstruktor

ListaTowarów zaś powinna zwierać metody:

    wypiszProdukt(idProduktu) - zwraca czytelnie sformatowany string z opisem wybranego produktu
    wypiszWszystkieProdukty() - zwraca czytelnie sformatowany string z listą wszystkich produktów
    dodajProdukt(produkt) - rzuca wyjątek jeśli produkt o tym id już jest na liście
    zmieńProdukt(idProduktu, produkt) - znajduje produkt o tym ID i podmienia wszystkie jego składowe wartościami z obiektu produkt (ale nie podmienia obiektu)

Dodatkowo zdefiniuj dwa szczegółowe typy ListyTowarów: Magazyn oraz Sklep, które rozszerzają ListeTowarów.

Magazyn będzie zawierał dodatkowo metodę dodajProdukt(produkt, ilość), która oprócz samego produktu określa liczbę sztuk, które zostają dodane (zatem Magazyn zachowuje stan magazynowy każdego produktu). Kolejna metoda ma pozwalać na zabranie produktu tj. zwrócenia kopii obiektu Produkt oraz zmniejszenia odpowiednio stanu magazynowego (produkt powinniśmy móc identyfikować zarówno po id jak i nazwie+modelu - zaproponuj odpowiednie rozwiązanie).

Sklep będzie listą towarów rozszerzoną o możliwość dodawania produktów przy pomocy: 

    dodajProdukt(nazwa, model, cena, zużycieEnergii) - wartości brakujących pól (ID, rok) powinny być generowane automatycznie
    dodajProdukt(idProduktu, nazwa, model, cena, zużycieEnergii)

Sklep powinien ponadto pozwolić na złożenie zamówienia - zaproponuj rozwiązanie, które pozwoli na dodanie produktów do zamówienia (po ID istniejącego produktu) oraz zrealizowanie zamówienie (wówczas odpowiednia liczba sztuk produktów jest usuwana ze wskazanego magazynu).
