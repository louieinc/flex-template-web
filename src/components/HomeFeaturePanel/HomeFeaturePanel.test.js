import React from 'react';
import { currencyConfig } from '../../util/test-data';
import { fakeIntl } from '../../util/test-data';
import { renderShallow } from '../../util/test-helpers';
import HomeFeaturePanel from './HomeFeaturePanel';

describe('HomeFeaturePanel', () => {
  it('matches snapshot', () => {
    const props = {
      intl: fakeIntl,
    };
    const tree = renderShallow(<HomeFeaturePanel {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
