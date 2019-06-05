import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../../DTO/CompanyDto';


@Component({
  selector: 'app-searchby-industry',
  templateUrl: './searchby-industry.component.html',
  styleUrls: ['./searchby-industry.component.css']
})
export class SearchbyIndustryComponent implements OnInit {
  companies: Company [];
  industry: string;
  error: string;
  // activity = [
  //   'Umzuge', 'Apotek', 'Abbeizarbeiten', 'Abendgymnasium', 'Abfallbeseitigung', 'Abbeizarbeiten',
  //   'Abbrucharbeiten',
  //   'Abdichtungsunternehmen',
  //   'Abendgymnasium',
  //   'Abendrealschule',
  //   'Abendschule',
  //   'Abfallbeseitigung',
  //   'Abfallentsorgung',
  //   'Abgasuntersuchung',
  //   'Abschleppdienst',
  //   'Abschleppservice',
  //   'absicherungsdienst',
  //   'Abwasserentsorgung',
  //   'Abwasserentsorgungsdienst',
  //   'Abwasserreinigung',
  //   'Abwasserunternehmen',
  //   'Abwasserverband',
  //   'Abwasserzweckverband',
  //   'Achsvermessung',
  //   'Ackerbau',
  //   'ADAC',
  //   'Aerobic',
  //   'Agrargemeinschaft',
  //   'Agrargenossenschaft',
  //   'Agrarhandel',
  //   'Agrarhof',
  //   'Agraringenieur',
  //   'Agrarprodukte',
  //   'Agrarservice',
  //   'Agrofarm',
  //   'Agroservice',
  //   'Airbus',
  //   'Aircraft',
  //   'Akademie',
  //   'Akademische Vereine',
  //   'Aktenvernichtung',
  //   'Akupunktur',
  //   'Aldi',
  //   'Allergologe',
  //   'Allgemeinarzt',
  //   'Allgemeinbildende Schulen',
  //   'Allianz',
  //   'Alpenverein',
  //   'Altbausanierung',
  //   'Altenbetreuung',
  //   'Altenheim',
  //   'Altenpflege',
  //   'Altenpflegeheim',
  //   'Altersvorsorge',
  //   'Altmetall',
  //   'Großhandel',
  //   'Altpapier',
  //   'Großhandel',
  //   'ambulanter',
  //   'Pflegedienst',
  //   ' ambulantes',
  //   'Operieren',
  //   'Ambulanz',
  //   'amerikanische',
  //   'Küche',
  //   'Amtsgericht',
  //   'Anästhesie',
  //   'Angelgeschäft',
  //   'Angelladen',
  //   'Angelshop',
  //   'Angelverein',
  //   'Angler',
  //   'und',
  //   'Fischersport',
  //   'Vereine',
  //   'Anhänger Verkauf',
  //   'Anhängermarkt',
  //   'Anhängerverleih',
  //   'Anlage und Vermögensberater',
  //   'Anlageberater',
  //   'Anlagenbau',
  //   'Anstreicher',
  //   'Antennenbau',
  //   'antike Möbel',
  //   'Antikladen',
  //   'Antikschmuck',
  //   'Antikuhren',
  //   'Antiquariate',
  //   'Antiquitäten',
  //   'Antiquitätenhändler',
  //   'Anwalt',
  //   'Anwaltskammer',
  //   'Anzeigenagentur',
  //   'Anzeigenannehmestellen',
  //   'AOK',
  //   'Apotheke',
  //   'Apparatebau',
  //   'Apple',
  //   'Aquaristik',
  //   'Arbeitgeberverband',
  //   'Arbeitsamt',
  //   'Arbeitsbühnen',
  //   'Arbeitsbühnenverleih',
  //   'Arbeitsgericht',
  //   'Arbeitskleidung',
  //   ' arbeitsmedizinischer Dienst',
  //   'Arbeitsrecht',
  //   'Arbeitsvermittlung',
  //   'Architekt',
  //   'Architektenkammer',
  //   'Archivierung',
  //   'Arzneimittel',
  //   'Asia Imbiss',
  //   'asiatische Küche',
  //   'asiatische Spezialitäten',
  //   'asiatisches Restaurant',
  //   'Atemtherapie',
  //   'Audi',
  //   'Augenarzt',
  //   'Augenklinik',
  //   'Augenoptiker',
  //   'Augenzentrum',
  //   'Auktionshaus',
  //   'Ausbildungszentrum',
  //   'Autoanhänger',
  //   'Autoankauf',
  //   'Autoaufbereitung',
  //   'Autobahnmeisterei',
  //   'Autobahnraststätte',
  //   'Autobahntankstelle',
  //   'Autobeschriftung',
  //   'Autoersatzteile',
  //   'Autogaragen',
  //   'Autogenes Training',
  //   'Autohaus',
  //   'Autolackiererei',
  //   'Automatikuhren',
  //   'Automationsunternehmen',
  //   'Automobilclub',
  //   'Automobilzulieferer',
  //   ' Autopflege',
  //   'Autoradio Einzelhandel',
  //   'Autoreinigung',
  //   'Autosattlerei',
  //   'Autoservice',
  //   'Autoteile',
  //   'Autotransportanhänger',
  //   'Auto',
  //   'Tuning',
  //   'Werkstatt',
  //   'Autovermietung',
  //   'Autoverwerter',
  //   'Autoverwertung',
  //   'Autowaschanlage',
  //   'Autowerkstatt',
  //   'Autozubehör',
  //   'AWO',
  //   'Ayurveda',
  //
  // ];

  constructor(private http: HttpClient) {
  }

  alertShouw: boolean;

  click() {
    this.alertShouw = true;
  }

  onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d > 48 || d < 57) {
        return false;
      }
    }
    return true;
  }

  searchByActivity() {
    if (this.onlyDigits(this.industry)) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        responseType: 'json'
      });
      this.http.get<Company[]>('http://127.0.0.1:8081/industry/' + this.industry, {headers})
        .subscribe((response => {
          this.companies = response;
        }));
    } else {
      this.error = 'The text that you entered contains numbers you enter again';
      this.alertShouw = false;
    }

  }


  ngOnInit() {
  }
}

