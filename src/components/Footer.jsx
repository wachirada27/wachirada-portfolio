import React from 'react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Made with <span>🌸</span> by <span>{personalInfo.fullName}</span>{' '}
          &nbsp;·&nbsp; {CURRENT_YEAR}
        </p>
      </div>
    </footer>
  );
}
