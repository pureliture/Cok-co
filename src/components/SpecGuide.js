import { React, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './styles/SpecGuide.css';

const SpecGuide = ({ isOpen, toggleDrawer }) => {
  return (
    <div style={{ width: '360px', display: 'flex', margin: 'auto' }}>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        lockBackgroundScroll="true"
        className="spec_guide_drawer"
        style={{
          width: '360px',
          height: '100%',
          overflowY: 'scroll',
        }}
      >
        <img
          src="/07_Detail Spec Guide.png"
          style={{ width: '360px', height: '4780px' }}
        />
      </Drawer>
    </div>
  );
};

export default SpecGuide;
