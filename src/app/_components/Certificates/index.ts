import { performRequest } from './../../_lib/datocms';
import { CertificateCard } from './CertificateCard';

const ALL_CERTIFICATES_QUERY = `
    query Certificates {
        allCertificates {
          id
          issuer
          title
          illustration {
            url
            height
            width
          }
        }
  }
`;

type CertificatesResultQuery = {
    allCertificates : CertificateCard[]
}

export const getAllCertificates : () => Promise<CertificateCard[]> = async () => {
    const result = await performRequest(ALL_CERTIFICATES_QUERY);
    const {allCertificates} = result as CertificatesResultQuery;
    console.log(allCertificates)
    return allCertificates;
}