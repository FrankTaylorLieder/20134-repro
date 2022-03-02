export * from "@solo-io/proxy-runtime/proxy";
import { RootContext, Context, registerRootContext, log, WasmResultValues, LogLevelValues
} from "@solo-io/proxy-runtime";


class SharedService extends RootContext {

  onConfigure(configuration_size: u32): bool {
    super.onConfigure(configuration_size);
    log(LogLevelValues.info, "singleton onConfigure! " + configuration_size.toString());
    return true
  }

  onStart(vm_config_size: usize): bool {
    log(LogLevelValues.debug, "context id: " + this.context_id.toString() + ": onStart(vm_config_size:" + vm_config_size.toString() + ")");
    return true;
  }
}

registerRootContext((context_id: u32) => { return new SharedService(context_id); }, "SharedService");
