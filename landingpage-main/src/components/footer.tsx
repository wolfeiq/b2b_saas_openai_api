import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.footerColumn}>
          <h3 className={styles.bibi}><a href="/">PurePitch AI</a></h3>
          <p className={`text-sm opacity-50`}>Made with Love in Berlin 🇩🇪</p>
          <p className={`text-sm opacity-50`}>Copyright PurePitch AI Feb 2024. All Rights Reserved.</p>
        </div>
      <div className={styles.footerColumn}>
          <h3 className={styles.bibi}>Legal</h3>
          <ul>
            <li className={`text-sm opacity-50`}><a href="/impressum-datenschutz">Privacy Policy & Impressum</a></li>
            <li className={`text-sm opacity-30`}>Payments are processed securely through our store at <a href="https://purepitchai.lemonsqueezy.com">LemonSqueezy</a>.</li>
            <li className={`text-sm opacity-30`}>Whilst in beta mode, we might use Gen AI tools like <a href="https://www.synthesia.io/">Synthesia</a> & <a href="https://runwayml.com/">Runway ML</a> to enhance your videos.</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.bibi}>Temporary Email for Beta</h3>
          <p className={`text-sm opacity-50`}>info@eiq-mail.com</p>
          <p className={`text-sm opacity-50`}><a href="https://www.linkedin.com/company/purepitch-ai/?viewAsMember=true">LinkedIn</a></p>
        </div>
       
   
        
      </div>
    </footer>
  );
};

export default Footer;
