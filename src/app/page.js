import styles from "./page.module.css";
import TextType from '../components/TextType';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.demoWrapper}>
          <div className={styles.demoInner}>
            <div className={styles.demoBlock}>
              <div className={styles.greeting}>Hi, I'm Megan.</div>

              

              <div className={styles.researchGroup}>
                <div className={styles.researchStatic}>I'm researching</div>

                <TextType
                    className={styles.researchType}
                    text={["music performance difficulty", "multimodal machine learning", "music education AI"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </div>

              <div className={styles.subheading}>PhD Computer Science Student at Durham University</div>

              <Link href="/about" className={styles.cta}>
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
