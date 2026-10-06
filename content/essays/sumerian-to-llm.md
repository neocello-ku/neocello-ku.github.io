---
title: "Notes from Between Sumerian and LLMs — Crossing Two Corpora"
description: "A notebook on corpus, etymology, hegemony, and orientalism, from someone who has crossed between comparative philology and LLM work."
date: "2026-10-06"
pubDate: "2026-10-06"
lang: "en"
crossLangSlug: "sumerian-to-llm"
tags:
  - AI
  - LLM
  - Philology
  - Orientalism
  - Hegemony
  - Multilingual
  - Ontology
  - Etymology
  - Semantics
author: ""
---

<p class="lang-switch"><a href="https://neocello-ku.github.io/ko/essays/sumerian-to-llm">한국어로 읽기</a></p>

# Notes from Between Sumerian and LLMs — Crossing Two Corpora

## 1. What I Have Seen Between Two Seats

I studied linguistics as an undergraduate, then spent time in comparative religion and classical philology in graduate school. The languages I worked with — Sumerian, Akkadian, Classical Arabic, Aramaic, Hebrew, Coptic, Sanskrit, Greek, Latin, Medieval Latin — sat together on one desk. Across language families: Semitic, Indo-European, Afro-Asiatic, and an isolate (Sumerian) that belongs to none. To have different language families on a single desk is to have *the societies that produced those languages* on a single desk. That is where philology begins.

After leaving that seat, I spent my career in IT. Over a decade handling mobile solutions for a global automotive brand and a Japanese camera brand; a few years founding and running an on-demand automotive detailing platform that scaled across thirty-some cities; then R&D work at a multilingual voice AI startup, followed by AI Transformation consulting for European premium and luxury automotive brands. Today the work is in last-mile logistics optimization and furniture delivery AI. Between those seats there was a period sourcing and labeling Arabic voice data from the MENA region and training multilingual TTS models on it, and other stretches handling things like financial automation for a global luxury supercar dealership, kiosk-mounted 3D chatbots for a large commercial truck brand, and computer-vision parking management for service workshops.

Watching the LLM era from beside it, certain questions are being summoned back to the old desk. The power of canonization. The relational structure of meaning. The temporality of etymology and sound correspondence. The politics of linguistic hegemony. The ethics of representation. These questions did not arise with LLMs. The humanities have worked on them for over a century, and parts of them were already at work in Mesopotamian scribal schools four thousand years ago. What LLMs have done is lift the same questions to a position that is *technical and political at once*.

This essay is a notebook from someone who has lived in both seats. The conclusion is short: *the philologist's habits of mind do not disappear in the LLM era — they become more necessary.* Before that conclusion, I want to pass through five places in order.

## 2. Corpus — The Sediment of Canonization

In philology, the word *corpus* cannot be separated from *canon*. What we call the Sumerian mythological corpus today is what survived because nineteenth-century BCE *Edubba'a* scribes copied it as training material. What we call the Masoretic Text is the Hebrew biblical canon as fixed — consonantal text, vocalization, and accent marks together — by the Masoretes between the sixth and tenth centuries CE, and it diverges in non-trivial ways from the Septuagint Greek text the Alexandrian Jewish diaspora used. What we call the Coptic Gnostic codices, the Nag Hammadi library, are what fourth-century orthodox Christianity *needed to bury* as it consolidated its canon — and were it not for someone hiding those books in a jar in the Egyptian desert, the Gnostic gospels would have remained only as the shadow of heresy, never as text.

Canonization is an act of power. To decide *what counts as canon* is to decide *whose meaning is allowed to survive*. When Imam al-Bukhārī, in the ninth century, selected approximately 7,400 hadith from a corpus of nearly 600,000 transmitted accounts to be included in *Ṣaḥīḥ al-Bukhārī*, that selection was not a neutral philological task but a decision about what would constitute the orthodox memory of Islam. When the Sanskrit Vedic tradition distinguishes between *śruti* ("that which is heard," the revealed) and *smṛti* ("that which is remembered," the traditional), that distinction is a hierarchy of sacrality assigned to texts. The first question a philologist asks of any corpus is *why has this text survived?* — because the act of survival is already political.

The LLM corpus — Common Crawl, BookCorpus, The Pile, RefinedWeb, FineWeb, Dolma — is no less the product of canonization. The decisions about which domains to scrape, which languages to include, which content to filter, which licenses to honor are not neutral. When BookCorpus was assembled in 2015 by using 11,038 *unpublished* novels as training data, that event was both an ethical incident — non-commercial digital copies used for training without author consent — and a decision about *what kind of English prose would be canonized*. When The Pile was curated across 22 domains, including PubMed, arXiv, GitHub, and StackExchange, the choice was about *what kind of knowledge would shape the model's mind*. When FineWeb released a 15-trillion-token corpus in 2024 with its filtering policies — English-first, quality thresholds, toxicity exclusion — it instituted a new form of orthodox/heretical boundary-drawing.

A model trained on a corpus where English constitutes roughly 45-50% of the total is called "multilingual" only because statistical majority has taken the place that canon once held. That Korean accounts for less than 0.7% of Common Crawl is not simply a data scarcity problem — it is a question of power distribution over *which languages of thought participate in the formation of this new instrument of learning we call the LLM*.

The gaze a philologist brings to *why does the Masoretic Text diverge from the Septuagint* is the gaze an LLM engineer should bring to *why is the English Wikipedia fifty times larger than the Korean one*. These are *the same kind of question, asked across a gap of three millennia*.

## 3. Etymology and Embedding — Two Ways Meaning Is Made

Follow the Semitic root *ʾ-l*. Akkadian *ilu* (god), Ugaritic *ʾIlu* (the name of the Canaanite high god), Hebrew *ʾēl* (god) and its plural form *ʾĕlōhīm*, Arabic *ʾilāh* (god) and its definite article form *al-ʾilāh > Allāh*. Words from one root expand and contract their semantic fields across eras, societies, and religious contexts. *ʾēl* was the name of the highest god in the Canaanite pantheon, then became a common noun for "god" within Hebrew monotheism, then arrived at the paradoxical position where the grammatically plural form *ʾĕlōhīm* refers semantically to a singular being. Meaning does not live on the surface of a word. Meaning is *the accumulation of every context that word has passed through across time*.

The same kind of tracing is possible in Indo-European. From the reconstructed Proto-Indo-European root *deywos* (heavenly, divine) come Latin *deus*, Greek *theos* (along a different consonant path), Sanskrit *deva*, Old English *Tīw* (the source of *Tuesday*), Old Norse *Týr* (the war god), and Gaulish *Diwos*. One root, branching across roughly five thousand years into more than thirty Indo-European languages, reshaping its semantic field continuously under regular sound-change rules — Grimm's Law for the Germanic consonant shifts, for example. The comparative linguistics of the nineteenth century onward was the discipline of tracing those semantic shifts *diachronically*.

There is something interesting about the Semitic root system itself. Semitic languages tend to construct words by overlaying vowel patterns onto roots of three (or two, or four) consonants. From the root *k-t-b* (to write) we get *kataba* (he wrote), *kitāb* (book), *kātib* (writer), *maktab* (office), *maktūb* (that which is written). This is a form of abstract semantic representation: the root is the abstract semantic core, and the vowel pattern is the morphological transformation that realizes it as a concrete word. *In a sense, the Semitic root system is an abstract embedding of meaning that natural language itself evolved.*

LLM embeddings execute the intuition that *meaning lives in the network of relations*, but statistically. Compressing the meaning of the token *ʾēl* into the distribution of every context in which it appears is the same kind of inference an etymologist makes in defining a word as "the historical distribution of contexts it has passed through." J. R. Firth's 1957 proposition *"You shall know a word by the company it keeps"* became the foundation of distributional semantics, and that line runs through word2vec (2013), GloVe (2014), ELMo (2018), BERT (2018), and the contextual embeddings of the GPT family.

When word2vec assigned a single static vector to each word, the problem of polysemy revealed itself immediately — "bank" as river edge or as financial institution had to fit into one vector. The contextual embeddings of ELMo and BERT solved this partially by computing the representation of a token over the entire context of its sentence. The same token, in different contexts, came to have different representations — a more rigorous execution of the distributional intuition that *context determines meaning*.

But embeddings are not etymology. The differences between the two tasks are fundamental.

Etymology is *diachronic*; embeddings are *synchronic*. Etymology asks, through sound correspondence, loanword analysis, and the historical movement of semantic fields, *why* a word came to mean what it means. Embeddings answer only *how* the word is distributionally close to other words at present. Etymology pursues causation; embeddings show correlation. Embeddings cannot replace etymology because statistics cannot replace causation. What they share is the underlying intuition: *meaning lives in the network of relations*. That intuition is executed by two different tools. Projects such as Bouckaert et al. (2012), which attempted to reconstruct the Indo-European phylogeny with Bayesian statistics, can be understood as cases where the tools of embeddings began to address the questions of etymology — a *computational philology* still in formation.

## 4. The Stream of Hegemony — Language and Power Cannot Be Separated

The lingua franca of Mesopotamia shifted three times across three thousand years: Sumerian in the third millennium BCE, Akkadian in the second, Aramaic in the first. What is striking is that Sumerian survived as the language of scholarship and religion for more than fifteen hundred years *after it died as a spoken language*. Sumerian tablets were still being copied into the late Seleucid period, the first century CE. The pattern of a dead language remaining as the language that defines power is universal — Latin survived as the scholarly language of Western Europe for more than a thousand years from the seventh century, and Classical Chinese reigned as the scholarly language of Korea, Japan, and Vietnam for more than twelve hundred years from the seventh century. Korea's transition from Hanmun to Hangul was effectively completed only in the second half of the twentieth century. Vietnam's shift from *chữ Nôm* (the Vietnamese adaptation of Hanmun) to the Latin-alphabet *chữ Quốc ngữ* is inseparable from early-twentieth-century colonial policy. *Linguistic hegemony shifts are never merely linguistic events.*

The Mediterranean stream is more familiar: Koine Greek (Hellenistic) → Latin (late Roman Empire) → Arabic (Islamic Golden Age, 7th-13th centuries) → English (since the nineteenth century). Each transition was bound up with shifts in military, religious, and commercial power. When the Abbasid caliphate translated Greek philosophy, science, and medicine into Arabic at the *Bayt al-Ḥikma* in ninth-century Baghdad, it was not merely a translation — it was the migration of intellectual hegemony from Alexandria to Baghdad. When the Toledo School of Translators turned that Arabic literature back into Latin in the twelfth century — al-Khwārizmī's algebra, Ibn Sīnā's medicine, Averroes' Aristotelian commentaries — hegemony moved again to the West. The replacement of Persian by English as the lingua franca of Mughal administration under the East India Company in the eighteenth and nineteenth centuries demonstrated that *the replacement of an administrative language is the colonial governance structure itself*.

The lingua franca of the LLM era is English. And English is not merely "the language with more training data" — it is a language inscribed into the *cognitive structure* of the models. Pires et al. (2019), analyzing mBERT, showed that the multilingual model organizes its representations around English as the central axis. Conneau et al. (2020) on XLM-R, Wendler et al. (2024) on Llama 2 — the findings consistently point in the same direction: *multilingual LLMs, when processing non-English inputs, tend to think in English internally*. When a Korean question is converted, inside the model, into latent representations aligned with English, then output back in Korean, the answer is Korean in form but English in its cognitive circuitry.

This is not a technical problem. It is a political one. When a government invests R&D funding in language-specialized LLMs under the banner of *Sovereign AI*, if the backbone of those models is an English-pretrained model with local-language fine-tuning on top — *do those models really think in the local language, or are they English hegemony wearing a local surface?*

Do multilingual LLMs *liberate* other languages, or *deepen* English hegemony? Every time this question rises, I think of the translators of Abbasid Baghdad. They lived inside the same question — was rendering Greek philosophy in Arabic a *liberation* of Greek thought, or its *Arabization?* The translators of twelfth-century Toledo lived inside the same question — was rendering Arabic medicine in Latin a *transmission* of Arab knowledge to the West, or its *expropriation?* A thousand years later, we are asking the same question in front of the LLM.

## 5. Orientalism — The Politics of Representation in the Digital Era

Edward Said's *Orientalism* (1978) argued that Western Oriental Studies did not *understand* the East but *constructed* it. When nineteenth-century British, French, and German Orientalists studied the civilizations of the Arab world, India, and Persia, their scholarship could not be separated from the gaze of colonial power. The East was made into the *irrational, stagnant, exotic* Other that the West needed in order to define itself as *rational, modern, progressive*. Said's critique was not merely a moral objection — it was a critique of *the very structure of knowledge production*. The Orientalists, regardless of intent, were producing the epistemological tools of colonial power.

Fierce debate followed the book. Bernard Lewis, in *The New York Review of Books* in 1982, criticized Said's generalizations and insisted on a distinction between *serious* Orientalism and *imperialist* Orientalism. In 2002, with *What Went Wrong?*, he pressed the case for internal problems of Islamic civilization. The Said–Lewis debate was, at heart, a debate about *whether knowledge and power are really inseparable* — and that debate has not closed.

This framing returns in the LLM era. When MENA (Middle East and North Africa) Arabic data is used to fine-tune English-centric models, *whose Arabic does the resulting model represent?* Arabic is a language of extreme *diglossia*. Modern Standard Arabic (MSA, *fuṣḥā*) is almost no one's mother tongue — it is the ceremonial and written variety learned in schools by every Arabic speaker. What people actually use in everyday life are the regional varieties: Moroccan *Darija*, Egyptian *Masri*, Gulf *Khaliji*, Levantine *Shami* — varieties that often fall below 50% mutual intelligibility in phonology, grammar, and vocabulary. Moroccan Darija carries heavy Berber and French influence. Egyptian Masri retains traces of a Coptic substrate. Gulf Khaliji carries significant Persian and Indic borrowings.

When multilingual LLMs handle "Arabic," most weight MSA — *because MSA is the variety most often written*. But the act of being written is itself a result of canonization. Who decided that a variety was *worth writing* was already a political decision. Since the colonial era, the power of MSA's textuality has been held by the urban elites of Cairo, Damascus, and Baghdad. As a result, LLMs handle *the Arabic of Cairo newspapers* well but almost cannot handle *the Arabic of the Marrakech market*.

During a stretch handling MENA Arabic data pipelines at a multilingual voice AI startup, I encountered this problem daily. When a global client asked for "an Arabic voice," *which Arabic* was never a self-evident question. Going with MSA satisfied no single region; going with a regional variety lost the rest of the market. At the data sourcing stage, the question of *whose voice to record from which region and class, whose text to take as the transcription standard* was always a political decision.

That experience made me re-encounter Said's critique not as abstract theory but as a practical problem of data curation. Recent work — Mohamed et al. (2020) on *Decolonial AI*, Birhane et al. (2022) on *The Forgotten Margins of AI Ethics* — extends Said's framing to AI datasets, model evaluation, and deployment decisions. The same kind of question is needed inside Korea. *Whose Korea does a Korean LLM represent?* If the training data is centered on standard Korean, the model may represent *the Korea of metropolitan middle classes* while shadowing the Koreas of other regions and classes. Korean AI researchers need to ask themselves about the possibility of *self-Orientalism*.

The question Said raised against two centuries of Orientalist scholarship — *who represents whom, through whose gaze* — has not disappeared in the LLM era. It has sharpened.

## 6. The Philologist's Seat Is Being Summoned Again

Philology declined as an academic discipline through the late nineteenth and twentieth centuries, fragmenting into comparative linguistics, historical linguistics, textual criticism, paleography, and bibliography. As an *integrated discipline*, philology came to resemble something museum-bound. As the humanities mainstream shifted, from the late twentieth century, from textual *interpretation* toward *critique*, the philologist's seat narrowed further.

But the LLM era summons the philologist's *habits of mind* back to active service. What are those habits? When a philologist sits with a text, a certain circuit of thought activates automatically.

> *In what context was this text produced? Who wrote it, for whom? In what medium, in what script? Through what canonization process did it survive? What transformations did it undergo in surviving? What were its relations to other contemporaneous texts? How has it been read by later generations? On what power structures did those readings rest?*

This circuit is not separate from LLM-era work.

**In dataset curation** — when deciding what texts to include, what variety to take as standard, what licenses to accept as canonical, the philologist's suspicion of canonization produces *technically better decisions*.

**In multilingual model evaluation** — when a question posed in English and in Korean elicits different answers from the model, distinguishing between technical noise and *the trace of linguistic hegemony* requires the philologist's gaze.

**In domain ontology construction** — during a stretch building integrated knowledge graphs from the manuals, service data, and parts data of global automotive OEMs, I confronted daily the fact that the same component carries *different names across manufacturers*, the same service procedure is *described differently across premium, luxury, and commercial-vehicle categories*, the same function is *categorized under different labels in European and Asian markets*. That work is the same kind of work as annotating a single line of a Sanskrit Upanishad — *what did this word mean in the Vedic period, how did it shift in the Upanishadic period, how did later Vedānta commentators reread it?* — different only in the use of the output. *A domain ontology is the canon system of a domain.*

**In multilingual RAG system design** — when a Korean query must retrieve Korean documents and respond in Korean, but the model processes everything through an English-aligned embedding space, *is that system Korean RAG, or the Korean surface of English RAG?* Answering this requires both a technical understanding of the internal structure of the embedding space and a philological suspicion about linguistic hegemony.

**In AI ethics and policy** — the under- or over-evaluation of Korean, Arabic, and Swahili models by English-centric benchmarks; the problem of synthetic data preventing models from learning *certain voices* — honest responses to these require humanistic suspicion about canonization, representation, and hegemony.

A discipline runs between the old desk and the present one. *The practice of following the text to the context that produced it. The gaze that looks for meaning in networks rather than surfaces. The habit of suspecting the politics of canonization. The refusal to forget that translation is political.* This discipline is not a museum piece. It is *a live tool of the LLM era*.

This essay is a notebook for not forgetting that tool.
