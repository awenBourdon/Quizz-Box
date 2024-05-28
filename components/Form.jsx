import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} une Question</span>
      </h1>
      <p className="desc text-left max-w-md">
        Écris et poste toutes les questions que tu veux partager avec le groupe !
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 "
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-400"> {/* Modifier la couleur du texte en gris clair */}
            Ta question
          </span>
          <textarea
            value={post.question}
            onChange={(e) => setPost({ ...post, question: e.target.value })}
            placeholder="Écris ta question ici..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-400"> {/* Modifier la couleur du texte en gris clair */}
            Mots-clés{" "}
            <span className="font-normal text-gray-400"> {/* Garder la couleur du sous-texte en gris clair */}
              ( Exemples : backend, frontend, réseaux ... )
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Annuler
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
