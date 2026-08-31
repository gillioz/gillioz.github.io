require "bibtex"
require "bibtex/filters"
require "jekyll"

# Parses the same _bibliography/papers.bib file used by jekyll-scholar and
# exposes it as site.data.cv_publications, so the CV pages never need to
# duplicate publication data by hand.
module CvPublications
  MONTH_NAMES = %w[Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec].freeze

  class Generator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      bib_path = site.in_source_dir(bibliography_path(site))
      return unless File.exist?(bib_path)

      bibliography = BibTeX.open(bib_path)
      entries = bibliography.filter_map { |entry| normalize(entry) }
      entries.sort_by! { |entry| [-entry["year"].to_i, -entry["month_numeric"]] }

      site.data["cv_publications"] = entries
    end

    private

    def bibliography_path(site)
      source = site.config.dig("scholar", "source") || "_bibliography"
      file = site.config.dig("scholar", "bibliography") || "papers.bib"
      File.join(source, file)
    end

    def normalize(entry)
      return nil unless entry.is_a?(BibTeX::Entry) && entry.year

      entry.convert!(:latex)

      authors = (entry.author || []).to_a.map do |name|
        { "first" => name.first.to_s, "last" => name.last.to_s }
      end

      venue = [entry[:journal], entry[:publisher], entry[:school]]
        .compact.map(&:to_s).reject(&:empty?).first || ""

      month_numeric = entry[:month_numeric].to_s.to_i
      month_name = MONTH_NAMES[month_numeric - 1] if month_numeric.between?(1, 12)

      doi = entry[:doi].to_s
      arxiv = (entry[:arxiv] || entry[:eprint]).to_s
      url = if !doi.empty?
              "https://doi.org/#{doi}"
            elsif !arxiv.empty?
              "https://arxiv.org/abs/#{arxiv}"
            else
              ""
            end

      {
        "key" => entry.key.to_s,
        "type" => entry.type.to_s,
        "title" => entry.title.to_s,
        "authors" => authors,
        "venue" => venue,
        "year" => entry.year.to_s,
        "month" => month_name,
        "month_numeric" => month_numeric,
        "doi" => doi,
        "arxiv" => arxiv,
        "url" => url,
        "note" => entry[:note].to_s,
        "pages" => entry[:pages].to_s,
        "selected" => entry[:selected].to_s == "true",
        "preview" => entry[:preview].to_s,
        "code" => entry[:code].to_s,
        "abbr" => entry[:abbr].to_s,
      }
    end
  end
end
