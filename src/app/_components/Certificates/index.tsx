import { graphql } from "gql.tada";

export const CertificateFindByIDQuery = graphql(`
  query CertificateById($id: ItemId) {
    certificate(filter: { id: { eq: $id } }) {
      issuer
      linkCertificate
      title
      id
      description
      illustration {
        height
        width
        url
      }
      demo {
        projectType
      }
    }
  }
`);


export const ALL_CERTIFICATES_QUERY = graphql(`
  query Certificates {
    allCertificates {
      id
      title
      illustration {
        url
        height
        width
      }
      demo {
        projectType
      }
    }
  }
`);
