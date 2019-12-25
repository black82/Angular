import {Officer} from './Officer';
import {AddressCompany} from './AddressCompany';
import {CompanyActivyty} from './CompanyActivyty';
import {ContactCompany} from './ContactCompany';


export interface Company {

  id: number;

  company_number: string;

  current_status: string;

  jurisdiction_code: string;

  name: string;

  retrieved_at: string;

  register_flag_AD: boolean;


  register_flag_CD: boolean;

  register_flag_DK: boolean;

  register_flag_HD: boolean;

  register_flag_UT: boolean;

  register_flag_VOE: boolean;

  native_company_number: string;


  addressCompany: AddressCompany;

  officers: Officer[];

  keywordsIndustry: string;

  catalog: string;

  activity: string;

  company: CompanyActivyty;

  contactCompany: ContactCompany;

  html: string;

  capital: string;

  sic: string;
}
