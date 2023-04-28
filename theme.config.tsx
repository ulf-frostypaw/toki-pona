/* eslint sort-keys: error */
export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
        {new Date().getFullYear()} &copy; Toki Pona &mdash; Todos los derechos reservados.
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}