import React from 'react';

const AITPAnnouncementPost: React.FC = () => {
  return (
    <>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        NEAR AI is releasing today a Request for Comments (<a href="https://en.wikipedia.org/wiki/Request_for_Comments" className="text-[#00EB9A] no-underline hover:underline">RFC</a>) 
        of <a href="http://aitp.dev" className="text-[#00EB9A] no-underline hover:underline">AITP</a>: Agent Interaction and Transaction Protocol. 
        AITP enables AI agents to communicate securely across trust boundaries while providing extensible mechanisms for structured interactions. 
        We anticipate a future where agents are the dominant interface for all online interactions and transactions, representing people, businesses, 
        and institutions and communicating with users and each other.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        As AI is becoming more capable in decision-making and taking action, integrating more with existing tools, marketplaces, websites, and apps, 
        it is clear that a lot of existing businesses and applications are going to be replaced by AI Agents. An AI agent is a system that combines 
        reasoning capabilities via LLM and the ability to execute actions in the real world, just as humans are able to do. Three main types of AI agents are:
      </p>

      <ul className="list-disc pl-8 mb-12 text-[#AFD0C5] text-lg leading-relaxed">
        <li>Assistants: agent that works on behalf of the user and/or represents the individual</li>
        <li>"Service" agents: agents run by a person or a company for some task, where the company has access to all logs and can change results of the service</li>
        <li>Autonomous agents: represent themselves or their own token holders, require verifiable computation</li>
      </ul>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Agents generally operate using some combination of reasoning/thinking processes (via an AI model) and occasionally following defined rules and workflows. 
        With advances in AI models and supporting infrastructure, AI agents can support experiences that combine the scale and cost of online services with the 
        flexibility and personalization of in-person interactions, leading to net-better user experiences across a range of use cases. But while this future is 
        approaching quickly, making this advancement possible at scale comes with a lot of requirements.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Agents across diverse agent networks–i.e., the internet of agents–need to be able to interact securely and autonomously, make agreements and transactions, 
        and have a common standard for communication. Just as HTTP and HTML enable any web browser to visit any website, AITP provides a standard for agent-to-agent 
        and user-to-agent communication, regardless of where those agents run or how they're built.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        AITP is a big step towards enabling the Internet of Agents: providing a seamless, universal way for agents to interact with people and each other, 
        affording them far more autonomy and functionality and–importantly–the ability to participate in commerce, whether in crypto or fiat. More than adding 
        a new AI layer over today's web, we are providing a new protocol that fundamentally changes how interactions and transactions take place online. We will 
        see new experiences, new businesses and business models, and new forms of entertainment emerge as the agentic web takes shape.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        To read more about AITP–the vision, how it works, and how to use it–and to explore the GitHub repo, visit{' '}
        <a href="http://aitp.dev" className="text-[#00EB9A] no-underline hover:underline">aitp.dev</a>. 
        The team welcomes feedback and contributions to AITP, which is in the process of integration to NEAR AI Hub (app.near.ai) and various agents built by 
        NEAR AI and our collaborators.
      </p>
    </>
  );
};

export default AITPAnnouncementPost;
