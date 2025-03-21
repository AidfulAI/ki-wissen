Poro ist ein großes Sprachmodell (Large Language Model, [[LLM]]) mit 34 Milliarden Parametern, das auf Finnisch, Englisch und Programmiercode trainiert wurde. Es wurde in einer Zusammenarbeit zwischen SiloGen von [[AMD Silo AI]], der TurkuNLP-Gruppe der Universität Turku und High Performance Language Technologies (HPLT) entwickelt.

## Geschichte und Entwicklung
Das Modell wurde auf dem LUMI-Supercomputer in Finnland trainiert, wobei Rechenressourcen vom CSC - IT Center for Science zur Verfügung gestellt wurden. Das Training umfasste etwa 1 Billion Token. Der Name "Poro" stammt vom finnischen Wort für Rentier.

## Technische Details
Poro basiert auf einer Decoder-Only-Transformer-Architektur mit folgenden Hauptmerkmalen:
- 34,2 Milliarden Parameter
- BLOOM-Architektur
- ALiBi-Embeddings für Kontextfenster-Extrapolation
- Training auf 512 AMD MI250X GPUs

## Besonderheiten
Das Modell zeichnet sich besonders durch seine mehrsprachigen Fähigkeiten aus:
- Vollständige Unterstützung für Finnisch und Englisch
- Fähigkeit zur grundlegenden Übersetzung zwischen beiden Sprachen
- Verarbeitung verschiedener Programmiersprachen
Mit 34 Millarden Paramtern und der Verfügbarkeit der Modellgewichte eigenet es sich zur Nutzung auf eigener Hardware wie beispielsweise Grafikkarten oder Macbooks mit mindestens 24GB Arbeitsspeicher.

## Lizenz und Verfügbarkeit
Poro ist Open Source und unter der Apache 2.0 Lizenz verfügbar.
Es kann beispielsweise via [Ollama](https://ollama.com/osoderholm/poro) genutzt werden.

## Quellen
[1] https://www.silo.ai/blog/poro-a-family-of-open-models-that-bring-european-languages-to-the-frontier 12.11.2023  
[2] https://www.silo.ai/blog/europes-open-language-model-poro-a-milestone-for-european-ai-and-low-resource-languages 20.2.2024
