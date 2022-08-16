import React from 'react';

import GridColumn from '../../layout/Grid/GridColumn/GridColumn';
import GridRow from '../../layout/Grid/GridRow/GridRow';

class RoleManager extends React.Component {
  render() {
    return (
      <GridRow>
        <GridColumn size="xl">
          <h2>This is roles manager</h2>
        </GridColumn>
      </GridRow>
    );
  }
}

export default RoleManager;
