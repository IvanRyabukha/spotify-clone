// TODO: Add dynamic lyrics

import { Play } from 'lucide-react';
import styles from './Lyrics.module.scss';

export function Lyrics() {
  return (
    <div className={styles.lyrics}>
      <div className="text-primary font-medium mb-5">[ Verse 1 ]</div>
      <p>It might not be the right time</p>
      <p>I might not be the right one</p>
      <p>But there's something about us I want to say</p>
      <p className={styles.active}>
        <Play
          fill="var(--color-primary)"
          className={styles.icon}
          size={10}
        />
        'Cause there's something between us anyway
      </p>

      <br />

      <div className="text-primary font-medium mb-5">[ Verse 2 ]</div>
      <p>I might not be the right one</p>
      <p>It might not be the right time</p>
      <p>But there's something about us</p>
      <p>I've got to do</p>
      <p>Some kind of secret I will share with you</p>

      <br />

      <div className="text-primary font-medium mb-5">[ Refrain ]</div>
      <p>I need you more than anything in my life</p>
      <p>I want you more than anything in my life</p>
      <p>I'll miss you more than anyone in my life</p>
    </div>
  );
}
