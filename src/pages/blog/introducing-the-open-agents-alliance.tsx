import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';

const OpenAgentsAlliancePost = () => {
  return (
    <BlogPost
      title="Introducing the Open Agents Alliance"
      date="2025-02-27"
      author={{
        name: 'Jay Zalowitz',
      }}
    >
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        At ETHDenver 2025, the NEAR AI team introduced an exciting collaboration of forward-thinking teams including NEAR AI and Coinbase Onramp & AgentKit: the Open Agents Alliance (OAA), an initiative to deliver powerful, open source AI services to all users by combining infrastructure. With secure infrastructure powered by TEEs, an innovative and inclusive payment rail, and cutting-edge AI technology, the OAA teams' shared mission is to ensure secure, open source, economical, and fair AI access for humanity, prioritizing user privacy and economic inclusivity for over 5.5 billion web users worldwide.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        "As the global web continues to shift toward mobile users, we believe AI must be accessible to everyone," said Illia Polosukhin, Co-Founder of NEAR AI. "In partnership with leaders in hosting, privacy, and payments, we're building a globally distributed network that can provide AI services securely, confidentially, and at no cost to end users. This effort spans far beyond the current 350 million blockchain users, extending the power of crypto to deliver accessible AI tools to all."
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Through the OAA, participating organizations will offer end-to-end solutions—including multiple agentic AI frameworks, traffic sources, cloud hosting, secured by TEEs, and frictionless on/off-ramps to both fiat and crypto. By allowing developers to seamlessly build and deploy AI, and by sharing revenue with the contributors, the Alliance is paving the way for <strong>free</strong> AI inference at scale. This united front aims to replace the traditional "pay-to-play" model with a user-first approach for the benefit of all 5.5 billion people connected to the internet.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The following teams are already working together and will share progress in the coming months. For more updates and to join the alliance, you can visit{' '}
        <a href="https://openagentsalliance.org/" className="text-[#00EB9A] no-underline hover:underline">openagentsalliance.org</a>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          'NEAR AI',
          'Coinbase Onramp & AgentKit',
          'Eliza Labs',
          'Aethir',
          'Bitte Protocol',
          'Akash',
          'Phala Network',
          'Hyperbolic',
          'Exabits',
          'SWEAT Economy',
          'HOT',
          'Frax Finance',
          'Arc',
          'MotherDAO'
        ].map((team, index) => (
          <div key={index} className="bg-[#00EB9A]/10 p-4 rounded-lg flex items-center justify-center h-20 text-center">
            <p className="text-[#00EB9A] font-medium text-center w-full">{team}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 mb-12">
        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "We're honored to join the Open Agent Alliance, an initiative that echoes our commitment to fostering open and decentralized innovation. With Coinbase Onramp evolving as a foundational component for AI transactions and AgentKit empowering any agent with a wallet, we look forward to contributing to a more accessible and collaborative AI future."
          </p>
          <p className="text-[#00EB9A] font-medium">––Dan Kim, VP of BD at Coinbase Onramp & Agentkit</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "We're thrilled to join the Open Agents Alliance, fueling an open, decentralized future. Our AI Agents will make Sweat Wallet the smartest omnichain consumer crypto app, simplifying web3 so tens of millions can thrive. The road to trillions of agents goes through millions of actual Sweat Wallet users, and together, we're building an empowering, limitless web3."
          </p>
          <p className="text-[#00EB9A] font-medium">––Oleg Fomenko, Co-Founder and CEO of the SWEAT Economy</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "We're excited to be part of the Open Agents Alliance, an initiative that will redefine AI accessibility. By joining forces with like-minded innovators, Eliza Labs can contribute to a future where AI benefits everyone, no matter their background or resources."
          </p>
          <p className="text-[#00EB9A] font-medium">––Shaw Walters, Founder, Eliza Labs</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "Open Agenst Alliance's mission is to ensure Agent infrastructure remains open, permissionless, and decentralized. As the first decentralized cloud, OAA's mission aligns with Akash's, and we're super excited to contribute to this Alliance."
          </p>
          <p className="text-[#00EB9A] font-medium">––Greg Osuri, Founder of Akash</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "The future of AI depends on open, scalable infrastructure. By powering the Open Agents Alliance with decentralized cloud computing, we're making advanced AI accessible to billions– without the barriers of cost or control."
          </p>
          <p className="text-[#00EB9A] font-medium">––Mark Rydon, Co-Founder & CSO of Aethir</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "Agent systems should collaborate to establish a real 'don't be evil' baseline for AI's future."
          </p>
          <p className="text-[#00EB9A] font-medium">––Nate Geier, CEO & Founder of Bitte Protocol</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "The Open Agents Alliance is a bold step toward building trustless, autonomous AI agents that can operate securely at scale. All tools are in the box already––just ship the next generation of intelligent, decentralized systems right now."
          </p>
          <p className="text-[#00EB9A] font-medium">––Marvin Tong, CEO and Co-Founder of Phala Network</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "We believe in an open future where AI agents and assistants are user-owned, globally accessible, and empower individuals while ensuring fairness and privacy. Together, we build a community where collaboration always outweighs isolation."
          </p>
          <p className="text-[#00EB9A] font-medium">––Peter Volnov, CEO and Co-Founder of HOT Protocol</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "AI should be accessible not just from a user perspective but also the builder's and investor's perspective. The Open Agents Alliance Exabits is making GPUs, Compute, and the economic growth that comes alongside it accessible to all."
          </p>
          <p className="text-[#00EB9A] font-medium">––Jonathan Cosino Jaranilla, CIO of Exabits</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "Open Agents Alliance is a collaboration united by the belief that AI agents should be open, user-owned, and globally accessible, with fair rewards for builders. We stand behind the Alliance's core principles of user data ownership, privacy protection, and open-source empowerment. Together with NEAR AI and fellow builders, we're forging a future where AI assistants enrich daily life while respecting rights, transparency, and community-driven progress."
          </p>
          <p className="text-[#00EB9A] font-medium">––Ad Astra, contributor, Arc</p>
        </div>

        <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
          <p className="text-lg italic text-[#AFD0C5] mb-4">
            "Artificial intelligence shouldn't be shaped by the agendas of a few centralized companies––it must emerge through open, decentralized collaboration. That's why Mother is proud to join the Open Agents Alliance. We're bringing our expertise in agent coordination and validation, helping ensure AI agents can work together effectively while maintaining high standards of trust."
          </p>
          <p className="text-[#00EB9A] font-medium">––MotherDAO contributors</p>
        </div>
      </div>
    </BlogPost>
  );
};

export default OpenAgentsAlliancePost;
