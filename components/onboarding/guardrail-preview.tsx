import { Shield, Power } from "lucide-react"

export function GuardrailPreview() {
    return (
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 bg-[#C1FF72]/10 rounded-lg text-[#C1FF72]">
                    <Shield className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-1">Budget Protection</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        We will never exceed your daily budget caps.
                    </p>
                </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 bg-[#C1FF72]/10 rounded-lg text-[#C1FF72]">
                    <Power className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-1">Full Control</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        You can turn Autopilot on/off at any time.
                    </p>
                </div>
            </div>
        </div>
    )
}
