import React from 'react';
import { render } from '@testing-library/react-native'
import { ENVIADO } from  '../../../../src/negocio/constantes/estadosLAnce';

import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';

describe('telas/Leilao/componentes/EnviaLance', () => {
   it('deve enviar o lance quando o botão for pressionado', () => {
      const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO)))

      const { toJSON } = render(
         <EnviaLance
            enviaLance={ENVIADO}
            cor="blue"
         />
      );

      console.log(toJSON())
   });
});