import React from 'react';

const DCMLPaperPost: React.FC = () => {
  return (
    <>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In advance of my presentation at NVIDIA GTC today, we{' '}
        <a
          href="https://raw.githubusercontent.com/nearai/por/refs/heads/main/DecentralizedConfidentialMachineLearning.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          just published
        </a>{' '}
        a pre-print of "Decentralized Confidential Machine Learning." We present a novel approach to training,
        fine-tuning, and utilizing models and agents that allows for the decentralized, transparent properties of open
        source while creating a business model for developers and researchers.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Currently, using advanced AI models requires giving up privacy of users' data and limits how models can be used.
        Meanwhile, open source models do not yet have a sustainable business model (not to mention, most open source AI
        is really just open weights). We present a decentralized system that enables the creation and deployment of LLMs
        and AI agents that are both open-source and monetizable; are private and verifiable while open for all to use;
        and preserve users' ownership of their data and assets while enabling customized experiences that improve their
        well-being.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The paper presents a design for a confidential, decentralized AI cloud that combines Trusted Execution
        Environments or TEEs (CPU and GPU) and payment channels with a mechanism called{' '}
        <a href="https://arxiv.org/abs/2502.10637" target="_blank" rel="noopener noreferrer" className="text-[#00EB9A] no-underline hover:underline">
          Proof of Response
        </a>{' '}
        to deliver service-level agreements in a decentralized environment. The DCML system is a big step towards making
        User-Owned AI a reality – and it makes use of new technology that has been available for less than a year.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The team went down this research path in particular because we believe TEEs are the best way to guarantee both
        confidentiality and verifiability together, i.e. not just a guarantee that the computation being run is what you
        expect, but that only this specific computation was done on this data and no other. Other potential solutions,
        such as ZKML, don't offer confidentiality. And despite recent improvements, homomorphic encryption still comes
        with massive overhead, which presents a major challenge at scale. TEEs, on the other hand, give strong
        guarantees on both confidentiality and verifiability with less overhead: in fact, the bigger the model, the less
        overhead. They also offer the additional guarantee that only this specific computation was done on this specific
        data, which you don't get from other approaches. (Side channel attacks are possible, but this is an addressable
        problem.).
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        We're using TEE to enable verifiable and confidential VM (CVM), in collaboration with Phala Network, to enable
        abstraction that anyone can use. This approach unlocks some powerful benefits:
      </p>

      <ul className="list-disc pl-6 mb-12 text-[#AFD0C5] text-lg leading-relaxed">
        <li className="mb-4">
          <strong className="text-white">Verifiable inference:</strong> load a model in and know your response isn't known by whoever is
          running hardware or software. You also get confirmation that the model you expected to be run, was indeed run.
        </li>
        <li className="mb-4">
          <strong className="text-white">Monetization of models:</strong> You can publish encrypted weights (which can only be decrypted inside
          the secure enclave) and then monetize the model since the secure enclave can enforce payment (streaming
          payments). Anytime someone wants to run inference, they attach proof of payment and get proof of compute used.
          Also supports monetization of user interactions without developers needing to deal with private data.
        </li>
        <li className="mb-4">
          <strong className="text-white">Fine tune on top of these models</strong> with your own private data and run them on someone else's
          hardware, and you can either use your model privately or monetize it for others to run.
        </li>
        <li className="mb-4">
          <strong className="text-white">Decentralized training:</strong> allows a set of participants to pool funds together, train the model,
          and share the profits in a decentralized manner (without trust requirements).
        </li>
        <li className="mb-4">
          <strong className="text-white">Enables creators</strong> to add safety restrictions to models.
        </li>
      </ul>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Decentralized confidential machine learning introduces end-to-end confidentiality and paths to monetization for
        both closed source and open source AI builders while offering solutions to some of the biggest problems facing
        the AI ecosystem today. We believe this decentralized system opens up paths to more distributed,
        energy-efficient AI systems; ensures global access for participants; and makes possible new use cases for which
        strict data confidentiality is required, whether corporate or personal.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        For more details, read the first version of the paper{' '}
        <a
          href="https://github.com/nearai/papers/blob/main/DecentralizedConfidentialMachineLearning.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          here
        </a>
        , which also includes results comparing how popular models perform in TEEs versus bare metal. We welcome
        comments and feedback.
      </p>
    </>
  );
};

export default DCMLPaperPost;
