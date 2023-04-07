import { obtemLeiloes } from '../../src/repositorio/leilao';
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes')

const mockLeiloes = [
   {
      id: 1,
      nome: 'Leilão',
      descricao: 'Descrição do leilão'
   }
];

const mockRequisicao = (retorno) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve({
            data: retorno
         })
      }, 200);
   });
}

const mockRequisicaoErro = () => {
   return new Promise((_, reject) => {
      setTimeout(() => {
         reject();
      }, 200);
   });
}

describe('repositoro/leilao', () => {

   beforeEach(() => {
      apiLeiloes.get.mockClear()
   })

   describe('obtemLeiloes', () => {

      it('deve retornar uma lista de leilões', async () => {
         apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))

         const leiloes = await obtemLeiloes();

         expect(leiloes).toEqual(mockLeiloes);

         expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
         expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
      });

      it('deve retornar uma lista vazia quando a requisição falhar', async () => {
         apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())

         const leiloes = await obtemLeiloes();

         expect(leiloes).toEqual([]);

         expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
         expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
      });

   });

});