import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { ApiService } from 'src/app/shared/services/api.service'

@Component({
   selector: 'app-data-entry',
   templateUrl: './data-entry.component.html',
   styleUrls: ['./data-entry.component.scss']
})

export class DataEntryComponent implements OnInit {
   public isModalOpen = false
   public countries = [
      {
         'countryName': 'Россия',
         'passportCode': 'RUS'
      },
      {
         'countryName': 'Афганистан',
         'passportCode': 'AFG'
      },
      {
         'countryName': 'Узбекистан',
         'passportCode': 'UZB'
      },
      {
         'countryName': 'Албания',
         'passportCode': 'ALB'
      },
      {
         'countryName': 'Алжир',
         'passportCode': 'DZA'
      },
      {
         'countryName': 'Американское Самоа',
         'passportCode': 'ASM'
      },
      {
         'countryName': 'Андорра',
         'passportCode': 'AND'
      },
      {
         'countryName': 'Ангола',
         'passportCode': 'AGO'
      },
      {
         'countryName': 'Ангилья',
         'passportCode': 'AIA'
      },
      {
         'countryName': 'Антигуа и Барбуда',
         'passportCode': 'ATG'
      },
      {
         'countryName': 'Аргентина',
         'passportCode': 'ARG'
      },
      {
         'countryName': 'Армения',
         'passportCode': 'ARM'
      },
      {
         'countryName': 'Аруба',
         'passportCode': 'ABW'
      },
      {
         'countryName': 'Австралия',
         'passportCode': 'AUS'
      },
      {
         'countryName': 'Австрия',
         'passportCode': 'AUT'
      },
      {
         'countryName': 'Азербайджан',
         'passportCode': 'AZE'
      },
      {
         'countryName': 'Багамы',
         'passportCode': 'BHS'
      },
      {
         'countryName': 'Бахрейн',
         'passportCode': 'BHR'
      },
      {
         'countryName': 'Бангладеш',
         'passportCode': 'BGD'
      },
      {
         'countryName': 'Барбадос',
         'passportCode': 'BRB'
      },
      {
         'countryName': 'Беларусь',
         'passportCode': 'BLR'
      },
      {
         'countryName': 'Бельгия',
         'passportCode': 'BEL'
      },
      {
         'countryName': 'Белиз',
         'passportCode': 'BLZ'
      },
      {
         'countryName': 'Бенин',
         'passportCode': 'BEN'
      },
      {
         'countryName': 'Бермуды',
         'passportCode': 'BMU'
      },
      {
         'countryName': 'Бутан',
         'passportCode': 'BTN'
      },
      {
         'countryName': 'Боливия',
         'passportCode': 'BOL'
      },
      {
         'countryName': 'Босния и Герцеговина',
         'passportCode': 'BIH'
      },
      {
         'countryName': 'Ботсвана',
         'passportCode': 'BWA'
      },
      {
         'countryName': 'Бразилия',
         'passportCode': 'BRA'
      },
      {
         'countryName': 'Британские Виргинские острова',
         'passportCode': 'VGB'
      },
      {
         'countryName': 'Бруней',
         'passportCode': 'BRN'
      },
      {
         'countryName': 'Болгария',
         'passportCode': 'BGR'
      },
      {
         'countryName': 'Буркина-Фасо',
         'passportCode': 'BFA'
      },
      {
         'countryName': 'Бурунди',
         'passportCode': 'BDI'
      },
      {
         'countryName': 'Камбоджа',
         'passportCode': 'KHM'
      },
      {
         'countryName': 'Камерун',
         'passportCode': 'CMR'
      },
      {
         'countryName': 'Канада',
         'passportCode': 'CAN'
      },
      {
         'countryName': 'Кабо-Верде',
         'passportCode': 'CPV'
      },
      {
         'countryName': 'Каймановы острова',
         'passportCode': 'CYM'
      },
      {
         'countryName': 'Центрально-Африканская Республика',
         'passportCode': 'CAF'
      },
      {
         'countryName': 'Чад',
         'passportCode': 'TCD'
      },
      {
         'countryName': 'Чили',
         'passportCode': 'CHL'
      },
      {
         'countryName': 'Китай',
         'passportCode': 'CHN'
      },
      {
         'countryName': 'Колумбия',
         'passportCode': 'COL'
      },
      {
         'countryName': 'Коморы',
         'passportCode': 'COM'
      },
      {
         'countryName': 'Острова Кука',
         'passportCode': 'COK'
      },
      {
         'countryName': 'Коста-Рика',
         'passportCode': 'CRI'
      },
      {
         'countryName': 'Хорватия',
         'passportCode': 'HRV'
      },
      {
         'countryName': 'Куба',
         'passportCode': 'CUB'
      },
      {
         'countryName': 'Кюрасао',
         'passportCode': 'CUW'
      },
      {
         'countryName': 'Кипр',
         'passportCode': 'CYP'
      },
      {
         'countryName': 'Чешская Республика',
         'passportCode': 'CZE'
      },
      {
         'countryName': 'Дания',
         'passportCode': 'DNK'
      },
      {
         'countryName': 'Джибути',
         'passportCode': 'DJI'
      },
      {
         'countryName': 'Доминика',
         'passportCode': 'DMA'
      },
      {
         'countryName': 'Доминиканская Респблика',
         'passportCode': 'DOM'
      },
      {
         'countryName': 'ДР Конго',
         'passportCode': 'COD'
      },
      {
         'countryName': 'Эквадор',
         'passportCode': 'ECU'
      },
      {
         'countryName': 'Египет',
         'passportCode': 'EGY'
      },
      {
         'countryName': 'Эль Сальвадор',
         'passportCode': 'SLV'
      },
      {
         'countryName': 'Экваториальная Гвинея',
         'passportCode': 'GNQ'
      },
      {
         'countryName': 'Эритрея',
         'passportCode': 'ERI'
      },
      {
         'countryName': 'Эстония',
         'passportCode': 'EST'
      },
      {
         'countryName': 'Эсватини',
         'passportCode': 'SWZ'
      },
      {
         'countryName': 'Эфиопия',
         'passportCode': 'ETH'
      },
      {
         'countryName': 'Фолклендские острова',
         'passportCode': 'FLK'
      },
      {
         'countryName': 'Фарерские острова',
         'passportCode': 'FRO'
      },
      {
         'countryName': 'Фиджи',
         'passportCode': 'FJI'
      },
      {
         'countryName': 'Финляндия',
         'passportCode': 'FIN'
      },
      {
         'countryName': 'Франция',
         'passportCode': 'FRA'
      },
      {
         'countryName': 'Французская Гвиана',
         'passportCode': 'GUF'
      },
      {
         'countryName': 'Французская Полинезия',
         'passportCode': 'PYF'
      },
      {
         'countryName': 'Габон',
         'passportCode': 'GAB'
      },
      {
         'countryName': 'Гамбия',
         'passportCode': 'GMB'
      },
      {
         'countryName': 'Грузия',
         'passportCode': 'GEO'
      },
      {
         'countryName': 'Германия',
         'passportCode': 'DEU'
      },
      {
         'countryName': 'Гана',
         'passportCode': 'GHA'
      },
      {
         'countryName': 'Гибралтар',
         'passportCode': 'GIB'
      },
      {
         'countryName': 'Греция',
         'passportCode': 'GRC'
      },
      {
         'countryName': 'Гренландия',
         'passportCode': 'GRL'
      },
      {
         'countryName': 'Гренада',
         'passportCode': 'GRD'
      },
      {
         'countryName': 'Гваделупа',
         'passportCode': 'GLP'
      },
      {
         'countryName': 'Гуам',
         'passportCode': 'GUM'
      },
      {
         'countryName': 'Гватемала',
         'passportCode': 'GTM'
      },
      {
         'countryName': 'Гвинея',
         'passportCode': 'GIN'
      },
      {
         'countryName': 'Гвинея-Бисау',
         'passportCode': 'GNB'
      },
      {
         'countryName': 'Гайана',
         'passportCode': 'GUY'
      },
      {
         'countryName': 'Гаити',
         'passportCode': 'HTI'
      },
      {
         'countryName': 'Гондурас',
         'passportCode': 'HND'
      },
      {
         'countryName': 'Гонконг',
         'passportCode': 'HKG'
      },
      {
         'countryName': 'Венгрия',
         'passportCode': 'HUN'
      },
      {
         'countryName': 'Исландия',
         'passportCode': 'ISL'
      },
      {
         'countryName': 'Индия',
         'passportCode': 'IND'
      },
      {
         'countryName': 'Индонезия',
         'passportCode': 'IDN'
      },
      {
         'countryName': 'Иран',
         'passportCode': 'IRN'
      },
      {
         'countryName': 'Ирак',
         'passportCode': 'IRQ'
      },
      {
         'countryName': 'Ирландия',
         'passportCode': 'IRL'
      },
      {
         'countryName': 'Остров Мэн',
         'passportCode': 'IMN'
      },
      {
         'countryName': 'Израиль',
         'passportCode': 'ISR'
      },
      {
         'countryName': 'Италия',
         'passportCode': 'ITA'
      },
      {
         'countryName': 'Кот-д\'Ивуар',
         'passportCode': 'CIV'
      },
      {
         'countryName': 'Ямайка',
         'passportCode': 'JAM'
      },
      {
         'countryName': 'Япония',
         'passportCode': 'JPN'
      },
      {
         'countryName': 'Иордания',
         'passportCode': 'JOR'
      },
      {
         'countryName': 'Казахстан',
         'passportCode': 'KAZ'
      },
      {
         'countryName': 'Кения',
         'passportCode': 'KEN'
      },
      {
         'countryName': 'Кирибати',
         'passportCode': 'KIR'
      },
      {
         'countryName': 'Кувейт',
         'passportCode': 'KWT'
      },
      {
         'countryName': 'Кыргызстан',
         'passportCode': 'KGZ'
      },
      {
         'countryName': 'Лаос',
         'passportCode': 'LAO'
      },
      {
         'countryName': 'Латвия',
         'passportCode': 'LVA'
      },
      {
         'countryName': 'Ливан',
         'passportCode': 'LBN'
      },
      {
         'countryName': 'Лесото',
         'passportCode': 'LSO'
      },
      {
         'countryName': 'Либерия',
         'passportCode': 'LBR'
      },
      {
         'countryName': 'Ливия',
         'passportCode': 'LBY'
      },
      {
         'countryName': 'Лихтенштейн',
         'passportCode': 'LIE'
      },
      {
         'countryName': 'Литва',
         'passportCode': 'LTU'
      },
      {
         'countryName': 'Люксембург',
         'passportCode': 'LUX'
      },
      {
         'countryName': 'Макао',
         'passportCode': 'MAC'
      },
      {
         'countryName': 'Мадагаскар',
         'passportCode': 'MDG'
      },
      {
         'countryName': 'Малави',
         'passportCode': 'MWI'
      },
      {
         'countryName': 'Малайзия',
         'passportCode': 'MYS'
      },
      {
         'countryName': 'Мальдивы',
         'passportCode': 'MDV'
      },
      {
         'countryName': 'Мали',
         'passportCode': 'MLI'
      },
      {
         'countryName': 'Мальта',
         'passportCode': 'MLT'
      },
      {
         'countryName': 'Маршалловы острова',
         'passportCode': 'MHL'
      },
      {
         'countryName': 'Мартиника',
         'passportCode': 'MTQ'
      },
      {
         'countryName': 'Мавритания',
         'passportCode': 'MRT'
      },
      {
         'countryName': 'Маврикий',
         'passportCode': 'MUS'
      },
      {
         'countryName': 'Майотта',
         'passportCode': 'MYT'
      },
      {
         'countryName': 'Мексика',
         'passportCode': 'MEX'
      },
      {
         'countryName': 'Микронезия',
         'passportCode': 'FSM'
      },
      {
         'countryName': 'Молдова',
         'passportCode': 'MDA'
      },
      {
         'countryName': 'Монако',
         'passportCode': 'MCO'
      },
      {
         'countryName': 'Монголия',
         'passportCode': 'MNG'
      },
      {
         'countryName': 'Черногория',
         'passportCode': 'MNE'
      },
      {
         'countryName': 'Монтсеррат',
         'passportCode': 'MSR'
      },
      {
         'countryName': 'Марокко',
         'passportCode': 'MAR'
      },
      {
         'countryName': 'Мозамбик',
         'passportCode': 'MOZ'
      },
      {
         'countryName': 'Мьянма',
         'passportCode': 'MMR'
      },
      {
         'countryName': 'Намибия',
         'passportCode': 'NAM'
      },
      {
         'countryName': 'Науру',
         'passportCode': 'NRU'
      },
      {
         'countryName': 'Непал',
         'passportCode': 'NPL'
      },
      {
         'countryName': 'Нидерланды',
         'passportCode': 'NLD'
      },
      {
         'countryName': 'Новая Каледония',
         'passportCode': 'NCL'
      },
      {
         'countryName': 'Новая Зеландия',
         'passportCode': 'NZL'
      },
      {
         'countryName': 'Никарагуа',
         'passportCode': 'NIC'
      },
      {
         'countryName': 'Нигер',
         'passportCode': 'NER'
      },
      {
         'countryName': 'Нигерия',
         'passportCode': 'NGA'
      },
      {
         'countryName': 'Ниуэ',
         'passportCode': 'NIU'
      },
      {
         'countryName': 'Северная Корея',
         'passportCode': 'PRK'
      },
      {
         'countryName': 'Северная Македония',
         'passportCode': 'MKD'
      },
      {
         'countryName': 'Северные Марианские острова',
         'passportCode': 'MNP'
      },
      {
         'countryName': 'Норвегия',
         'passportCode': 'NOR'
      },
      {
         'countryName': 'Оман',
         'passportCode': 'OMN'
      },
      {
         'countryName': 'Пакистан',
         'passportCode': 'PAK'
      },
      {
         'countryName': 'Палау',
         'passportCode': 'PLW'
      },
      {
         'countryName': 'Палестина',
         'passportCode': 'PSE'
      },
      {
         'countryName': 'Панама',
         'passportCode': 'PAN'
      },
      {
         'countryName': 'Папуа - Новая Гвинея',
         'passportCode': 'PNG'
      },
      {
         'countryName': 'Парагвай',
         'passportCode': 'PRY'
      },
      {
         'countryName': 'Перу',
         'passportCode': 'PER'
      },
      {
         'countryName': 'Филиппины',
         'passportCode': 'PHL'
      },
      {
         'countryName': 'Польша',
         'passportCode': 'POL'
      },
      {
         'countryName': 'Португалия',
         'passportCode': 'PRT'
      },
      {
         'countryName': 'Пуэрто-Рико',
         'passportCode': 'PRI'
      },
      {
         'countryName': 'Катар',
         'passportCode': 'QAT'
      },
      {
         'countryName': 'Республика Конго',
         'passportCode': 'COG'
      },
      {
         'countryName': 'Воссоединение',
         'passportCode': 'REU'
      },
      {
         'countryName': 'Румыния',
         'passportCode': 'ROU'
      },
      {
         'countryName': 'Руанда',
         'passportCode': 'RWA'
      },
      {
         'countryName': 'Сент-Китс и Невис',
         'passportCode': 'KNA'
      },
      {
         'countryName': 'Сент-Люсия',
         'passportCode': 'LCA'
      },
      {
         'countryName': 'Святой Мартин',
         'passportCode': 'MAF'
      },
      {
         'countryName': 'Сен-Пьер и Микелон',
         'passportCode': 'SPM'
      },
      {
         'countryName': 'Святой Винсент и Гренадины',
         'passportCode': 'VCT'
      },
      {
         'countryName': 'Самоа',
         'passportCode': 'WSM'
      },
      {
         'countryName': 'Сан-Марино',
         'passportCode': 'SMR'
      },
      {
         'countryName': 'Сан-Томе и Принсипи',
         'passportCode': 'STP'
      },
      {
         'countryName': 'Саудовская Аравия',
         'passportCode': 'SAU'
      },
      {
         'countryName': 'Сенегал',
         'passportCode': 'SEN'
      },
      {
         'countryName': 'Сербия',
         'passportCode': 'SRB'
      },
      {
         'countryName': 'Сейшельские острова',
         'passportCode': 'SYC'
      },
      {
         'countryName': 'Сьерра-Леоне',
         'passportCode': 'SLE'
      },
      {
         'countryName': 'Сингапур',
         'passportCode': 'SGP'
      },
      {
         'countryName': 'Сент-Мартен',
         'passportCode': 'SXM'
      },
      {
         'countryName': 'Словакия',
         'passportCode': 'SVK'
      },
      {
         'countryName': 'Словения',
         'passportCode': 'SVN'
      },
      {
         'countryName': 'Соломоновы острова',
         'passportCode': 'SLB'
      },
      {
         'countryName': 'Сомали',
         'passportCode': 'SOM'
      },
      {
         'countryName': 'Южная Африка',
         'passportCode': 'ZAF'
      },
      {
         'countryName': 'Южная Корея',
         'passportCode': 'KOR'
      },
      {
         'countryName': 'Южный Судан',
         'passportCode': 'SSD'
      },
      {
         'countryName': 'Испания',
         'passportCode': 'ESP'
      },
      {
         'countryName': 'Шри-Ланка',
         'passportCode': 'LKA'
      },
      {
         'countryName': 'Судан',
         'passportCode': 'SDN'
      },
      {
         'countryName': 'Суринам',
         'passportCode': 'SUR'
      },
      {
         'countryName': 'Швеция',
         'passportCode': 'SWE'
      },
      {
         'countryName': 'Швейцария',
         'passportCode': 'CHE'
      },
      {
         'countryName': 'Сирия',
         'passportCode': 'SYR'
      },
      {
         'countryName': 'Тайвань',
         'passportCode': 'TWN'
      },
      {
         'countryName': 'Таджикистан',
         'passportCode': 'TJK'
      },
      {
         'countryName': 'Танзания',
         'passportCode': 'TZA'
      },
      {
         'countryName': 'Таиланд',
         'passportCode': 'THA'
      },
      {
         'countryName': 'Тимор-Лешти',
         'passportCode': 'TLS'
      },
      {
         'countryName': 'Идти',
         'passportCode': 'TGO'
      },
      {
         'countryName': 'Токелау',
         'passportCode': 'TKL'
      },
      {
         'countryName': 'Тонга',
         'passportCode': 'TON'
      },
      {
         'countryName': 'Тринидад и Тобаго',
         'passportCode': 'TTO'
      },
      {
         'countryName': 'Тунис',
         'passportCode': 'TUN'
      },
      {
         'countryName': 'Турция',
         'passportCode': 'TUR'
      },
      {
         'countryName': 'Туркменистан',
         'passportCode': 'TKM'
      },
      {
         'countryName': 'Острова Теркс и Кайкос',
         'passportCode': 'TCA'
      },
      {
         'countryName': 'Тувалу',
         'passportCode': 'TUV'
      },
      {
         'countryName': 'Уганда',
         'passportCode': 'UGA'
      },
      {
         'countryName': 'Украина',
         'passportCode': 'UKR'
      },
      {
         'countryName': 'Объединенные Арабские Эмираты',
         'passportCode': 'ARE'
      },
      {
         'countryName': 'Соединенное Королевство',
         'passportCode': 'GBR'
      },
      {
         'countryName': 'Соединенные Штаты',
         'passportCode': 'USA'
      },
      {
         'countryName': 'Виргинские острова Соединенных Штатов',
         'passportCode': 'VIR'
      },
      {
         'countryName': 'Уругвай',
         'passportCode': 'URY'
      },
      {
         'countryName': 'Вануату',
         'passportCode': 'VUT'
      },
      {
         'countryName': 'Ватикан',
         'passportCode': 'VAT'
      },
      {
         'countryName': 'Венесуэла',
         'passportCode': 'VEN'
      },
      {
         'countryName': 'Вьетнам',
         'passportCode': 'VNM'
      },
      {
         'countryName': 'Уоллис и Футуна',
         'passportCode': 'WLF'
      },
      {
         'countryName': 'Западная Сахара',
         'passportCode': 'ESH'
      },
      {
         'countryName': 'Йемен',
         'passportCode': 'YEM'
      },
      {
         'countryName': 'Замбия',
         'passportCode': 'ZMB'
      },
      {
         'countryName': 'Зимбабве',
         'passportCode': 'ZWE'
      }
   ]
   public passengerDataForm: FormGroup = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      birthDate: new FormControl('', [Validators.required]),
      sex: new FormControl('M', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      country: new FormControl('UZB', [Validators.required]),
   })

   public data: any = null
   public selectedForwardTrain: any = null
   public selectedBackwardTrain: any = null
   public passRouteForward: any = null
   public passRouteBackward: any = null

   constructor(
      private apiService: ApiService,
      private toaster: ToastrService
   ) {}

   ngOnInit(): void {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            this.isModalOpen = false
         }
      })

      if (localStorage.getItem('data')) {
         this.data = JSON.parse(localStorage.getItem('data') || '')
      }
      if (localStorage.getItem('selectedForwardTrain')) {
         this.selectedForwardTrain = JSON.parse(localStorage.getItem('selectedForwardTrain') || '')
      }
      if (localStorage.getItem('selectedBackwardTrain')) {
         this.selectedBackwardTrain = JSON.parse(localStorage.getItem('selectedBackwardTrain') || '')
      }
      if (localStorage.getItem('passRouteForward')) {
         this.passRouteForward = JSON.parse(localStorage.getItem('passRouteForward') || '')
      }
      if (localStorage.getItem('passRouteBackward')) {
         this.passRouteBackward = JSON.parse(localStorage.getItem('passRouteBackward') || '')
      }
   }

   scanDocument() {
      this.apiService.getPassportDataApi().subscribe(res => {
         this.passengerDataForm.setValue({
            lastName: res.last_name.trim().toUpperCase(),
            firstName: res.first_name.trim().toUpperCase(),
            middleName: '',
            birthDate: res.dob,
            sex: res.sex,
            document: res.passport_no.trim().toUpperCase(),
            country: res.citizenship
         })
      }, err => {
         if (err.error.message === 'camera not found') {
            this.toaster.warning('Камера не найдена')
            return
         }

         if (err.error.message === 'passport not found') {
            this.toaster.warning('Паспорт не найден')
            return
         }

         if (err.error.message === 'could not read passport') {
            this.toaster.warning('Паспорт error')
            return
         }
      })
   }

   closePassengerDataModal() {
      this.isModalOpen = false
      this.passengerDataForm.setValue({
         lastName: '',
         firstName: '',
         middleName: '',
         birthDate: '',
         sex: 'M',
         document: '',
         country: 'UZB'
      })
   }
}
