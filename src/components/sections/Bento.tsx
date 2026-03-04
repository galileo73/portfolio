import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import { useI18n } from "../../i18n/I18nProvider";
import { bentoByLang } from "../../data/bento";

const spans = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
];

export default function Bento() {
  const { t, lang } = useI18n();
  const items = bentoByLang[lang];

  return (
    <section className="py-20 md:py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <SectionHeader title={t.bento.title} subtitle={t.bento.subtitle} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[160px]">
            {items.map((it, idx) => (
              <Card key={it.title} className={spans[idx] ?? "lg:col-span-6"}>
                <div className="h-full p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-400 tracking-wide">
                      {t.bento.label}
                    </p>

                    <h4 className="mt-3 text-xl font-semibold">{it.title}</h4>

                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
                    {it.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-1 rounded-full border border-neutral-800"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}