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

## 1. What I Saw Between Two Desks

I studied linguistics as an undergraduate, then spent a while in graduate school on comparative religion and classical philology. Sumerian, Akkadian, Arabic, Hebrew, Sanskrit, Greek, Latin: I read these old languages spread out on one desk. What I took from that desk was less a grammar than a question. **"Why did this text survive, and who decided?"** Behind almost every text that lasted, there was a power that chose it, copied it, and kept it.

After that I lived in IT, as someone who builds things. I spent more than a decade building mobile solutions for global car and camera brands, and founded an on-demand car-wash platform that grew to 35 cities. At a multilingual voice AI startup I collected and labeled Arabic speech data from the Middle East and North Africa (MENA) myself and built multilingual TTS (text-to-speech) models with it. Then came AI transformation consulting for European premium and luxury car brands, financial accounting automation, a kiosk chatbot for commercial vehicles, and a vision system for parking control at repair shops. Today I build AI for last-mile logistics and furniture delivery.

The old question kept coming back while I built. When a client said "add an Arabic voice," the first thing to settle was "which region, whose Arabic?" When we merged maintenance data from several car brands, the same part had a different name at every company, and picking one name as the "standard" meant picking whose way of doing things we would follow. Choosing data looks like technical work, but in practice you are deciding what to keep and what to throw away, which is exactly what philologists have done for thousands of years.

Yet most of what the AI industry talks about now is "bigger and faster": bigger models, more tokens, higher benchmark scores. Governments declare Sovereign AI and race to build models in their own languages. Web data is running out, so the next AI gets trained on synthetic data that earlier AI produced. Inside this race, a few questions almost never come up. Who chose the text the model learned from? Which languages, whose voices, were left out? If a model that thinks in English underneath is dressed in Korean, is it a Korean model?

I read this as hegemony, or in plain terms, **a power game over who holds the board**. The board used to be whose imperial language became the language of scholarship and administration: Sumerian to Akkadian, Latin to English. Now the board is whose language data, and which company's filtering rules, become AI's "common sense." The board has changed, but the rules of the game look remarkably familiar. What bothers me is that today's AI talk frames the game as a performance contest and hardly ever as a question of power.

This essay is a notebook of what I saw going back and forth between the two desks. The conclusion is short: *the philologist's professional ethos does not disappear in the LLM era; it becomes necessary again.* I will get there in five steps: how data becomes canon (section 2), how meaning gets made (section 3), how language and power interlock (section 4), who speaks for whom (section 5), and what a philologist has to do in between (section 6).

## 2. Corpus — What Canonization Leaves Behind

**The claim that AI learned "the whole internet" is not true.** Someone decided where to scrape and what to filter out. This section asks one question: who chose the "text of the world" that AI learned?

In philology, the word *corpus* cannot be pulled apart from *canon*. What we call the Sumerian mythological corpus today is what survived because scribes of the nineteenth-century BCE *Edubba'a* (the cuneiform school) copied it as study texts. What we call the Masoretic Text, the canon of the Hebrew Bible, was made by the Masoretes between the sixth and tenth centuries, who fixed the consonantal text, the vowel signs, and the accents together. The result differs in no small way from the Septuagint, the Greek text used by the Jewish diaspora in Alexandria. What we call the Coptic Gnostic texts, the Nag Hammadi codices, are what had to be buried when fourth-century orthodox Christianity settled its canon. If someone had not hidden those books in a jar in the Egyptian desert, the Gnostic gospels would never have become texts. They would have stayed forever as the shadow of heresy.

Canonization, meaning the decision about what counts as an "official text," is an act of power. Choosing what becomes canon means deciding whose meaning deserves to survive. When Imam al-Bukhārī in the ninth century put only about 7,400 of nearly 600,000 hadith reports into *Ṣaḥīḥ al-Bukhārī*, that choice decided what would remain as the memory of orthodox Islam. The Sanskrit Vedic tradition separated *śruti* ("what is heard") from *smṛti* ("what is remembered") and so ranked how much sacredness each text would carry. A philologist handling a corpus starts by asking *why did this text survive?*, because surviving is already political.

LLM corpora (Common Crawl, BookCorpus, The Pile, RefinedWeb, FineWeb, Dolma) are products of canonization too. The moment someone decides which domains to collect, which languages to include, which content to filter, and which licenses count as acceptable training data, the corpus stops being neutral. In 2015 BookCorpus used 11,038 *unpublished* novels as training data. It was an ethical incident, because non-commercial digital copies went into training without the authors' consent. It was also a decision about what kind of English prose would become canon. When The Pile curated 22 domains including PubMed, arXiv, GitHub, and StackExchange, it chose what kind of knowledge would shape the model's thinking. FineWeb released a new 15-trillion-token corpus in 2024 with a filtering policy of English first, a set quality bar, and no toxicity. That policy redrew the line between orthodoxy and heresy in a new form.

A model trained when English makes up about 45-50% of Common Crawl gets called "multilingual" because a statistical majority has taken the seat of canon. Korean is under 0.7% of Common Crawl. Missing data is only part of the story. The rest is about how power is shared: which languages of thought get to take part in forming a new scholarly tool called the LLM.

I sat in that deciding seat myself. When we collected Arabic speech data, choosing which region and which speakers to record, and which sentences to treat as the standard transcript, was our call every time. At the time I thought we were setting a quality bar. Looking back, we were making a small canon. (I come back to this in section 5.)

The eye a philologist brings to *why the Masoretic Text differs from the Septuagint* is needed again when an LLM engineer asks *why English Wikipedia is fifty times larger than Korean Wikipedia*. Thousands of years apart, the two questions have the same shape.

Synthetic data, popular right now, can be read the same way. Teaching the next AI with text the last AI wrote is, in philological terms, making *a copy of a copy*. With each round of copying, errors and biases harden and the variety of the original shrinks. AI researchers warn about this too and call it model collapse (Shumailov et al., 2024). Canonization now repeats by the model's own hand rather than a person's.

## 3. Etymology and Embedding — Two Ways Meaning Gets Made

**How does AI know what a word means?** Philology looks for meaning in the history a word has passed through. AI looks for it in the neighboring words a word is used with. The two look alike but differ in one decisive way, and that difference is why AI cannot explain *why*.

Follow the Semitic root *ʾ-l*. Akkadian *ilu* (god), Ugaritic *ʾIlu* (the name of the Canaanite high god), Hebrew *ʾēl* (god) and its plural *ʾĕlōhīm*, Arabic *ʾilāh* (god) and its form with the definite article, *al-ʾilāh > Allāh*. Words from the same root widen or narrow their semantic field with era, society, and religious context. *ʾēl* was the name of the high god of the Canaanite pantheon, then became the common noun "god" inside Hebrew monotheism. The plural *ʾĕlōhīm* lands in a paradoxical spot: grammatically plural, but pointing to a single being. Meaning is not on the surface of a word. Every context the word has passed through over time piles up and becomes its meaning.

The same kind of tracing works in Indo-European. From the reconstructed Proto-Indo-European (PIE) root *deywos* (heavenly, divine) branch Latin *deus*, Greek *theos* (by a different consonant path), Sanskrit *deva*, Old English *Tīw* (the source of *Tuesday*), Old Norse *Týr* (the war god), and Gaulish *Diwos*. One root split into more than thirty Indo-European languages over roughly 5,000 years. The splitting followed rules of sound change (Grimm's Law, for instance, which explains the Germanic consonant shift), and the semantic field kept being rebuilt along the way. Comparative linguistics from the nineteenth century on was the work of tracing that rebuilding diachronically.

The Semitic root system is interesting in its own right. Semitic words are mostly built by laying vowel patterns over a root of three consonants (sometimes two or four). From the root *k-t-b* (to write) come *kataba* (he wrote), *kitāb* (book), *kātib* (writer), *maktab* (office), and *maktūb* (what is written). It is a kind of abstracted representation of meaning. The root is the abstract core of meaning, and the vowel pattern is the morphological transformation that turns it into a concrete word. *Seen one way, the Semitic root system is an abstract embedding of meaning that natural language evolved on its own.*

LLM embeddings are a tool that runs, statistically, the insight that meaning lives in a network of relations. The meaning of the token *ʾēl* gets compressed into the distribution of every context it appears in. That is the same kind of reasoning as an etymologist defining a word's meaning as "the historical distribution of contexts the word has passed through." J. R. Firth's 1957 line *"You shall know a word by the company it keeps"* became the basis of distributional semantics, and that straight line runs through word2vec (2013), GloVe (2014), ELMo (2018), BERT (2018), and on to the contextual embeddings of the GPT family.

When word2vec gave each word a single static vector, the problem of homonyms and polysemy showed up at once. Is "bank" a riverbank or a bank? One vector had to hold both meanings. The contextual embeddings of ELMo and BERT partly solved this by computing a token's representation over the context of the whole sentence it appears in. The same token got different representations in different contexts. That was a stricter way of acting on the distributional intuition that context decides meaning.

But embedding is not etymology. The difference goes all the way down.

Etymology is *diachronic*; embedding is *synchronic*. Etymology asks, through sound correspondences, borrowed scripts, and the movement of semantic fields, why this word came to have this meaning. Embedding only answers how close the word sits to other words in its present distribution. Etymology looks for causes; embedding shows correlations. Embedding cannot replace etymology because statistics cannot replace causation. Still, both clearly start from the same intuition, *that meaning lives in a network of relations*, and build it with different tools. When *computational philology* work such as Bouckaert et al. (2012) tried to rebuild the Indo-European family tree with Bayesian statistics, it was a case of embedding-style tools starting to answer etymology's questions.

And here the question from section 2 comes back. The "meaning" an embedding gives you is how the majority in the data uses the word. If the space was learned from data that is half English, even a Korean word's position gets set by its distance among English words. Etymology tried to record every branch a word split into; embedding averages meaning toward whichever use is most common. Minority uses, dialect meanings, and old meanings get buried in that average. Even in how meaning is made, whoever is the majority decides the outcome, and that leads straight into hegemony.

## 4. Hegemony — Language and Power Always Move Together

**Hegemony is a lead that everyone ends up following naturally, without anyone forcing it.** The common languages of history have changed several times, and each time knowledge, money, and power moved with them. Today the common language of AI is English.

The lingua franca of Mesopotamia (a shared language used across peoples) changed three times over about 3,000 years: Sumerian in the third millennium BCE, Akkadian in the second, Aramaic in the first. Interestingly, Sumerian survived for more than 1,500 years as a language of scholarship and religion after it died as a spoken language. Sumerian clay tablets were still being copied into the late Seleucid period in the first century CE. The pattern of a dead language staying on as the language that defines power is universal. Latin survived for more than a thousand years from the seventh century as the scholarly language of Western Europe, and Classical Chinese reigned for more than 1,200 years from the seventh century as the scholarly language of Korea, Japan, and Vietnam. Korea completed its practical shift from Classical Chinese to Hangul only in the late twentieth century. Vietnam's shift from *chữ Nôm* (the Vietnamese adaptation of Chinese characters) to the Latin-alphabet *chữ Quốc ngữ* cannot be separated from early-twentieth-century colonial policy. *A shift in linguistic hegemony is never only a linguistic event.*

The Mediterranean story is more familiar: Koine Greek (the Hellenistic age) → Latin (the late Roman Empire) → Arabic (the Islamic Golden Age, seventh to thirteenth centuries) → English (from the nineteenth century). Each shift was tied to a move in military, religious, and commercial power. When the Abbasid caliphate translated Greek philosophy, science, and medicine into Arabic at the *Bayt al-Ḥikma* (House of Wisdom) in ninth-century Baghdad, the hegemony of knowledge moved from Alexandria to Baghdad. When the Toledo School of Translators turned those Arabic works (al-Khwārizmī's algebra, Ibn Sīnā's medicine, Averroes' commentaries on Aristotle) back into Latin in the twelfth century, hegemony crossed back to the West. Under the British East India Company's rule of India in the eighteenth and nineteenth centuries, Persian, the lingua franca of Mughal administration, was replaced by English. That episode shows that replacing an administrative language is the colonial governing structure itself.

The lingua franca of the LLM era is English. English is more than "the language with more training data." It is carved into the models' structure of thought. Pires et al. (2019) analyzed mBERT (multilingual BERT) and showed that a multilingual model, while handling many languages, organizes its internal representations around distance from English as the central axis. Conneau et al.'s (2020) evaluation of XLM-R and Wendler et al.'s (2024) analysis of Llama 2 lean consistently the same way: multilingual LLMs think in English internally when they process non-English input. When a Korean question is turned into a latent representation aligned with English inside the model and then output again in Korean, the answer is Korean in form, but the circuit of thought is English.

That makes it a political problem as much as a technical one. When the Korean government invests R&D money in Korean-specialized LLMs under the banner of *Sovereign AI*, and the model is Korean fine-tuning laid over a backbone pretrained in English, does that model really think in Korean? Or is it English hegemony wearing a Korean surface? The question applies to every Korean model built by laying Korean data over an English backbone.

The lead also shows up as cost. AI cuts text into pieces called tokens, and the same sentence in Korean splits into more tokens than in English (Petrov et al., 2023). API pricing, response speed, and how much text fits in one request are all set in tokens. The structure lets people who write in English do the same work cheaper and faster. The way an old empire's common language lowered the cost of administration, today's common language lowers the cost of tokens.

For someone building AI for logistics and delivery in Korean, this is not abstract. It means that even for the same feature, a service for Korean users starts out more expensive and slower. Hegemony shows up on the invoice.

Do multilingual LLMs *liberate* other languages, or *deepen* English hegemony? Every time the question comes up, I think of the translators of Abbasid Baghdad. Was putting Greek philosophy into Arabic a liberation of Greek thought or its Arabization? They lived inside the same question. The twelfth-century translators of Toledo, putting Arabic medicine into Latin, lived inside the question of whether they were passing Arab knowledge to the West or appropriating it. A thousand years later, we ask the same question again in front of the LLM.

## 5. Orientalism — The Politics of Representation in the Digital Age

**Representation is drawing someone else on their behalf.** When AI talks about "the Arabs" or "Korea," whose eye does that picture come from? I put to today's AI the question Said put to Western scholarship in 1978.

Edward Said's *Orientalism* (1978) argued that Western Oriental Studies did not *understand* the East but *constructed* it. When nineteenth-century British, French, and German Orientalists studied Arab, Indian, and Persian civilizations, their work could not be separated from the gaze of colonial power. To define itself as rational, modern, and progressive, the West needed an irrational, stagnant, exotic Other. The East was made into that Other. Said's critique went past a moral objection and aimed at the structure of how knowledge is produced. Whatever their intentions, the Orientalists were building the epistemological tools of colonial power.

Fierce debate followed right after the book came out. In 1982, in the *New York Review of Books*, Bernard Lewis criticized Said's generalizations and argued for separating *serious Orientalism* from *imperialist Orientalism*. In 2002, with books like *What Went Wrong?*, he stressed problems internal to Islamic civilization. Said and Lewis argued over whether knowledge and power are truly inseparable, and the argument has not ended.

This framing returns in the LLM era. When Arabic data from MENA is used to fine-tune an English-centric model, whose Arabia does the model represent? Arabic is a language of severe *diglossia* (two varieties of one language living side by side). *Modern Standard Arabic* (MSA, *fuṣḥā*) is almost no one's mother tongue. It is the formal, written variety every Arabic speaker learns at school. What people actually use day to day are regional varieties such as Moroccan *Darija*, Egyptian *Masri*, Gulf *Khaliji*, and Levantine *Shami*. Their mutual intelligibility in sounds, grammar, and vocabulary sometimes drops below 50%. Moroccan Darija carries strong Berber and French influence, and Egyptian Masri keeps traces of a Coptic substratum. Gulf Khaliji is thick with Persian and Indian borrowings.

When multilingual LLMs handle "Arabic," they mostly put the weight on MSA, because MSA is the variety written down most. But being written down is itself a result of canonization. Who decided which variety was worth writing is already political. Since the colonial era, the power to write MSA has been held by the urban elites of Cairo, Damascus, and Baghdad. So an LLM handles *Cairo newspaper Arabic* well but can barely handle *Marrakech market Arabic*.

When I ran MENA Arabic data pipelines at a multilingual voice AI startup, I ran into this every day. When a global client asked us to "add an Arabic voice," the question of which Arabic was never obvious. Go with MSA and no single region is satisfied; go with one dialect and you lose the markets of the other regions. At the data sourcing stage, deciding which region and which class of speakers to record, and which text to use as the transcript standard, was a political decision every time.

That experience brought me back to Said's critique, this time as a working problem of data curation rather than abstract theory. Recent work such as Mohamed et al. (2020), *Decolonial AI*, and Birhane et al. (2022), *The Forgotten Margins of AI Ethics*, tries to carry Said's framing into AI datasets, model evaluation, and deployment decisions. The same kind of question is needed inside Korea. Whose Korea does a Korean LLM represent? Does training data built mostly on standard Korean represent the upper-middle-class Korea of the capital region and turn the Koreas of other regions and classes into shadows? A Korean AI researcher should put this question to themselves, with the possibility of *self-Orientalism* in mind.

The question Said raised while criticizing two hundred years of Orientalism (*who represents whom, through whose eyes*) has not gone away in the LLM era. If anything it has grown sharper.

## 6. The Philologist's Seat Is Called Back

Since the late nineteenth century, philology has declined as an academic field. As it split into comparative linguistics, historical linguistics, textual criticism, paleography, and bibliography, philology as a unified discipline came to look like a museum piece. From the late twentieth century, with structuralism and post-structuralism, the mainstream of the humanities moved from interpreting texts toward critiquing them, and the philologist's seat narrowed further.

But in the LLM era the philologist's *professional ethos* is being called back. What is that ethos? When a philologist faces a text, there is a circuit of thought that runs on its own.

> *In what context was this text made? Who wrote it, and for whom? On what medium, in what script? Through what canonization did it survive? What changes did it go through on the way? How does it relate to other texts of its time? How have later readers read it? On what structure of power did that reading itself rest?*

There are three main places in AI work where this circuit is needed.

**When choosing data and evaluating models.** Which texts go into training and which variety becomes the standard are canonization decisions. A philologist's suspicion keeps those decisions from hiding behind the name "quality filter." Evaluation is the same. If the same question asked in English and in Korean gets different answers, you need an eye that can tell a plain error from a trace of English-centered structure.

**When building a domain ontology.** When I was merging global car makers' manuals, maintenance data, and parts data into one knowledge graph, I ran into the same facts every day. The same part had a different name at each manufacturer. The same repair procedure was written differently across premium, luxury, and commercial-vehicle categories, and the same function was filed under different labels in the European and Asian markets. When you annotate a single line of a Sanskrit Upanishad, you also work out what the word meant in the Vedic period, how it changed in the Upanishadic period, and how later Vedānta commentators reread it. Ontology work is the same kind of work as that annotation; only the use of the result differs. *A domain ontology is a domain's canon system.*

**When designing Korean-language AI.** Even if a system asks in Korean, searches Korean documents, and answers in Korean, if it passes through an English-centered embedding space inside, is it Korean RAG, or English RAG dressed in Korean? English-centered benchmarks and synthetic data face the same question. Only technical understanding together with philological suspicion can answer it honestly.

There is a professional ethos that runs between the old desk and the new one. *The habit of following a text all the way to the context that made it, an eye that looks for meaning in the network of relations rather than on the surface, the habit of suspecting the power of canonization, and a sense that never forgets translation is political.* None of this belongs in a museum. In the LLM era it is still a working tool.

The question I learned at the old desk was *"Why did this text survive, and who decided?"* At the desk I sit at now, it changes to this: *"What did this model learn, and what did it not learn? Who decided?"* They are really the same question, and this essay is a notebook for not forgetting it.
