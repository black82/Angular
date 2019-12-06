import {Rabotnik} from './Rabotnik';


export interface Company {
  id: number;
  company_number: string;
  current_status: string;
  jurisdiction_code: string;
  name: string;
  registered_address: string;
  retrieved_at: string;
  register_flag_AD: boolean;
  register_flag_CD: boolean;
  register_flag_DK: boolean;
  register_flag_HD: boolean;
  register_flag_UT: boolean;
  register_flag_VOE: boolean;
  native_company_number: string;
  registeredoffice: string;
  registrar: string;
  register_art: string;
  register_nummer: string;
  former_registrar: string;
  register_flag_Status_information: string;
  telephone: string;
  fax: string;
  url: string;
  sector_of_activity: string;
  officers: Rabotnik;
  sic: string;
  kapital: string;
  email: string;
  web2Url: string;
  googleUri: string;
  googleEmail: string;
  emails: Array<string>;
  keywordsIndustry: string;
  catalog: string;
  activity: string;
}
