import currencyReducer, { getCurrencyDetails } from '../redux/currencySlice';
  
  describe('currency reducer', () => {

    const initialState = {
      crypto: [
        { id: 'btc', name: 'BitCoin' },
        { id: 'eth', name: 'Etherum' },
      ],
    };
  
    it('should handle searchByName', () => {
      const state = currencyReducer(initialState, getCurrencyDetails('dodge'));
      expect(state.filteredCompanies).toBeUndefined();
    });
  
  });
  