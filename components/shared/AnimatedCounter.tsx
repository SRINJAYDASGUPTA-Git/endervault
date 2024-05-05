"use client";
import CountUp from "react-countup";
type CurrencySymbolMap = { [key: string]: string };

function getCurrencySymbol(currencyCode: string): string {
  const currencySymbols: CurrencySymbolMap = {
    AED: "د.إ", // United Arab Emirates Dirham
    AFN: "؋", // Afghanistan Afghani
    ALL: "Lek", // Albania Lek
    AMD: "Դր.", // Armenia Dram
    ANG: "ƒ", // Netherlands Antilles Guilder
    AOA: "Kz", // Angola Kwanza
    ARS: "$", // Argentina Peso
    AUD: "$", // Australia Dollar
    AWG: "ƒ", // Aruba Guilder
    AZN: "₼", // Azerbaijan Manat
    BAM: "KM", // Bosnia and Herzegovina Convertible Marka
    BBD: "$", // Barbados Dollar
    BDT: "৳", // Bangladesh Taka
    BGN: "лв", // Bulgaria Lev
    BHD: ".د.ب", // Bahrain Dinar
    BIF: "FBu", // Burundi Franc
    BMD: "$", // Bermuda Dollar
    BND: "$", // Brunei Darussalam Dollar
    BOB: "$b", // Bolivia Bolíviano
    BRL: "R$", // Brazil Real
    BSD: "$", // Bahamas Dollar
    BTN: "Nu.", // Bhutan Ngultrum
    BWP: "P", // Botswana Pula
    BYN: "Br", // Belarus Ruble
    BZD: "BZ$", // Belize Dollar
    CAD: "$", // Canada Dollar
    CDF: "FC", // Congo/Kinshasa Franc
    CHF: "CHF", // Switzerland Franc
    CLP: "$", // Chile Peso
    CNY: "¥", // China Yuan Renminbi
    COP: "$", // Colombia Peso
    CRC: "₡", // Costa Rica Colon
    CUC: "$", // Cuba Convertible Peso
    CUP: "₱", // Cuba Peso
    CVE: "$", // Cape Verde Escudo
    CZK: "Kč", // Czech Republic Koruna
    DJF: "Fdj", // Djibouti Franc
    DKK: "kr", // Denmark Krone
    DOP: "RD$", // Dominican Republic Peso
    DZD: "دج", // Algeria Dinar
    EGP: "£", // Egypt Pound
    ERN: "Nfk", // Eritrea Nakfa
    ETB: "Br", // Ethiopia Birr
    EUR: "€", // Euro Member Countries
    FJD: "$", // Fiji Dollar
    FKP: "£", // Falkland Islands (Malvinas) Pound
    GBP: "£", // United Kingdom Pound
    GEL: "₾", // Georgia Lari
    GGP: "£", // Guernsey Pound
    GHS: "¢", // Ghana Cedi
    GIP: "£", // Gibraltar Pound
    GMD: "D", // Gambia Dalasi
    GNF: "FG", // Guinea Franc
    GTQ: "Q", // Guatemala Quetzal
    GYD: "$", // Guyana Dollar
    HKD: "$", // Hong Kong Dollar
    HNL: "L", // Honduras Lempira
    HRK: "kn", // Croatia Kuna
    HTG: "G", // Haiti Gourde
    HUF: "Ft", // Hungary Forint
    IDR: "Rp", // Indonesia Rupiah
    ILS: "₪", // Israel Shekel
    IMP: "£", // Isle of Man Pound
    INR: "₹", // India Rupee
    IQD: "ع.د", // Iraq Dinar
    IRR: "﷼", // Iran Rial
    ISK: "kr", // Iceland Krona
    JEP: "£", // Jersey Pound
    JMD: "J$", // Jamaica Dollar
    JOD: "JD", // Jordan Dinar
    JPY: "¥", // Japan Yen
    KES: "KSh", // Kenya Shilling
    KGS: "лв", // Kyrgyzstan Som
    KHR: "៛", // Cambodia Riel
    KMF: "CF", // Comorian Franc
    KPW: "₩", // Korea (North) Won
    KRW: "₩", // Korea (South) Won
    KWD: "KD", // Kuwait Dinar
    KYD: "$", // Cayman Islands Dollar
    KZT: "лв", // Kazakhstan Tenge
    LAK: "₭", // Laos Kip
    LBP: "£", // Lebanon Pound
    LKR: "₨", // Sri Lanka Rupee
    LRD: "$", // Liberia Dollar
    LSL: "L", // Lesotho Loti
    LYD: "LD", // Libya Dinar
    MAD: "MAD", // Morocco Dirham
    MDL: "lei", // Moldova Leu
    MGA: "Ar", // Madagascar Ariary
    MKD: "ден", // Macedonia Denar
    MMK: "K", // Myanmar (Burma) Kyat
    MNT: "₮", // Mongolia Tughrik
    MOP: "MOP$", // Macau Pataca
    MRU: "UM", // Mauritania Ouguiya
    MUR: "₨", // Mauritius Rupee
    MVR: "Rf", // Maldives (Maldive Islands) Rufiyaa
    MWK: "MK", // Malawi Kwacha
    MXN: "$", // Mexico Peso
    MYR: "RM", // Malaysia Ringgit
    MZN: "MT", // Mozambique Metical
    NAD: "$", // Namibia Dollar
    NGN: "₦", // Nigeria Naira
    NIO: "C$", // Nicaragua Cordoba
    NOK: "kr", // Norway Krone
    NPR: "₨", // Nepal Rupee
    NZD: "$", // New Zealand Dollar
    OMR: "﷼", // Oman Rial
    PAB: "B/.", // Panama Balboa
    PEN: "S/.", // Peru Sol
    PGK: "K", // Papua New Guinea Kina
    PHP: "₱", // Philippines Peso
    PKR: "₨", // Pakistan Rupee
    PLN: "zł", // Poland Zloty
    PYG: "Gs", // Paraguay Guarani
    QAR: "﷼", // Qatar Riyal
    RON: "lei", // Romania Leu
    RSD: "Дин.", // Serbia Dinar
    RUB: "₽", // Russia Ruble
    RWF: "FRw", // Rwanda Franc
    SAR: "﷼", // Saudi Arabia Riyal
    SBD: "$", // Solomon Islands Dollar
    SCR: "₨", // Seychelles Rupee
    SDG: "ج.س.", // Sudan Pound
    SEK: "kr", // Sweden Krona
    SGD: "$", // Singapore Dollar
    SHP: "£", // Saint Helena Pound
    SLL: "Le", // Sierra Leone Leone
    SOS: "S", // Somalia Shilling
    SRD: "$", // Suriname Dollar
    SSP: "£", // South Sudan Pound
    STN: "Db", // São Tomé and Príncipe Dobra
    SVC: "₡", // El Salvador Colon
    SYP: "£", // Syria Pound
    SZL: "E", // Swaziland Lilangeni
    THB: "฿", // Thailand Baht
    TJS: "SM", // Tajikistan Somoni
    TMT: "T", // Turkmenistan Manat
    TND: "د.ت", // Tunisia Dinar
    TOP: "T$", // Tonga Pa'anga
    TRY: "₺", // Turkey Lira
    TTD: "TT$", // Trinidad and Tobago Dollar
    TWD: "NT$", // Taiwan New Dollar
    TZS: "TSh", // Tanzania Shilling
    UAH: "₴", // Ukraine Hryvnia
    UGX: "USh", // Uganda Shilling
    USD: "$", // United States Dollar
    UYU: "$U", // Uruguay Peso
    UZS: "лв", // Uzbekistan Som
    VEF: "Bs", // Venezuela Bolívar
    VND: "₫", // Vietnam Dong
    VUV: "VT", // Vanuatu Vatu
    WST: "WS$", // Samoa Tala
    XAF: "FCFA", // Communauté Financière Africaine (BEAC) CFA Franc BEAC
    XCD: "$", // East Caribbean Dollar
    XDR: "SDR", // International Monetary Fund (IMF) Special Drawing Rights
    XOF: "CFA", // Communauté Financière Africaine (BCEAO) Franc
    XPF: "₣", // Comptoirs Français du Pacifique (CFP) Franc
    YER: "﷼", // Yemen Rial
    ZAR: "R", // South Africa Rand
    ZMW: "ZK", // Zambia Kwacha
  };

  // Check if the currency code exists in the map
  if (currencySymbols.hasOwnProperty(currencyCode)) {
    return currencySymbols[currencyCode];
  } else {
    // Handle unknown currency code (optional)
    console.warn(`Unknown currency code: ${currencyCode}`);
    return ""; // or return a default symbol
  }
}
const AnimatedCounter = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => {
  const currencySymbol = getCurrencySymbol(currency);
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        duration={2.75}
        decimals={2}
        decimal="."
        prefix={currencySymbol}
      />
    </div>
  );
};

export default AnimatedCounter;
